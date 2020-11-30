"use strict";
cc._RF.push(module, '392b2Jb7OVBJKNe9T9NYqYF', 'AboutGame');
// script/AboutGame.js

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
  aboutGame: function aboutGame() {
    cc.find("Canvas/game_bg/aboutGame").active = true;
  } // update (dt) {},

});

cc._RF.pop();