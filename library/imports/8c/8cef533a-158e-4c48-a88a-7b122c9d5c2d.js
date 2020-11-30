"use strict";
cc._RF.push(module, '8cef5M6FY5MSKiKexIsnVwt', 'supportus');
// script/supportus.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  supportus: function supportus() {
    cc.find("Canvas/game_bg/supportus").active = true;
  } // update (dt) {},

});

cc._RF.pop();