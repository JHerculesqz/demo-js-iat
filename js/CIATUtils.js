/**
 * Created by JHercules on 2016/11/6.
 */
function CATUtils(){
    //#region Fields

    this.session = undefined;
    var mic_pressed = false;

    //#endregion

    //#region init

    this.init = function(oResCallback){
        this.session = new IFlyIatSession({
            "callback":{
                "onResult": function (err, result) {
                    /* 若回调的err为空或错误码为0，则会话成功，可提取识别结果进行显示*/
                    if (err == null || err == undefined || err == 0) {
                        if (result == '' || result == null){
                            oResCallback("未获得识别结果...");
                        }
                        else{
                            oResCallback(result);
                        }
                    }
                    else {
                        oResCallback('error code : ' + err + ", error description : " + result);
                    }
                    mic_pressed = false;
                },
                "onVolume": function (volume) {
                    //console.log(volume);
                },
                "onError":function(){
                    mic_pressed = false;
                    console.log("onError");
                },
                "onProcess":function(status){
                    console.log(status);
                }
            }
        });

        if(!this.session.isSupport()){
            console.log("当前浏览器不支持！");
        }
    };

    //#endregion

    //#region start

    this.start = function(strAppId, strAppKey){
        if(!mic_pressed){
            var ssb_param = {
                "grammar_list": null,
                "params": "appid=581dcc9a,appidkey=5fd627de2b35a6fe, lang = sms, acous = anhui, aue=speex-wb;-1, usr = mkchen, ssm = 1, sub = iat, net_type = wifi, rse = utf8, ent =sms16k, rst = plain, auf  = audio/L16;rate=16000, vad_enable = 1, vad_timeout = 5000, vad_speech_tail = 500, compress = igzip"
            };
//            var ssb_param = {
//                "grammar_list" : null,
//                "params" : "appid=" + strAppId +
//                    ",appidkey=" + strAppKey +
//                    "lang = sms, acous = anhui, aue=speex-wb;-1, usr = mkchen, ssm = 1, sub = iat, net_type = wifi, rse = utf8, ent =sms16k, rst = plain, auf  = audio/L16;rate=16000, vad_enable = 1, vad_timeout = 5000, vad_speech_tail = 500, compress = igzip"};
            this.session.start(ssb_param);
            mic_pressed = true;
        }
        else{
            this.session.stop();
        }
    };

    //#endregion
};
var cATUtils = new CATUtils();