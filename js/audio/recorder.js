/*
 modify by : cyhu(viskey.hu@gmail.com) 2014.4
 modify by : cyhu 2014.6.26

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function(window){
    
	var Recorder = function(source, cfg){
    var config = cfg || {};
    var bufferLen = getBufferSize();
	var outputArray = new Int8Array(258);
	var count = 0;
    //var outputBufferLength = config.outputBufferLength || 4000;
	//var outputBufferLength = config.outputBufferLength || 320;
	var compressPath = config.compressPath;
    this.context = source.context;
    this.node = this.context.createScriptProcessor(bufferLen, 1, 1);
    var record_worker = window.record;
	
	var funcSendAudio = null;
	var funcDisplay = null;
	var funcVadCheck = null;
	var vad_worker = null;
	var speex_worker = null;
	
	//if recording equals false , stop record . 
    //if recording equals true , start record . 	
	var recording = false;
	
	var outputArray = new Int8Array(258);
	var count = 0;
	
	var speexWbFrameLen = [ 10, 15, 20, 25, 32, 42, 52, 60, 70, 86, 106 ];
	
	function getBufferSize() {
		if (/(Win(dows )?NT 6\.2)/.test(navigator.userAgent)) {
			return 1024;  //Windows 8
		} else if (/(Win(dows )?NT 6\.1)/.test(navigator.userAgent)) {
			return 1024;  //Windows 7
		} else if (/(Win(dows )?NT 6\.0)/.test(navigator.userAgent)) {
			return 2048;  //Windows Vista
		} else if (/Win(dows )?(NT 5\.1|XP)/.test(navigator.userAgent)) {
			return 4096;  //Windows XP
		} else if (/Mac|PPC/.test(navigator.userAgent)) {
			return 1024;  //Mac OS X
		} else if (/Linux/.test(navigator.userAgent)) {
			return 8192;  //Linux
		} else if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
			return 2048;  //iOS
		} else {
			return 16384;  //Otherwise
		}
	};
	
    record_worker.postMessage({
      command: 'init',
      config: {
	    compressPath:compressPath,
        sampleRate: this.context.sampleRate,
        outputBufferLength: bufferLen
      }
    });
	
    this.node.onaudioprocess = function(e){
	    if (!recording) return;
		
		/**var output = new Float32Array(e.inputBuffer.getChannelData(0).length);
		for(var i = 0; i < e.inputBuffer.getChannelData(0).length; i++)
			output[i] = e.inputBuffer.getChannelData(0)[i];
		
		window.socket.emit("resample_data", output.buffer);**/
		record_worker.postMessage({
			command: 'record',
			buffer: e.inputBuffer.getChannelData(0)
		});		
    }

    this.configure = function(cfg){
      for (var prop in cfg){
        if (cfg.hasOwnProperty(prop)){
          config[prop] = cfg[prop];
        }
      }
    }
 
	var flag = false;
 
    this.record = function(func_display, func_send_audio, func_vad_check){
	
    	recording = true;
		funcSendAudio = func_send_audio;
		funcDisplay = func_display;
		funcVadCheck = func_vad_check;
		count = 0;
		wait_count = 0;
		
		record_worker.postMessage({command: 'reset'});
		vad_worker = window.vad;
		vad_worker.postMessage({command: 'init'});
	    vad_worker.onmessage = function(e){
			if(e.data.type == "debug"){
				//postMessage({type:"debug", message:e.data.message}); 
				//LOGCAT(e.data.message);
			} else if(e.data.command == "esvad") {
				funcVadCheck(e.data.message);
			} else if(e.data.command == "volume") {
				//postMessage({command:"volume", message:e.data.message});
				//do nothing
			}
	    };
		
		speex_worker = window.compress;
	    speex_worker.postMessage({command: 'init'});
		speex_worker.onmessage = function(e){
			if(e.data.type == "debug"){
				//postMessage({type:"debug", message:e.data.message}); 
				//LOGCAT(e.data.message);
			} else if(e.data.command == "encode") {
				var buffer = e.data.buffer;
				var result = new Int8Array(buffer.length);
				for(var i = 0; i < buffer.length; i++)
					result[i] = buffer[i];
				funcSendAudio(2, result.buffer);
			} 
	    };
    }
	
    this.stop = function(){
    	recording = false;
    }

	
    record_worker.onmessage = function(e){
		if(e.data.type == "debug"){
    		//LOGCAT(e.data.message);
    	} else if(e.data.command == "esvad"){
			//funcVadCheck(e.data.message);
		} else if(e.data.command == "volume"){
			//not used.
		} else {
    		//return audio data			
			funcDisplay(e.data.volume);
			
			var buffer = e.data.buffer;
			var result = new Int16Array(buffer.length);
			for(var i = 0; i < buffer.length; i++)
				result[i] = buffer[i];
			
			vad_worker.postMessage({
				command : 'appendData',
				pcmData : result,
				nSamples : result.length
			});
			
			//funcSendAudio(2, result.buffer);
			
			var output = new Int8Array();
			var output_length;
			
			wait_count ++;
			speex_worker.postMessage({
				command : 'encode',
				inData : result,
				inOffset : 0,
				inCount : result.length,
				outData : output,
				outOffset : 0,
				outCount :output_length
			});	
    	}
      
    }
    
	source.connect(this.node);
    this.node.connect(this.context.destination); 
  };

  window.Recorder = Recorder;

})(window);

