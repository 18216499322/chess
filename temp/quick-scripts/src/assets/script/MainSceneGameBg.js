"use strict";
cc._RF.push(module, 'ec8f9b0v2hDI6LUBE1Il1us', 'MainSceneGameBg');
// script/MainSceneGameBg.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (choicePanel) {
      cc.find("Canvas/game_bg/menu").active = false;
      cc.find("Canvas/game_bg/choiceGame").active = true;
    }
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();