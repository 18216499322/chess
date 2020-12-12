"use strict";
cc._RF.push(module, '392b2Jb7OVBJKNe9T9NYqYF', 'AboutGame');
// script/AboutGame.js

"use strict";

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