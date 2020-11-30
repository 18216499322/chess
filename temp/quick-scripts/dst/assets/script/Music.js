
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNdXNpYy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1vdmUiLCJ0eXBlIiwiQXVkaW9DbGlwIiwiZWF0Iiwid2luIiwicHJvbW90ZSIsImxvc3MiLCJzdGFydCIsInBsYXlNb3ZlIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicGxheUVhdCIsInBsYXlXaW4iLCJwbGF5UHJvbW90ZSIsInBsYXlMb3NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGUCxLQURFO0FBS1JDLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlIsS0FMRztBQVNSRSxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZSLEtBVEc7QUFhUkcsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsaUJBQVMsSUFESjtBQUVMSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSixLQWJEO0FBaUJSSSxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxJQURQO0FBRUZMLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZQO0FBakJFLEdBSFA7QUEwQkw7QUFFQTtBQUVBSyxFQUFBQSxLQTlCSyxtQkE4QkksQ0FFUixDQWhDSTtBQWtDTEMsRUFBQUEsUUFsQ0ssc0JBa0NLO0FBQ05aLElBQUFBLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtWLElBQXpCLEVBQThCLEtBQTlCLEVBQW9DLENBQXBDO0FBQ0gsR0FwQ0k7QUFzQ0xXLEVBQUFBLE9BdENLLHFCQXNDSTtBQUNMZixJQUFBQSxFQUFFLENBQUNhLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLUCxHQUF6QixFQUE2QixLQUE3QixFQUFtQyxDQUFuQztBQUNILEdBeENJO0FBMENMUyxFQUFBQSxPQTFDSyxxQkEwQ0k7QUFDTGhCLElBQUFBLEVBQUUsQ0FBQ2EsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtOLEdBQXpCLEVBQTZCLEtBQTdCLEVBQW1DLENBQW5DO0FBQ0gsR0E1Q0k7QUE4Q0xTLEVBQUFBLFdBOUNLLHlCQThDUTtBQUNUakIsSUFBQUEsRUFBRSxDQUFDYSxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS0wsT0FBekIsRUFBaUMsS0FBakMsRUFBdUMsQ0FBdkM7QUFDSCxHQWhESTtBQWtETFMsRUFBQUEsUUFsREssc0JBa0RLO0FBQ05sQixJQUFBQSxFQUFFLENBQUNhLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLSixJQUF6QixFQUE4QixLQUE5QixFQUFvQyxDQUFwQztBQUNILEdBcERJLENBc0RMOztBQXRESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZWF0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2luOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvbW90ZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvc3M6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGxheU1vdmUoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubW92ZSxmYWxzZSwxKTtcclxuICAgIH0sXHJcblxyXG4gICAgcGxheUVhdCgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lYXQsZmFsc2UsMSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlXaW4oKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMud2luLGZhbHNlLDEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5UHJvbW90ZSgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5wcm9tb3RlLGZhbHNlLDEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5TG9zcygpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5sb3NzLGZhbHNlLDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19