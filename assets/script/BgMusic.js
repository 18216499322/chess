// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var flag;
cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic:{
            type:cc.AudioClip,
            default:null
        },
       
        

    },

    // LIFE-CYCLE CALLBACKS:\
    
    onLoad () {
        cc.game.addPersistRootNode(this.node); 
        this.bgMusicChannel = cc.audioEngine.play(this.bgMusic,true,1); 
        console.log("onLoad"+this.bgMusicChannel)
        flag=true;
    },

    playBgMusic(){
        this.bgMusicChannel = cc.audioEngine.play(this.bgMusic,true,1);
        flag=true;
        console.log("playBgMusic"+this.bgMusicChannel)
    },

    stopBgMusic(){
        if(flag){
            cc.audioEngine.stop(this.bgMusicChannel);
            flag=false;
            this.bgMusicChannel = undefined;
        }
    },

    isPlay(){
       return flag;
    },

    start () {
       
    },

    // update (dt) {},
});
