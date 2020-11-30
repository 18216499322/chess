"use strict";
cc._RF.push(module, '376eeiXqq1JJLOe3CkO6KgW', 'OffLineGameExit');
// script/OffLineGameExit.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  back: function back() {
    cc.director.loadScene("main scene");
  } // update (dt) {},

});

cc._RF.pop();