"use strict";
cc._RF.push(module, 'c4202x8d9lGgprNZmoIYP+I', 'Music');
// script/Music.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    move: {
      "default": null,
      type: cc.AudioClip
    },
    eat: {
      "default": null,
      type: cc.AudioClip
    },
    win: {
      "default": null,
      type: cc.AudioClip
    },
    promote: {
      "default": null,
      type: cc.AudioClip
    },
    loss: {
      "default": null,
      type: cc.AudioClip
    },
    again: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  playMove: function playMove() {
    cc.audioEngine.play(this.move, false, 1);
  },
  playEat: function playEat() {
    cc.audioEngine.play(this.eat, false, 1);
  },
  playWin: function playWin() {
    cc.audioEngine.play(this.win, false, 1);
  },
  playPromote: function playPromote() {
    cc.audioEngine.play(this.promote, false, 1);
  },
  playLoss: function playLoss() {
    cc.audioEngine.play(this.loss, false, 1);
  },
  playAgain: function playAgain() {
    cc.audioEngine.play(this.again, false, 1);
  } // update (dt) {},

});

cc._RF.pop();