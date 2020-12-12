
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    playBgMusic(){
        this.audioPlayer = cc.find("BgMusic").getComponent("BgMusic");
        if(!this.audioPlayer.isPlay()){
            this.audioPlayer.playBgMusic();
        }else{
            this.audioPlayer.stopBgMusic();
        }
    }

    // update (dt) {},
});
