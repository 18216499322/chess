
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/OffLineGiveUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f49a5CKIQBM7LB0zrJTG5qO', 'OffLineGiveUp');
// script/OffLineGiveUp.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    nodeLoc: ""
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  giveUp: function giveUp() {
    cc.find(this.nodeLoc).active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxPZmZMaW5lR2l2ZVVwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZUxvYyIsInN0YXJ0IiwiZ2l2ZVVwIiwiZmluZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBQztBQURBLEdBRlA7QUFLTDtBQUNBO0FBQ0FDLEVBQUFBLEtBUEssbUJBT0ksQ0FFUixDQVRJO0FBVUxDLEVBQUFBLE1BVkssb0JBVUc7QUFDSk4sSUFBQUEsRUFBRSxDQUFDTyxJQUFILENBQVEsS0FBS0gsT0FBYixFQUFzQkksTUFBdEIsR0FBK0IsSUFBL0I7QUFDSCxHQVpJLENBY0w7O0FBZEssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBub2RlTG9jOlwiXCJcclxuICAgIH0sXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgZ2l2ZVVwKCl7XHJcbiAgICAgICAgY2MuZmluZCh0aGlzLm5vZGVMb2MpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=