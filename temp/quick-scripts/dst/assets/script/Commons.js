
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Commons.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c703cPM+JdAc5SIbstj8jEt', 'Commons');
// script/Commons.js

"use strict";

window.host = 'r';
window.gameMap = [['r_c_l', 'r_m_l', 'r_x_l', 'r_s_l', 'r_j', 'r_s_r', 'r_x_r', 'r_m_r', 'r_c_r'], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 'r_p_l', 0, 0, 0, 0, 0, 'r_p_r', 0], ['r_z_1', 0, 'r_z_2', 0, 'r_z_3', 0, 'r_z_4', 0, 'r_z_5'], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], ['b_z_1', 0, 'b_z_2', 0, 'b_z_3', 0, 'b_z_4', 0, 'b_z_5'], [0, 'b_p_l', 0, 0, 0, 0, 0, 'b_p_r', 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], ['b_c_l', 'b_m_l', 'b_x_l', 'b_s_l', 'b_j', 'b_s_r', 'b_x_r', 'b_m_r', 'b_c_r']];
window.tip = [];
window.curName = 'r';
window.stack = [];
window.timeStamp = '';
window.localHost = 'localhost:9999';
window.regretCount = 3;
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDb21tb25zLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImhvc3QiLCJnYW1lTWFwIiwidGlwIiwiY3VyTmFtZSIsInN0YWNrIiwidGltZVN0YW1wIiwibG9jYWxIb3N0IiwicmVncmV0Q291bnQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsImdhbWUiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJub2RlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxHQUFjLEdBQWQ7QUFDQUQsTUFBTSxDQUFDRSxPQUFQLEdBQWlCLENBQ2IsQ0FBQyxPQUFELEVBQVMsT0FBVCxFQUFpQixPQUFqQixFQUF5QixPQUF6QixFQUFpQyxLQUFqQyxFQUF1QyxPQUF2QyxFQUErQyxPQUEvQyxFQUF1RCxPQUF2RCxFQUErRCxPQUEvRCxDQURhLEVBRWIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUZhLEVBR2IsQ0FBQyxDQUFELEVBQUcsT0FBSCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixPQUFyQixFQUE2QixDQUE3QixDQUhhLEVBSWIsQ0FBQyxPQUFELEVBQVMsQ0FBVCxFQUFXLE9BQVgsRUFBbUIsQ0FBbkIsRUFBcUIsT0FBckIsRUFBNkIsQ0FBN0IsRUFBK0IsT0FBL0IsRUFBdUMsQ0FBdkMsRUFBeUMsT0FBekMsQ0FKYSxFQUtiLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FMYSxFQU1iLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FOYSxFQU9iLENBQUMsT0FBRCxFQUFTLENBQVQsRUFBVyxPQUFYLEVBQW1CLENBQW5CLEVBQXFCLE9BQXJCLEVBQTZCLENBQTdCLEVBQStCLE9BQS9CLEVBQXVDLENBQXZDLEVBQXlDLE9BQXpDLENBUGEsRUFRYixDQUFDLENBQUQsRUFBRyxPQUFILEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLE9BQXJCLEVBQTZCLENBQTdCLENBUmEsRUFTYixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBVGEsRUFVYixDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLE9BQWpCLEVBQXlCLE9BQXpCLEVBQWlDLEtBQWpDLEVBQXVDLE9BQXZDLEVBQStDLE9BQS9DLEVBQXVELE9BQXZELEVBQStELE9BQS9ELENBVmEsQ0FBakI7QUFZQUYsTUFBTSxDQUFDRyxHQUFQLEdBQWEsRUFBYjtBQUNBSCxNQUFNLENBQUNJLE9BQVAsR0FBaUIsR0FBakI7QUFDQUosTUFBTSxDQUFDSyxLQUFQLEdBQWUsRUFBZjtBQUNBTCxNQUFNLENBQUNNLFNBQVAsR0FBbUIsRUFBbkI7QUFDQU4sTUFBTSxDQUFDTyxTQUFQLEdBQW1CLGdCQUFuQjtBQUNBUCxNQUFNLENBQUNRLFdBQVAsR0FBcUIsQ0FBckI7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFLEVBRlA7QUFLTDtBQUVBQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ05KLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRQyxrQkFBUixDQUEyQixLQUFLQyxJQUFoQztBQUNILEdBVEk7QUFXTEMsRUFBQUEsS0FYSyxtQkFXSSxDQUVSLENBYkksQ0FlTDs7QUFmSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuaG9zdCA9ICdyJztcclxud2luZG93LmdhbWVNYXAgPSBbXHJcbiAgICBbJ3JfY19sJywncl9tX2wnLCdyX3hfbCcsJ3Jfc19sJywncl9qJywncl9zX3InLCdyX3hfcicsJ3JfbV9yJywncl9jX3InXSxcclxuICAgIFswLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwncl9wX2wnLDAsMCwwLDAsMCwncl9wX3InLDBdLFxyXG4gICAgWydyX3pfMScsMCwncl96XzInLDAsJ3Jfel8zJywwLCdyX3pfNCcsMCwncl96XzUnXSxcclxuICAgIFswLDAsMCwwLDAsMCwwLDAsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgWydiX3pfMScsMCwnYl96XzInLDAsJ2Jfel8zJywwLCdiX3pfNCcsMCwnYl96XzUnXSxcclxuICAgIFswLCdiX3BfbCcsMCwwLDAsMCwwLCdiX3BfcicsMF0sXHJcbiAgICBbMCwwLDAsMCwwLDAsMCwwLDBdLFxyXG4gICAgWydiX2NfbCcsJ2JfbV9sJywnYl94X2wnLCdiX3NfbCcsJ2JfaicsJ2Jfc19yJywnYl94X3InLCdiX21fcicsJ2JfY19yJ11cclxuXVxyXG53aW5kb3cudGlwID0gW107XHJcbndpbmRvdy5jdXJOYW1lID0gJ3InO1xyXG53aW5kb3cuc3RhY2sgPSBbXTtcclxud2luZG93LnRpbWVTdGFtcCA9ICcnO1xyXG53aW5kb3cubG9jYWxIb3N0ID0gJ2xvY2FsaG9zdDo5OTk5Jztcclxud2luZG93LnJlZ3JldENvdW50ID0gMztcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==