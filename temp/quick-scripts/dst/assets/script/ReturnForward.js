
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ReturnForward.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2ec2Av059PUIQ2oBauy2FQ', 'ReturnForward');
// script/ReturnForward.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  returnForward: function returnForward() {
    this.node.parent.active = false;

    if (cc.find("Canvas/game_bg/menu") != null && !cc.find("Canvas/game_bg/menu").active) {
      cc.find("Canvas/game_bg/menu").active = true;
    }

    choicePanel = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxSZXR1cm5Gb3J3YXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJyZXR1cm5Gb3J3YXJkIiwibm9kZSIsInBhcmVudCIsImFjdGl2ZSIsImZpbmQiLCJjaG9pY2VQYW5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBO0FBRUFDLEVBQUFBLEtBWEssbUJBV0ksQ0FFUixDQWJJO0FBZUxDLEVBQUFBLGFBZkssMkJBZVU7QUFDWCxTQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWpCLEdBQTBCLEtBQTFCOztBQUNBLFFBQUdSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRLHFCQUFSLEtBQWdDLElBQWhDLElBQXNDLENBQUNULEVBQUUsQ0FBQ1MsSUFBSCxDQUFRLHFCQUFSLEVBQStCRCxNQUF6RSxFQUFnRjtBQUM1RVIsTUFBQUEsRUFBRSxDQUFDUyxJQUFILENBQVEscUJBQVIsRUFBK0JELE1BQS9CLEdBQXdDLElBQXhDO0FBQ0g7O0FBQ0RFLElBQUFBLFdBQVcsR0FBRyxLQUFkO0FBQ0gsR0FyQkksQ0F1Qkw7O0FBdkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHJldHVybkZvcndhcmQoKXtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9tZW51XCIpIT1udWxsJiYhY2MuZmluZChcIkNhbnZhcy9nYW1lX2JnL21lbnVcIikuYWN0aXZlKXtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lX2JnL21lbnVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2hvaWNlUGFuZWwgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==