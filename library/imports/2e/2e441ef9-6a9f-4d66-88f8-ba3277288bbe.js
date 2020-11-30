"use strict";
cc._RF.push(module, '2e44175ap9NZoj4ujJ3KIu+', 'ChoiceGame');
// script/ChoiceGame.js

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
  choiceGame: function choiceGame() {
    cc.find("Canvas/game_bg/menu").active = false;
    cc.find("Canvas/game_bg/choiceGame").active = true;
    choicePanel = true;
  } // update (dt) {},

});

cc._RF.pop();