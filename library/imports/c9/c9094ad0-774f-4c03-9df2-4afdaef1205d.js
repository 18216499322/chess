"use strict";
cc._RF.push(module, 'c9094rQd09MA53ySv2u8SBd', 'ButtonSound');
// script/ButtonSound.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    buttonSound: {
      type: cc.AudioClip,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  playButtonSound: function playButtonSound() {
    cc.audioEngine.play(this.buttonSound, false, 1);
  } // update (dt) {},

});

cc._RF.pop();