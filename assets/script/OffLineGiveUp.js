
cc.Class({
    extends: cc.Component,

    properties: {
        nodeLoc:""
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    giveUp(){
        cc.find(this.nodeLoc).active = true;
    }

    // update (dt) {},
});
