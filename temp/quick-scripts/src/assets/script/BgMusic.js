"use strict";
cc._RF.push(module, 'c79d2O0ukhOMKs3FZxBrSDC', 'BgMusic');
// script/BgMusic.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var flag;
cc.Class({
  "extends": cc.Component,
  properties: {
    bgMusic: {
      type: cc.AudioClip,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:\
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
    this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 1);
    flag = true;
  },
  playBgMusic: function playBgMusic() {
    this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 1);
    flag = true;
  },
  stopBgMusic: function stopBgMusic() {
    if (flag) {
      cc.audioEngine.stop(this.bgMusicChannel);
      flag = false;
      this.bgMusicChannel = undefined;
    }
  },
  isPlay: function isPlay() {
    return flag;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();