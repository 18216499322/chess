
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Jiang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43fd5CE7olHdaDESWVXPJVN', 'Jiang');
// script/Jiang.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    chessType: ""
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      name = this.node.name;
      loc_x = this.node.x; //实际坐标

      loc_y = this.node.y;
      x = loc_y > 0 ? (loc_y - 30) / 60 + 5 : (loc_y + 30) / 60 + 4; //逻辑坐标

      y = loc_x / 68 + 4;
      tip.forEach(function (item) {
        cc.find(item).active = false;
      });
      tip.splice(0, tip.length);

      if (host == this.chessType) {
        curName = this.node.name;
        this.jiang_top(x, y);
        this.jiang_bottom(x, y);
        this.jiang_left(x, y);
        this.jiang_right(x, y);
      }
    }, this);
  },
  jiang_top: function jiang_top(x, y) {
    if ((x >= 5 ? x + 1 <= 9 ? true : false : x + 1 <= 2 ? true : false) && (gameMap[x + 1][y] == 0 || gameMap[x + 1][y].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x + 1) * 9 + y + 1)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x + 1) * 9 + y + 1));
    }
  },
  jiang_bottom: function jiang_bottom(x, y) {
    if ((x >= 5 ? x - 1 >= 7 ? true : false : x - 1 >= 0 ? true : false) && (gameMap[x - 1][y] == 0 || gameMap[x - 1][y].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x - 1) * 9 + y + 1)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x - 1) * 9 + y + 1));
    }
  },
  jiang_left: function jiang_left(x, y) {
    if (y - 1 >= 3 && (gameMap[x][y - 1] == 0 || gameMap[x][y - 1].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y));
    }
  },
  jiang_right: function jiang_right(x, y) {
    if (y + 1 <= 5 && (gameMap[x][y + 1] == 0 || gameMap[x][y + 1].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 2)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 2));
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxKaWFuZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNoZXNzVHlwZSIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImUiLCJuYW1lIiwibG9jX3giLCJ4IiwibG9jX3kiLCJ5IiwidGlwIiwiZm9yRWFjaCIsIml0ZW0iLCJmaW5kIiwiYWN0aXZlIiwic3BsaWNlIiwibGVuZ3RoIiwiaG9zdCIsImN1ck5hbWUiLCJqaWFuZ190b3AiLCJqaWFuZ19ib3R0b20iLCJqaWFuZ19sZWZ0IiwiamlhbmdfcmlnaHQiLCJnYW1lTWFwIiwic2xpY2UiLCJwdXNoIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUM7QUFERixHQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFDSSxVQUFTQyxDQUFULEVBQVc7QUFDUEMsTUFBQUEsSUFBSSxHQUFHLEtBQUtOLElBQUwsQ0FBVU0sSUFBakI7QUFDQUMsTUFBQUEsS0FBSyxHQUFHLEtBQUtQLElBQUwsQ0FBVVEsQ0FBbEIsQ0FGTyxDQUVhOztBQUNwQkMsTUFBQUEsS0FBSyxHQUFHLEtBQUtULElBQUwsQ0FBVVUsQ0FBbEI7QUFDQUYsTUFBQUEsQ0FBQyxHQUFHQyxLQUFLLEdBQUMsQ0FBTixHQUFRLENBQUNBLEtBQUssR0FBQyxFQUFQLElBQVcsRUFBWCxHQUFjLENBQXRCLEdBQXdCLENBQUNBLEtBQUssR0FBQyxFQUFQLElBQVcsRUFBWCxHQUFjLENBQTFD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QUFiLEtBQWlCLENBQWpCLElBQW9CYyxPQUFPLENBQUNoQixDQUFELENBQVAsQ0FBV0UsQ0FBQyxHQUFDLENBQWIsRUFBZ0JlLEtBQWhCLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLEtBQTRCUCxJQUF6RCxDQUFILEVBQWtFO0FBQzlEeEIsTUFBQUEsRUFBRSxDQUFDb0IsSUFBSCxDQUFRLHlCQUF1QkksSUFBdkIsR0FBNEIsTUFBNUIsR0FBbUMsR0FBbkMsR0FBdUNBLElBQXZDLEdBQTRDLE1BQTVDLElBQW9EVixDQUFDLEdBQUMsQ0FBRixHQUFJRSxDQUFKLEdBQU0sQ0FBMUQsQ0FBUixFQUFzRUssTUFBdEUsR0FBK0UsSUFBL0U7QUFDQUosTUFBQUEsR0FBRyxDQUFDZSxJQUFKLENBQVMseUJBQXVCUixJQUF2QixHQUE0QixNQUE1QixHQUFtQyxHQUFuQyxHQUF1Q0EsSUFBdkMsR0FBNEMsTUFBNUMsSUFBb0RWLENBQUMsR0FBQyxDQUFGLEdBQUlFLENBQUosR0FBTSxDQUExRCxDQUFUO0FBQ0g7QUFDSixHQXpESTtBQTJETGlCLEVBQUFBLEtBM0RLLG1CQTJESSxDQUVSLENBN0RJLENBK0RMOztBQS9ESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjaGVzc1R5cGU6XCJcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy5ub2RlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsb2NfeCA9IHRoaXMubm9kZS54Oy8v5a6e6ZmF5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBsb2NfeSA9IHRoaXMubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgeCA9IGxvY195PjA/KGxvY195LTMwKS82MCs1Oihsb2NfeSszMCkvNjArNDsvL+mAu+i+keWdkOagh1xyXG4gICAgICAgICAgICAgICAgeSA9IGxvY194LzY4KzQ7XHJcbiAgICAgICAgICAgICAgICB0aXAuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKGl0ZW0pLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aXAuc3BsaWNlKDAsdGlwLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBpZihob3N0PT10aGlzLmNoZXNzVHlwZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyTmFtZSA9IHRoaXMubm9kZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuamlhbmdfdG9wKHgseSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qaWFuZ19ib3R0b20oeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmppYW5nX2xlZnQoeCx5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmppYW5nX3JpZ2h0KHgseSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGppYW5nX3RvcCh4LHkpe1xyXG4gICAgICAgIGlmKCh4Pj01Pyh4KzE8PTk/dHJ1ZTpmYWxzZSk6KHgrMTw9Mj90cnVlOmZhbHNlKSkmJihnYW1lTWFwW3grMV1beV09PTB8fGdhbWVNYXBbeCsxXVt5XS5zbGljZSgwLDEpIT1ob3N0KSl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgrMSkqOSt5KzEpKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aXAucHVzaChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvXCIraG9zdCtcIl9ib3hcIitcIi9cIitob3N0K1wiX2JveFwiKygoeCsxKSo5K3krMSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgamlhbmdfYm90dG9tKHgseSl7XHJcbiAgICAgICAgaWYoKHg+PTU/KHgtMT49Nz90cnVlOmZhbHNlKTooeC0xPj0wP3RydWU6ZmFsc2UpKSYmKGdhbWVNYXBbeC0xXVt5XT09MHx8Z2FtZU1hcFt4LTFdW3ldLnNsaWNlKDAsMSkhPWhvc3QpKXtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvXCIraG9zdCtcIl9ib3hcIitcIi9cIitob3N0K1wiX2JveFwiKygoeC0xKSo5K3krMSkpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRpcC5wdXNoKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKCh4LTEpKjkreSsxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBqaWFuZ19sZWZ0KHgseSl7XHJcbiAgICAgICAgaWYoeS0xPj0zJiYoZ2FtZU1hcFt4XVt5LTFdPT0wfHxnYW1lTWFwW3hdW3ktMV0uc2xpY2UoMCwxKSE9aG9zdCkpe1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKHgqOSt5KSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGlwLnB1c2goXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoeCo5K3kpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGppYW5nX3JpZ2h0KHgseSl7XHJcbiAgICAgICAgaWYoeSsxPD01JiYoZ2FtZU1hcFt4XVt5KzFdPT0wfHxnYW1lTWFwW3hdW3krMV0uc2xpY2UoMCwxKSE9aG9zdCkpe1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKHgqOSt5KzIpKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aXAucHVzaChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvXCIraG9zdCtcIl9ib3hcIitcIi9cIitob3N0K1wiX2JveFwiKyh4KjkreSsyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==