
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(choicePanel){
            cc.find("Canvas/game_bg/menu").active = false;
            cc.find("Canvas/game_bg/choiceGame").active = true;
        }
    },

    start () {

    },

    // update (dt) {},
});
