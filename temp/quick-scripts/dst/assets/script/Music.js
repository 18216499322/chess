
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Music.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNdXNpYy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vdmUiLCJ0eXBlIiwiQXVkaW9DbGlwIiwiZWF0Iiwid2luIiwicHJvbW90ZSIsImxvc3MiLCJhZ2FpbiIsInN0YXJ0IiwicGxheU1vdmUiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwbGF5RWF0IiwicGxheVdpbiIsInBsYXlQcm9tb3RlIiwicGxheUxvc3MiLCJwbGF5QWdhaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZQLEtBREU7QUFLUkMsSUFBQUEsR0FBRyxFQUFFO0FBQ0QsaUJBQVMsSUFEUjtBQUVERixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGUixLQUxHO0FBU1JFLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREgsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlIsS0FURztBQWFSRyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxKLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBYkQ7QUFpQlJJLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLElBRFA7QUFFRkwsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlAsS0FqQkU7QUFxQlJLLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLElBRE47QUFFSE4sTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRk47QUFyQkMsR0FIUDtBQThCTDtBQUVBO0FBRUFNLEVBQUFBLEtBbENLLG1CQWtDSSxDQUVSLENBcENJO0FBc0NMQyxFQUFBQSxRQXRDSyxzQkFzQ0s7QUFDTmIsSUFBQUEsRUFBRSxDQUFDYyxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS1gsSUFBekIsRUFBOEIsS0FBOUIsRUFBb0MsQ0FBcEM7QUFDSCxHQXhDSTtBQTBDTFksRUFBQUEsT0ExQ0sscUJBMENJO0FBQ0xoQixJQUFBQSxFQUFFLENBQUNjLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLUixHQUF6QixFQUE2QixLQUE3QixFQUFtQyxDQUFuQztBQUNILEdBNUNJO0FBOENMVSxFQUFBQSxPQTlDSyxxQkE4Q0k7QUFDTGpCLElBQUFBLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtQLEdBQXpCLEVBQTZCLEtBQTdCLEVBQW1DLENBQW5DO0FBQ0gsR0FoREk7QUFrRExVLEVBQUFBLFdBbERLLHlCQWtEUTtBQUNUbEIsSUFBQUEsRUFBRSxDQUFDYyxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS04sT0FBekIsRUFBaUMsS0FBakMsRUFBdUMsQ0FBdkM7QUFDSCxHQXBESTtBQXNETFUsRUFBQUEsUUF0REssc0JBc0RLO0FBQ05uQixJQUFBQSxFQUFFLENBQUNjLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLTCxJQUF6QixFQUE4QixLQUE5QixFQUFvQyxDQUFwQztBQUNILEdBeERJO0FBMERMVSxFQUFBQSxTQTFESyx1QkEwRE07QUFDUHBCLElBQUFBLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtKLEtBQXpCLEVBQStCLEtBQS9CLEVBQXFDLENBQXJDO0FBQ0gsR0E1REksQ0E4REw7O0FBOURLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlYXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aW46IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9tb3RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9zczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFnYWluOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlNb3ZlKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm1vdmUsZmFsc2UsMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlFYXQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWF0LGZhbHNlLDEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5V2luKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLndpbixmYWxzZSwxKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheVByb21vdGUoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMucHJvbW90ZSxmYWxzZSwxKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheUxvc3MoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubG9zcyxmYWxzZSwxKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheUFnYWluKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmFnYWluLGZhbHNlLDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19