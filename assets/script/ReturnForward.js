
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    returnForward(){
        this.node.parent.active = false;
        if(cc.find("Canvas/game_bg/menu")!=null&&!cc.find("Canvas/game_bg/menu").active){
            cc.find("Canvas/game_bg/menu").active = true;
        }
        choicePanel = false;
    }

    // update (dt) {},
});
