/*
 author:cyhu(viskey.hu@gmail.com) 2015.4.14

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
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

var brower_info                     =     {
                                              "sys"      :    null,
	                                          "type"     :    null,
	                                          "link"     :    null
                                          };
/* */
var print_log                       =     true;
       
var websocket_url                   =     'wss://h5.openspeech.cn/iat.do';
var reconnection                    =     false;
var reconnection_delay              =     999999;
var force_new_connection            =     true;
var buffer_length                   =     0;
this.node                           =     null;
var recording                       =     false;
var audio_recorder                  =     null;
var	audio_context                   =     null;
var audio_stream                    =     null;
var iat_session_id                  =     null;
var iat_params_obj                  =     null;
var record_buffers                  =     [];
var pcm_data                        =     [];
var iflytek_count                   =     0;
var synid                           =     0;
var func_on_volume                  =     null;
var func_on_iat_result              =     null;
var func_on_iat_process             =     null;
var func_on_audio                   =     null;
var browser_id                      =     new Fingerprint().get();
var session_info                    =     {
                                               "errorcode"     :    null,
                                               "epstatues"     :    null,
                                               "rsltstatus"    :    null,
                                               "sesstatus"     :    null,
                                               "result"        :    null
                                          };

var record_worker                   =     null;
var vad_worker                      =     null;
var speex_worker                    =     null;

var rec_state                       =     'idle';
var vad_worker                      =     null;
var speex_worker                    =     null;
var is_rerecord_request             =     false;

var KEY_CONNECT                     =     'connect';
var KEY_DISCONNECT                  =     'disconnect';
var KEY_QISR_SSB                    =     'ssb';
var KEY_QISR_AUW                    =     'auw';
var KEY_QISR_GRS                    =     'grs';
var KEY_QISR_SSE                    =     'sse';
var KEY_VER                         =     "ver";
var KEY_SUB                         =     'sub';
var KEY_CMD                         =     'cmd';
var KEY_MSG                         =     'msg';
var KEY_DATA                        =     'data';
var KEY_PARAMS                      =     'params';
var INTERVAL_GET_RESULT             =      100;

var ua = navigator.userAgent.toLowerCase();
if(((/msie/.test(ua) && !/opera/.test(ua)) || ((/msie/.test(ua)||/trident/.test(ua)) && !/opera/.test(ua))))
  brower_info.type = 'ie';
else if(ua.match(/firefox\/([\d.]+)/))
  brower_info.type = 'firefox';
else if(ua.match(/chrome\/([\d.]+)/))
  brower_info.type = 'chrome';
else if(ua.match(/opera.([\d.]+)/))
  brower_info.type = 'opera';
else if(ua.match(/version\/([\d.]+).*safari/))
  brower_info.type = 'safari';
else 
  brower_info.type = 'other';

if( brower_info.type == 'ie' || brower_info.type == 'other' ) {
	swfobject.registerObject("myId", "9.0.0", "http://webapi.openspeech.cn/recorder.swf");
	window.use_flash = true;
} else {
  window.use_flash = false;
}
  
if(!!ua.match(/AppleWebKit.*Mobile.*/)||!!ua.match(/AppleWebKit/))
  brower_info.sys = 'mobile';
