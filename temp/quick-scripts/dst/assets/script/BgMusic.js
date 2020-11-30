
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BgMusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxCZ011c2ljLmpzIl0sIm5hbWVzIjpbImZsYWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnTXVzaWMiLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJiZ011c2ljQ2hhbm5lbCIsImF1ZGlvRW5naW5lIiwicGxheSIsInBsYXlCZ011c2ljIiwic3RvcEJnTXVzaWMiLCJzdG9wIiwidW5kZWZpbmVkIiwiaXNQbGF5Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsSUFBSjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFDO0FBQ0pDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxTQURKO0FBRUosaUJBQVE7QUFGSjtBQURBLEdBSFA7QUFhTDtBQUVBQyxFQUFBQSxNQWZLLG9CQWVLO0FBQ05QLElBQUFBLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxrQkFBUixDQUEyQixLQUFLQyxJQUFoQztBQUNBLFNBQUtDLGNBQUwsR0FBc0JYLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtULE9BQXpCLEVBQWlDLElBQWpDLEVBQXNDLENBQXRDLENBQXRCO0FBQ0FMLElBQUFBLElBQUksR0FBQyxJQUFMO0FBQ0gsR0FuQkk7QUFxQkxlLEVBQUFBLFdBckJLLHlCQXFCUTtBQUNULFNBQUtILGNBQUwsR0FBc0JYLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtULE9BQXpCLEVBQWlDLElBQWpDLEVBQXNDLENBQXRDLENBQXRCO0FBQ0FMLElBQUFBLElBQUksR0FBQyxJQUFMO0FBQ0gsR0F4Qkk7QUEwQkxnQixFQUFBQSxXQTFCSyx5QkEwQlE7QUFDVCxRQUFHaEIsSUFBSCxFQUFRO0FBQ0pDLE1BQUFBLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlSSxJQUFmLENBQW9CLEtBQUtMLGNBQXpCO0FBQ0FaLE1BQUFBLElBQUksR0FBQyxLQUFMO0FBQ0EsV0FBS1ksY0FBTCxHQUFzQk0sU0FBdEI7QUFDSDtBQUNKLEdBaENJO0FBa0NMQyxFQUFBQSxNQWxDSyxvQkFrQ0c7QUFDTCxXQUFPbkIsSUFBUDtBQUNGLEdBcENJO0FBc0NMb0IsRUFBQUEsS0F0Q0ssbUJBc0NJLENBRVIsQ0F4Q0ksQ0EwQ0w7O0FBMUNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG52YXIgZmxhZztcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZ011c2ljOntcclxuICAgICAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxcXHJcbiAgICBcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTsgXHJcbiAgICAgICAgdGhpcy5iZ011c2ljQ2hhbm5lbCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ011c2ljLHRydWUsMSk7IFxyXG4gICAgICAgIGZsYWc9dHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheUJnTXVzaWMoKXtcclxuICAgICAgICB0aGlzLmJnTXVzaWNDaGFubmVsID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnTXVzaWMsdHJ1ZSwxKTtcclxuICAgICAgICBmbGFnPXRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0b3BCZ011c2ljKCl7XHJcbiAgICAgICAgaWYoZmxhZyl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5iZ011c2ljQ2hhbm5lbCk7XHJcbiAgICAgICAgICAgIGZsYWc9ZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmdNdXNpY0NoYW5uZWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpc1BsYXkoKXtcclxuICAgICAgIHJldHVybiBmbGFnO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=