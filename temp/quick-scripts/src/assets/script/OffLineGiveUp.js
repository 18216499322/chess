"use strict";
cc._RF.push(module, 'f49a5CKIQBM7LB0zrJTG5qO', 'OffLineGiveUp');
// script/OffLineGiveUp.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    nodeLoc: ""
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  giveUp: function giveUp() {
    cc.find(this.nodeLoc).active = true;
  } // update (dt) {},

});

cc._RF.pop();