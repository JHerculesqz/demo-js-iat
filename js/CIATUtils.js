/**
 * Created by JHercules on 2016/11/6.
 */
function CATUtils(){
    //#region Fields

    this.session = new IFlyIatSession({
        'url'				  : 'wss://h5.openspeech.cn/iat.do',
        'reconnection'       : true,
        'reconnectionDelay'  : 30000,
        'compress'           : 'speex'
    });

    //#endregion

    //#region dispose

    this.dispose = function(){
        this.session.cancel();
    };

    //#endregion

    //#region start

    this.start = function(strAppId, strAppKey, oResCallback){
        var ssb_param = {"grammar_list" : null, "params" : "appid=" + strAppId +
            ",appidkey=" + strAppKey +
            ", lang = sms, acous = anhui, aue=speex-wb;-1, " +
            "usr = mkchen, ssm = 1, sub = iat, net_type = wifi, " +
            "rse = utf8, ent =sms16k, rst = plain, auf  = audio/L16;rate=16000, " +
            "vad_enable = 1, vad_timeout = 5000, " +
            "vad_speech_tail = 500, compress = igzip"};
        this.session.start(ssb_param, function(volume){
            if(volume < 0){
                console.log("麦克风启动失败...");
            }
            else{
                console.log("麦克风正常获得声音...");
            }
        }, function (err, result){
            if(err == null || err == undefined || err == 0){
                if(result == '' || result == null){
                    oResCallback("未获得识别结果...");
                }
                else{
                    oResCallback(result);
                }
            }
            else{
                console.log(err);
            }
        }, function(message){
            if(message == 'onStop')
            {
                console.log("录音停止");
            } else if(message == 'onEnd')
            {
                console.log("会话结束");
            }
        });
    };

    //#endregion

    //#region stop

    this.stop = function(){
        this.session.stop(null);
    };

    //#endregion
};
var cATUtils = new CATUtils();