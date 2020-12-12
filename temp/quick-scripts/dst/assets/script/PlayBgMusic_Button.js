
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PlayBgMusic_Button.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90c495zyINKcJQTaavHgrlc', 'PlayBgMusic_Button');
// script/PlayBgMusic_Button.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  playBgMusic: function playBgMusic() {
    this.audioPlayer = cc.find("BgMusic").getComponent("BgMusic");

    if (!this.audioPlayer.isPlay()) {
      this.audioPlayer.playBgMusic();
    } else {
      this.audioPlayer.stopBgMusic();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxQbGF5QmdNdXNpY19CdXR0b24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInBsYXlCZ011c2ljIiwiYXVkaW9QbGF5ZXIiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiaXNQbGF5Iiwic3RvcEJnTXVzaWMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdJLENBRVIsQ0FiSTtBQWVMQyxFQUFBQSxXQWZLLHlCQWVRO0FBQ1QsU0FBS0MsV0FBTCxHQUFtQk4sRUFBRSxDQUFDTyxJQUFILENBQVEsU0FBUixFQUFtQkMsWUFBbkIsQ0FBZ0MsU0FBaEMsQ0FBbkI7O0FBQ0EsUUFBRyxDQUFDLEtBQUtGLFdBQUwsQ0FBaUJHLE1BQWpCLEVBQUosRUFBOEI7QUFDMUIsV0FBS0gsV0FBTCxDQUFpQkQsV0FBakI7QUFDSCxLQUZELE1BRUs7QUFDRCxXQUFLQyxXQUFMLENBQWlCSSxXQUFqQjtBQUNIO0FBQ0osR0F0QkksQ0F3Qkw7O0FBeEJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGxheUJnTXVzaWMoKXtcclxuICAgICAgICB0aGlzLmF1ZGlvUGxheWVyID0gY2MuZmluZChcIkJnTXVzaWNcIikuZ2V0Q29tcG9uZW50KFwiQmdNdXNpY1wiKTtcclxuICAgICAgICBpZighdGhpcy5hdWRpb1BsYXllci5pc1BsYXkoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9QbGF5ZXIucGxheUJnTXVzaWMoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1BsYXllci5zdG9wQmdNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==