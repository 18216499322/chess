"use strict";
cc._RF.push(module, 'f2ec2Av059PUIQ2oBauy2FQ', 'ReturnForward');
// script/ReturnForward.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  returnForward: function returnForward() {
    this.node.parent.active = false;

    if (cc.find("Canvas/game_bg/menu") != null && !cc.find("Canvas/game_bg/menu").active) {
      cc.find("Canvas/game_bg/menu").active = true;
    }

    choicePanel = false;
  } // update (dt) {},

});

cc._RF.pop();