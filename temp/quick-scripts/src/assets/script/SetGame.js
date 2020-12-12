"use strict";
cc._RF.push(module, 'bfe1dkci1FMprHEx+RFwUau', 'SetGame');
// script/SetGame.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  setGame: function setGame() {
    cc.find("Canvas/game_bg/setGame").active = true;
  } // update (dt) {},

});

cc._RF.pop();