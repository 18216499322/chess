
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setGame(){
        cc.find("Canvas/game_bg/setGame").active = true;
    }

    // update (dt) {},
});