else if(!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
  brower_info.sys = 'ios';
else if(ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1)
  brower_info.sys = 'android';
else if(ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1)
  brower_info.sys = 'iPhone';
else if(ua.indexOf('iPad') > -1)
  brower_info.sys = 'iPad';
else if(navigator.userAgent.indexOf('MicroMessenger') > -1)
  brower_info.sys = 'Weixin';
else 
  brower_info.sys = 'other';

//if(brower_info.type == 'ie' || ((brower_info.type == 'chrome' || brower_info.type == 'opera') &&  brower_info.sys != 'other'))
//{
  brower_info.link = 'mp3';
//}else if(brower_info.sys == 'Weixin'){
  //brower_info.link = 'mp3';
//}

function base64ToArray(base64) {
	var binary_string =  window.atob(base64);
	var len = binary_string.length;
	var bytes = new Uint8Array( len );
	for (var i = 0; i < len; i++)
	{
		bytes[i] = binary_string.charCodeAt(i);
	}
	return new Int16Array(bytes.buffer);
}

function getFlashObj() {
  var flashName = "iFlyFex";
  if (window.document[flashName]) { 
    return window.document[flashName]; 
  } 
  if (navigator.appName.indexOf("Microsoft Internet") == -1) { 
	  if (document.embeds && document.embeds[flashName]) 
	  return document.embeds[flashName]; 
  } else { // if (navigator.appName.indexOf("Microsoft Internet")!=-1) 
	  return document.getElementById(flashName); 
  } 
}

function register_connection_listener()
{
	window.socket.onopen = function () {
      console.log("connected to server ...");
		  var json = {"ver" : "1.0", "sub" : "iat", "cmd" : "ssb", "msg" : "request", "data" : { "params" : iat_params_obj.params }};
		  console.log(iat_params_obj.params);
		  console.log(JSON.stringify(json));
		  window.socket.send(JSON.stringify(json));
    }
    
	window.socket.onclose = function (e) {
		console.log("client disconnect ...");
  }
	
	window.socket.onmessage = function (obj) {
		console.log("on message.......");
		console.log(obj);
		var json = strToJson(obj.data);
		var sub = json.sub;
		var cmd = json.cmd;
		var data = json.data;
		var ret = 0;
		console.log("cmd : " + cmd);
		if (cmd == 'ssb') {
			QISR_SESSION_BEGIN(json);
		} else if (cmd == 'auw') {
			//QISR_AUDIO_WRITE(data);
		} else if (cmd == 'grs') {
			console.log(data);
			ret = json.ret;
			if(ret == 0)
			{
				QISR_GET_RESULT(data);
			}else {
				console.log("get result error, ret :" + ret);
				iatSessionEnd(0);
			}
			
		} else if (cmd == 'sse') {
			QISR_SESSION_END(data);
		}
	}
}

function LOGCAT(str)
{
    if(print_log) console.log('[' + getCurrentTime() + ']  ' + str);
}

function getCurrentTime()
{ 
    var now = new Date();      
    var year = now.getFullYear();      
    var month = now.getMonth() + 1;    
    var day = now.getDate();           
    var hh = now.getHours();          
    var mm = now.getMinutes();          
       
    var clock = year + "-";      
    if(month < 10)
        clock += "0";
    clock += month + "-";       
    if(day < 10)
        clock += "0";           
    clock += day + " ";   
    if(hh < 10)
        clock += "0";       
    clock += hh + ":";
    if (mm < 10) 
	    clock += '0'; 
	clock += mm; 
    return(clock); 
}

/*
 * 初始化录音对象
 */
function initUserMedia( source, compressPath) {
	var buffer_length    =     getBufferSize();
	this.context         =     source.context;
    this.node            =     this.context.createScriptProcessor(getBufferSize(), 1, 1);
	record_worker.postMessage({
		command: 'init',
		config: {
			compressPath : compressPath,
			sampleRate : this.context.sampleRate,
			outputBufferLength : buffer_length
		}
	});
	source.connect(this.node);
	this.node.connect(this.context.destination);

	this.node.onaudioprocess = function(e){
		if (!recording) return;
		record_worker.postMessage({
			command: 'record',
			buffer: e.inputBuffer.getChannelData(0)
		});
	}

	record_worker.onmessage = function(e){
		if(e.data.command == "esvad"){
		} else {
			func_on_volume(e.data.volume);
			var buffer = e.data.buffer;
			if(func_on_audio != undefined) func_on_audio(buffer);
			var result = new Int16Array(buffer.length);
			for(var i = 0; i < buffer.length; i++)
				result[i] = buffer[i];
			vad_worker.postMessage({
				command : 'appendData',
				pcmData : result,
				nSamples : result.length
			});

			var output = new Int8Array();
			var output_length;
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
}

/*
 * 针对不同的设备设置音频缓冲区大小
 */
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

function iflytek_iat_record(){
	recording = true;
	record_worker.postMessage({command: 'reset'});
}

function iflytek_iat_stop (){
	recording = false;
	if( window.use_flash == true )
	{
		getFlashObj().iflyStop();
	}
}

function Resampler(fromSampleRate, toSampleRate, channels, outputBufferSize, noReturn) {
	this.fromSampleRate = fromSampleRate;
	this.toSampleRate = toSampleRate;
	this.channels = channels | 0;
	this.outputBufferSize = outputBufferSize;
	this.noReturn = !!noReturn;
	this.initialize();
}
Resampler.prototype.initialize = function () {
	if (this.fromSampleRate > 0 && this.toSampleRate > 0 && this.channels > 0) {
		if (this.fromSampleRate == this.toSampleRate) {
			this.resampler = this.bypassResampler;
			this.ratioWeight = 1;
		} else {
			if (this.fromSampleRate < this.toSampleRate) {
				this.compileLinearInterpolationFunction();
				this.lastWeight = 1;
			} else {
				this.compileMultiTapFunction();
				this.tailExists = false;
				this.lastWeight = 0;
			}
			this.ratioWeight = this.fromSampleRate / this.toSampleRate;
			this.initializeBuffers();
		}
	}
	else {
		throw(new Error("Invalid settings specified for the resampler."));
	}
}
Resampler.prototype.compileLinearInterpolationFunction = function () {
	var toCompile = "var bufferLength = buffer.length;\
	var outLength = this.outputBufferSize;\
	if ((bufferLength % " + this.channels + ") == 0) {\
		if (bufferLength > 0) {\
			var ratioWeight = this.ratioWeight;\
			var weight = this.lastWeight;\
			var firstWeight = 0;\
			var secondWeight = 0;\
			var sourceOffset = 0;\
			var outputOffset = 0;\
			var outputBuffer = this.outputBuffer;\
			for (; weight < 1; weight += ratioWeight) {\
				secondWeight = weight % 1;\
				firstWeight = 1 - secondWeight;";
	for (var channel = 0; channel < this.channels; ++channel) {
		toCompile += "outputBuffer[outputOffset++] = (this.lastOutput[" + channel + "] * firstWeight) + (buffer[" + channel + "] * secondWeight);";
	}
	toCompile += "}\
			weight -= 1;\
			for (bufferLength -= " + this.channels + ", sourceOffset = Math.floor(weight) * " + this.channels + "; outputOffset < outLength && sourceOffset < bufferLength;) {\
				secondWeight = weight % 1;\
				firstWeight = 1 - secondWeight;";
	for (var channel = 0; channel < this.channels; ++channel) {
		toCompile += "outputBuffer[outputOffset++] = (buffer[sourceOffset" + ((channel > 0) ? (" + " + channel) : "") + "] * firstWeight) + (buffer[sourceOffset + " + (this.channels + channel) + "] * secondWeight);";
	}
	toCompile += "weight += ratioWeight;\
				sourceOffset = Math.floor(weight) * " + this.channels + ";\
			}";
	for (var channel = 0; channel < this.channels; ++channel) {
		toCompile += "this.lastOutput[" + channel + "] = buffer[sourceOffset++];";
	}
	toCompile += "this.lastWeight = weight % 1;\
			return this.bufferSlice(outputOffset);\
		}\
		else {\
			return (this.noReturn) ? 0 : [];\
		}\
	}\
	else {\
		throw(new Error(\"Buffer was of incorrect sample length.\"));\
	}";
	this.resampler = Function("buffer", toCompile);
}
Resampler.prototype.compileMultiTapFunction = function () {
	var toCompile = "var bufferLength = buffer.length;\
	var outLength = this.outputBufferSize;\
	if ((bufferLength % " + this.channels + ") == 0) {\
		if (bufferLength > 0) {\
			var ratioWeight = this.ratioWeight;\
			var weight = 0;";
	for (var channel = 0; channel < this.channels; ++channel) {
		toCompile += "var output" + channel + " = 0;"
	}
	toCompile += "var actualPosition = 0;\
			var amountToNext = 0;\
			var alreadyProcessedTail = !this.tailExists;\
			this.tailExists = false;\
			var outputBuffer = this.outputBuffer;\
			var outputOffset = 0;\
			var currentPosition = 0;\
			do {\
				if (alreadyProcessedTail) {\
					weight = ratioWeight;";
	for (channel = 0; channel < this.channels; ++channel) {
		toCompile += "output" + channel + " = 0;"
	}
	toCompile += "}\
				else {\
					weight = this.lastWeight;";
	for (channel = 0; channel < this.channels; ++channel) {
		toCompile += "output" + channel + " = this.lastOutput[" + channel + "];"
	}
	toCompile += "alreadyProcessedTail = true;\
				}\
				while (weight > 0 && actualPosition < bufferLength) {\
					amountToNext = 1 + actualPosition - currentPosition;\
					if (weight >= amountToNext) {";
	for (channel = 0; channel < this.channels; ++channel) {
		toCompile += "output" + channel + " += buffer[actualPosition++] * amountToNext;"
	}
	toCompile += "currentPosition = actualPosition;\
						weight -= amountToNext;\
					}\
					else {";
	for (channel = 0; channel < this.channels; ++channel) {
		toCompile += "output" + channel + " += buffer[actualPosition" + ((channel > 0) ? (" + " + channel) : "") + "] * weight;"
	}
	toCompile += "currentPosition += weight;\
						weight = 0;\
						break;\
					}\
				}\
				if (weight == 0) {";
	for (channel = 0; channel < this.channels; ++channel) {
		toCompile += "outputBuffer[outputOffset++] = output" + channel + " / ratioWeight;"
	}
	toCompile += "}\
				else {\
					this.lastWeight = weight;";
	for (channel = 0; channel < this.channels; ++channel) {
		toCompile += "this.lastOutput[" + channel + "] = output" + channel + ";"
	}
	toCompile += "this.tailExists = true;\
					break;\
				}\
			} while (actualPosition < bufferLength && outputOffset < outLength);\
			return this.bufferSlice(outputOffset);\
		}\
		else {\
			return (this.noReturn) ? 0 : [];\
		}\
	}\
	else {\
		throw(new Error(\"Buffer was of incorrect sample length.\"));\
	}";
	this.resampler = Function("buffer", toCompile);
}

Resampler.prototype.bypassResampler = function (buffer) {
	if (this.noReturn) {
		this.outputBuffer = buffer;
		return buffer.length;
	}
	else {
		return buffer;
	}
}

Resampler.prototype.bufferSlice = function (sliceAmount) {
	if (this.noReturn) {
		return sliceAmount;
	}
	else {
		try {
			return this.outputBuffer.subarray(0, sliceAmount);
		}
		catch (error) {
			try {
				this.outputBuffer.length = sliceAmount;
				return this.outputBuffer;
			}
			catch (error) {
				return this.outputBuffer.slice(0, sliceAmount);
			}
		}
	}
}

Resampler.prototype.initializeBuffers = function () {
	try {
		this.outputBuffer = new Float32Array(this.outputBufferSize);
		this.lastOutput = new Float32Array(this.channels);
	} catch (error) {
		this.outputBuffer = [];
		this.lastOutput = [];
	}
}

function writeIflyAudio(data)
{
	if(rec_state == 'grs') return;
	rec_state = 'auw';
	var int16Array = base64ToArray(data);
	var len = int16Array.length;
	for(var i = 0; i < len; i++)
	{
		pcm_data.push(int16Array[i]);
	}

	while(pcm_data.length > 320)
	{
		var items = pcm_data.splice(0, 320);
		writeIatAudio(items, 2);
	}
}

function writeIatAudio(data, state)
{
    if(state == 4)
	{
	    getIatResult(0);
	    return;
	}

	var result = new Int16Array(320);
	for(var i = 0; i < 320; i++)
		result[i] = data[i];
	
    vad_worker.postMessage({
		command : 'appendData',
		pcmData : result,
		nSamples : result.length
	});
	var output = new Int8Array();
	var output_length;
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

function onVolume(volume)
{
	func_on_volume(volume);
}

function sendAudio(data, state)
{
	//console.log('sendAudio...');
	if(rec_state == 'grs') return;
    rec_state = 'auw';	

	if(iat_session_id != null && iat_session_id != undefined)
	{
		iflytek_count ++;
		if(state != 4)
			record_buffers.push(new Int8Array(data));
		if(iflytek_count == 6 || state == 4)
		{
			iflytek_count = 0;
			var output = record_buffers.splice(0, record_buffers.length);
			var outputArray = new Int8Array(output.length * 43);
			for(var i = 0; i < output.length; i++)
				outputArray.set(output[i], i*43);
			var str = "";

            for (var i = 0; i < output.length * 43; i++) {
				str += String.fromCharCode( outputArray[i] );
			}
			synid = synid + 1;
			var json = {"ver" : "1.0", "sub" : "iat", "cmd" : "auw", "msg" : "request", "sid" : iat_session_id
			    , "data" : { "synid" : "" + synid, "audiolen" :  "" + output.length * 43, "audiostatu" : "" + 2, "audio" : base64encode(str)}};
			console.log(json);
	        window.socket.send(JSON.stringify(json));
			console.log("---------------------------------");
		} 
		if(state == 4) {
			var str = "";	
			synid = synid + 1;
			var json = {"ver" : "1.0", "sub" : "iat", "cmd" : "auw", "msg" : "request", "sid" : iat_session_id
			    , "data" : { "synid" : "" + synid, "audiolen" :  "" + 0, "audiostatu" : "" + 4, "audio" : base64encode(str)}};
			console.log(json);	
	        window.socket.send(JSON.stringify(json));
			synid = 0;
		}
	}
}

function getIatResult(wait_time)
{
  iflytek_iat_stop();
	if(rec_state == 'auw')
	{
		var buffer = new ArrayBuffer(2);
		var data = new Int16Array(buffer);
		data[0] = 0;
		sendAudio(data, 4);
		if(func_on_iat_process != undefined) func_on_iat_process('onStop');
		rec_state = 'grs';
	}
	
	if(rec_state == 'grs')
	{
		var json = { "ver" : "1.0", "sub" : "iat", "cmd" : "grs", "msg" : "request", "sid" : iat_session_id };
		console.log(json);
	    window.socket.send(JSON.stringify(json));
	}
}

function iatSessionEnd(wait_time)
{	
	if(rec_state == 'sse' && iat_session_id != null)
	{
	   var json = { "ver" : "1.0", "sub" : "iat", "cmd" : "sse", "msg" : "request", "sid" : iat_session_id };
	    window.socket.send(JSON.stringify(json));
	}
	is_rerecord_request = true;
	rec_state = 'idle';
}

function initMedia() {
	if (!navigator.getUserMedia) {
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	}
	if (!navigator.cancelAnimationFrame)
		navigator.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
	if (!navigator.requestAnimationFrame)
		navigator.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;
		
	navigator.getUserMedia({audio:true}, gotStream, function(e) {
		console.log("getUserMedia error");
		func_on_volume(-1);
	});
	window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
	audio_context = new window.AudioContext();
	if(audio_context == undefined)
	{
		console.log("getUserMedia error");
		func_on_volume(-1);
	}
}

function gotStream(stream) {
	audio_stream = stream;
    var inputPoint = audio_context.createGain();

    var realAudioInput = audio_context.createMediaStreamSource(stream);
    var audioInput = realAudioInput;
    audioInput.connect(inputPoint);

	analyserNode = audio_context.createAnalyser();
    analyserNode.fftSize = 2048;
    inputPoint.connect( analyserNode );

	initUserMedia(inputPoint);
    iflytek_iat_start(iat_params_obj, func_on_volume, func_on_iat_result
	    , func_on_iat_process, func_on_audio);
}

function releaseStream() {
    if(audio_stream != null)
	{
		audio_stream.stop();
		audio_stream = null;
	}
}

function initParams(cfg)
{
    if( cfg.writeAudio != undefined && cfg.writeAudio != null ) window.waflag = cfg.writeAudio; 
    if( cfg.reconnection != undefined && cfg.reconnection != null ) reconnection = cfg.reconnection;
    if( cfg.reconnection_delay != undefined && cfg.reconnection_delay != null ) reconnection_delay = cfg.reconnectionDelay;
	
    if(cfg.compress != undefined && cfg.compress != null)
    {
	    var WORKER_SPEEX_PATH = "./js/common/" + cfg.compress + ".js";
	    if(cfg.speex_path != undefined && cfg.speex_path != null)
		    speex_worker = new Worker(cfg.speex_path);
	    else
		    speex_worker = new Worker(WORKER_SPEEX_PATH);

	    var WORKER_VAD_PATH = "./js/common/vad.js";
	    if(cfg.vad_path != undefined && cfg.vad_path != null)
		    vad_worker = new Worker(cfg.vad_path);
	    else
		    vad_worker = new Worker(WORKER_VAD_PATH);
	
	    var WORKER_RECORDER_PATH = './js/audio/recorderWorker.js';
	    if(cfg.recorder_path != undefined && cfg.recorder_path != null)
            record_worker = new Worker(cfg.recorder_path);
	    else
            record_worker = new Worker(WORKER_RECORDER_PATH);
    }
	
	/**if( window.brower_info == undefined || window.brower_info == null )
	{
		document.write("<script src='http://webapi.openspeech.cn:80/js/util/brow.js'><\/script>");
	}**/
}

function IFlyIatSession(cfg){
    initParams(cfg);

	/*
	 * start a speech recognition session, schedule: start->stop/local spot end
	 * ->on result->on end -> next session
	 * @params         parameters for recognition 
	 * @funcOnVolume   on volume listener
	 * @funcOnStop     on stop 
	 * @funcOnResult   on result
	 * @funcOnEnd      on end
	 */
	this.start = function(params, funcOnVolume, funcOnResult, funcOnProcess, funcOnAudio)
	{	
	    iflytek_iat_start(params, funcOnVolume, funcOnResult, funcOnProcess, funcOnAudio);
	}

	/*
	 * stop record or write audio
	 */
	this.stop = function()
	{
		getIatResult(0);
	}
	
	/*
	 * write  audio
	 * @data  audio data(type : ByteArray)
	 * @state audio statues(2 : writing��4: last audio)
	 */
	this.writeAudio = function(data, state)
	{
	    writeIatAudio(data, state);
	}
	
	/*
	 * cancel recognition
	 */
	this.cancel = function()
	{
		iflytek_iat_cancel();
	}
}

function iflytek_iat_start(params, funcOnVolume, funcOnResult, funcOnProcess, funcOnAudio)
{
    if( arguments.length < 3 )
	{
	   LOGCAT("INPUT PARAMETERS ERROR");
	   return -1;
	} 
	
	func_on_volume = funcOnVolume;
	func_on_iat_result = funcOnResult;
	if(funcOnProcess != undefined) func_on_iat_process = funcOnProcess;
	if(funcOnAudio != undefined) func_on_audio = funcOnAudio;
	iat_params_obj = params;

	/* 若使用Flash 或 写音频接口 或 非首次初始化 则不进行多媒体初始化*/
	if( window.waflag != true && audio_stream == null && window.use_flash != true)
	{	    	
		initMedia();
		return;
	}

	if(window.socket == null || window.socket == undefined || window.socket.readyState != 1)
	{
		console.log( websocket_url );
		window.socket = new WebSocket(websocket_url);
	}
	register_connection_listener();
	
	iat_params_obj.params = iat_params_obj.params + ", rse = utf8, browser_id=" + browser_id + ",host=" + document.domain;
	var json = {"ver" : "1.0", "sub" : "iat", "cmd" : "ssb", "msg" : "request", "data" : { "params" : iat_params_obj.params }};
	if (is_rerecord_request) {
		sendRequestMessage();
	}

	rec_state = 'ssb';
	session_info.errorcode = 0;
	session_info.result = null;
	
	if(window.waflag != true) {
		if (window.use_flash != true) {
			iflytek_iat_record();
		} else {
			recording = true;
			getFlashObj().iflyRecord();
		}
	}
	initVadCheck();
	initSpeexEncode();
}

function iflytek_iat_cancel()
{
	rec_state = 'sse';
	iatSessionEnd();
}

/*
 * {"ver" : "1.0", "sub" : "iat", "cmd" : "ssb", "msg" : "response", "data" : { "sid" : "iat@..." }}
 */
function QISR_SESSION_BEGIN(obj)
{
	console.log('session begin ...');
	if(obj.ret == 0)
	{
		console.log(JSON.stringify(obj));
		iat_session_id = obj.data.sid;
	} 
	else
	{
		iatSessionEnd(0);
		func_on_iat_result(obj.ret, null);
	}
}

/*
 * {"ver" : "1.0", "sub" : "iat", "cmd" : "grt", "msg" : "response", "data" : { "sid" : "iat@..." }}
 */
function QISR_GET_RESULT (obj)
{
	console.log("get result ...");
	console.log(obj);
	var ret = 0;
	var rslt_status = obj.rss;
	var rslt_err = obj.rst;
	console.log(rslt_status);
	console.log(rslt_err);
		
	if(rec_state != 'grs')
	{
		LOGCAT("GET RESULT ERROR.");
		return;
	} 
	else if(ret != 0)
	{
		session_info.errorcode = ret;
	    session_info.result = null;
	    func_on_iat_result(session_info.errorcode, session_info.result);
		rec_state = 'sse';
		iatSessionEnd();
	}
	else if(rslt_status != 5)
	{
		if(rslt_err != null && rslt_err != undefined && rslt_err != '')
		{
			if(session_info.result != null && session_info.result != undefined)
			{
				session_info.result =  session_info.result + rslt_err;
			}
			else if(rslt_err != session_info.result)
			{
				session_info.result =  rslt_err;
			}
		}
		getIatResult(INTERVAL_GET_RESULT);
	}
	else if(rslt_status == 5)
	{
		if(session_info.result != null && session_info.result != undefined)
		{
			session_info.result =  session_info.result + rslt_err;
		}
		else if(rslt_err != session_info.result)
		{
			session_info.result =  rslt_err;
		}

		session_info.errorcode = ret;

		func_on_iat_result(session_info.errorcode, session_info.result);
			
		rec_state = 'sse';
		iatSessionEnd();
	}
}

/*
 * {"ver" : "1.0", "sub" : "iat", "cmd" : "sse", "msg" : "response", "data" : { "sid" : "iat@..." }}
 */
function QISR_SESSION_END(obj)
{
	LOGCAT("session end ,return value : " + obj);
	iat_session_id = null;
    if(func_on_iat_process != undefined) func_on_iat_process('onEnd');
}

function initVadCheck()
{
    vad_worker.postMessage({command: 'init'});
	vad_worker.onmessage = function(e){
		if(e.data.command == "esvad" && e.data.message == 'end') 
		{
			LOGCAT('local vad spot end');
			getIatResult(0);
		}
	};	
}

function initSpeexEncode()
{
  speex_worker.postMessage({command: 'init'});
	speex_worker.onmessage = function(e){
		if (recording == false) return;
		if(e.data.command == "encode") {
			var buffer = e.data.buffer;
			var result = new Int8Array(buffer.length);
			for(var i = 0; i < buffer.length; i++)
				result[i] = buffer[i];
			sendAudio(result.buffer, 2);
		} 
	};
}

function setTimeClock()
{
	if (timeout_id != null ) { clearTimeout(socket.timeout_id); return; }

	timeout_id = setTimeout(function(){
        if( window.socket.readyState == 1 ) window.socket.close();
	}, 5000);
}

function strToJson(str)
{
	var json = eval('(' + str + ')');
	return json;
}

function json2str(obj)
{
	var S = [];
	for(var i in obj){
		if(typeof obj[i] == 'string')
		{
			obj[i] = obj[i].replace('"', '');
			obj[i] = obj[i].replace('"', '');
			obj[i] = '"' + obj[i] + '"';
		} else if(typeof obj[i] == 'object')
		{
			obj[i] = json2str(obj[i]);
		}

		S.push(i+':'+obj[i]);
	}
	return '{'+S.join(',')+'}';
}

function base64encode(str) 
{
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}

sendRequestMessage = function() {
  console.log("record request .......");
  iat_params_obj.params = iat_params_obj.params + ", rse = utf8, browser_id=" + browser_id + ",host=" + document.domain;
  var json = {"ver" : "1.0", "sub" : "iat", "cmd" : "ssb", "msg" : "request", "data" : { "params" : iat_params_obj.params }};
  console.log(iat_params_obj.params);
  console.log(JSON.stringify(json));
  window.socket.send(JSON.stringify(json));
}