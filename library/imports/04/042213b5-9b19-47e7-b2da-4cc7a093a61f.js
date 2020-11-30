"use strict";
cc._RF.push(module, '04221O1mxlH57LaTMegk6Yf', 'ConsoleGame');
// script/ConsoleGame.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  play: function play() {
    cc.director.loadScene("off line combat");
  } // update (dt) {},

});

cc._RF.pop();