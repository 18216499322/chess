
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/OffLineGameBg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74b25cWWc1O75PcErWXHgkl', 'OffLineGameBg');
// script/OffLineGameBg.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    host = 'r';
    gameMap = [['r_c_l', 'r_m_l', 'r_x_l', 'r_s_l', 'r_j', 'r_s_r', 'r_x_r', 'r_m_r', 'r_c_r'], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 'r_p_l', 0, 0, 0, 0, 0, 'r_p_r', 0], ['r_z_1', 0, 'r_z_2', 0, 'r_z_3', 0, 'r_z_4', 0, 'r_z_5'], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], ['b_z_1', 0, 'b_z_2', 0, 'b_z_3', 0, 'b_z_4', 0, 'b_z_5'], [0, 'b_p_l', 0, 0, 0, 0, 0, 'b_p_r', 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], ['b_c_l', 'b_m_l', 'b_x_l', 'b_s_l', 'b_j', 'b_s_r', 'b_x_r', 'b_m_r', 'b_c_r']];
    tip = [];
    curName = null;
    stack = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxPZmZMaW5lR2FtZUJnLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiaG9zdCIsImdhbWVNYXAiLCJ0aXAiLCJjdXJOYW1lIiwic3RhY2siLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ05DLElBQUFBLElBQUksR0FBRyxHQUFQO0FBQ0FDLElBQUFBLE9BQU8sR0FBRyxDQUNOLENBQUMsT0FBRCxFQUFTLE9BQVQsRUFBaUIsT0FBakIsRUFBeUIsT0FBekIsRUFBaUMsS0FBakMsRUFBdUMsT0FBdkMsRUFBK0MsT0FBL0MsRUFBdUQsT0FBdkQsRUFBK0QsT0FBL0QsQ0FETSxFQUVOLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FGTSxFQUdOLENBQUMsQ0FBRCxFQUFHLE9BQUgsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsT0FBckIsRUFBNkIsQ0FBN0IsQ0FITSxFQUlOLENBQUMsT0FBRCxFQUFTLENBQVQsRUFBVyxPQUFYLEVBQW1CLENBQW5CLEVBQXFCLE9BQXJCLEVBQTZCLENBQTdCLEVBQStCLE9BQS9CLEVBQXVDLENBQXZDLEVBQXlDLE9BQXpDLENBSk0sRUFLTixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBTE0sRUFNTixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBTk0sRUFPTixDQUFDLE9BQUQsRUFBUyxDQUFULEVBQVcsT0FBWCxFQUFtQixDQUFuQixFQUFxQixPQUFyQixFQUE2QixDQUE3QixFQUErQixPQUEvQixFQUF1QyxDQUF2QyxFQUF5QyxPQUF6QyxDQVBNLEVBUU4sQ0FBQyxDQUFELEVBQUcsT0FBSCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixPQUFyQixFQUE2QixDQUE3QixDQVJNLEVBU04sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQVRNLEVBVU4sQ0FBQyxPQUFELEVBQVMsT0FBVCxFQUFpQixPQUFqQixFQUF5QixPQUF6QixFQUFpQyxLQUFqQyxFQUF1QyxPQUF2QyxFQUErQyxPQUEvQyxFQUF1RCxPQUF2RCxFQUErRCxPQUEvRCxDQVZNLENBQVY7QUFZQUMsSUFBQUEsR0FBRyxHQUFHLEVBQU47QUFDQUMsSUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDQUMsSUFBQUEsS0FBSyxHQUFHLEVBQVI7QUFDSCxHQTFCSTtBQTRCTEMsRUFBQUEsS0E1QkssbUJBNEJJLENBRVIsQ0E5QkksQ0FnQ0w7O0FBaENLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGhvc3QgPSAncic7XHJcbiAgICAgICAgZ2FtZU1hcCA9IFtcclxuICAgICAgICAgICAgWydyX2NfbCcsJ3JfbV9sJywncl94X2wnLCdyX3NfbCcsJ3JfaicsJ3Jfc19yJywncl94X3InLCdyX21fcicsJ3JfY19yJ10sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLCdyX3BfbCcsMCwwLDAsMCwwLCdyX3BfcicsMF0sXHJcbiAgICAgICAgICAgIFsncl96XzEnLDAsJ3Jfel8yJywwLCdyX3pfMycsMCwncl96XzQnLDAsJ3Jfel81J10sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFsnYl96XzEnLDAsJ2Jfel8yJywwLCdiX3pfMycsMCwnYl96XzQnLDAsJ2Jfel81J10sXHJcbiAgICAgICAgICAgIFswLCdiX3BfbCcsMCwwLDAsMCwwLCdiX3BfcicsMF0sXHJcbiAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFsnYl9jX2wnLCdiX21fbCcsJ2JfeF9sJywnYl9zX2wnLCdiX2onLCdiX3NfcicsJ2JfeF9yJywnYl9tX3InLCdiX2NfciddXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRpcCA9IFtdO1xyXG4gICAgICAgIGN1ck5hbWUgPSBudWxsO1xyXG4gICAgICAgIHN0YWNrID0gW107XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19