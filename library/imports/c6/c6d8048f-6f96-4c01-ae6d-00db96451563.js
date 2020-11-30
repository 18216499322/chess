"use strict";
cc._RF.push(module, 'c6d80SPb5ZMAa5tANuWRRVj', 'MainSceneGameState');
// script/MainSceneGameState.js

"use strict";

window.choicePanel = false;
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();