// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

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
