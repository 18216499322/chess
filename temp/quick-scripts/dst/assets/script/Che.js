
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Che.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '534c8iBEu9HY7KDJL/UxIuS', 'Che');
// script/Che.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    chessType: ""
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      var name = '';
      var loc_x = '';
      var loc_y = '';
      var x = '';
      var y = '';
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
        this.top(x + 1, y);
        this.bottom(x - 1, y);
        this.left(x, y - 1);
        this.right(x, y + 1);
      }
    }, this);
  },
  show: function show(x, y) {
    if (gameMap[x][y] != 0 && gameMap[x][y].substr(0, 1) != host) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1));
      return true;
    }

    ;
    cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1)).active = true;
    tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1));
    return false;
  },
  top: function top(x, y) {
    if (x >= 10) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    if (this.show(x, y)) return;
    this.top(x + 1, y);
  },
  bottom: function bottom(x, y) {
    if (x < 0) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    if (this.show(x, y)) return;
    this.bottom(x - 1, y);
  },
  left: function left(x, y) {
    if (y < 0) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    if (this.show(x, y)) return;
    this.left(x, y - 1);
  },
  right: function right(x, y) {
    if (y >= 9) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    if (this.show(x, y)) return;
    this.right(x, y + 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxDaGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGVzc1R5cGUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJlIiwibmFtZSIsImxvY194IiwibG9jX3kiLCJ4IiwieSIsInRpcCIsImZvckVhY2giLCJpdGVtIiwiZmluZCIsImFjdGl2ZSIsInNwbGljZSIsImxlbmd0aCIsImhvc3QiLCJjdXJOYW1lIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwic2hvdyIsImdhbWVNYXAiLCJzdWJzdHIiLCJwdXNoIiwic2xpY2UiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBQztBQURGLEdBSFA7QUFPTDtBQUVBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUEvQixFQUNJLFVBQVNDLENBQVQsRUFBVztBQUNQLFVBQUlDLElBQUksR0FBRyxFQUFYO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLFVBQUlDLENBQUMsR0FBRyxFQUFSO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLEVBQVI7QUFDQUosTUFBQUEsSUFBSSxHQUFHLEtBQUtOLElBQUwsQ0FBVU0sSUFBakI7QUFDQUMsTUFBQUEsS0FBSyxHQUFHLEtBQUtQLElBQUwsQ0FBVVMsQ0FBbEIsQ0FQTyxDQU9hOztBQUNwQkQsTUFBQUEsS0FBSyxHQUFHLEtBQUtSLElBQUwsQ0FBVVUsQ0FBbEI7QUFDQUQsTUFBQUEs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LEVBQVE7QUFDUixRQUFHZSxPQUFPLENBQUNoQixDQUFELENBQVAsQ0FBV0MsQ0FBWCxLQUFlLENBQWYsSUFBa0JlLE9BQU8sQ0FBQ2hCLENBQUQsQ0FBUCxDQUFXQyxDQUFYLEVBQWNrQixLQUFkLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLEtBQTBCVixJQUEvQyxFQUFvRDtBQUNwRCxRQUFHLEtBQUtNLElBQUwsQ0FBVWYsQ0FBVixFQUFZQyxDQUFaLENBQUgsRUFBa0I7QUFDbEIsU0FBS2EsS0FBTCxDQUFXZCxDQUFYLEVBQWFDLENBQUMsR0FBQyxDQUFmO0FBQ0gsR0F6RUk7QUEyRUxtQixFQUFBQSxLQTNFSyxtQkEyRUksQ0FFUixDQTdFSSxDQStFTDs7QUEvRUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2hlc3NUeXBlOlwiXCJcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHZhciBsb2NfeCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvY195ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAnJztcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB0aGlzLm5vZGUubmFtZTtcclxuICAgICAgICAgICAgICAgIGxvY194ID0gdGhpcy5ub2RlLng7Ly/lrp7pmYXlnZDmoIdcclxuICAgICAgICAgICAgICAgIGxvY195ID0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICB4ID0gbG9jX3k+MD8obG9jX3ktMzApLzYwKzU6KGxvY195KzMwKS82MCs0Oy8v6YC76L6R5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICB5ID0gbG9jX3gvNjgrNDtcclxuICAgICAgICAgICAgICAgIHRpcC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoaXRlbSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRpcC5zcGxpY2UoMCx0aXAubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGlmKGhvc3Q9PXRoaXMuY2hlc3NUeXBlKXtcclxuICAgICAgICAgICAgICAgICAgICBjdXJOYW1lID0gdGhpcy5ub2RlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3AoeCsxLHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tKHgtMSx5KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnQoeCx5LTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHQoeCx5KzEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93KHgseSl7XHJcbiAgICAgICAgaWYoZ2FtZU1hcFt4XVt5XSE9MCYmZ2FtZU1hcFt4XVt5XS5zdWJzdHIoMCwxKSE9aG9zdCl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoeCo5K3krMSkpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRpcC5wdXNoKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKHgqOSt5KzEpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKHgqOSt5KzEpKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRpcC5wdXNoKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKHgqOSt5KzEpKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvcCh4LHkpe1xyXG4gICAgICAgIGlmKHg+PTEwKXJldHVybjtcclxuICAgICAgICBpZihnYW1lTWFwW3hdW3ldIT0wJiZnYW1lTWFwW3hdW3ldLnNsaWNlKDAsMSk9PWhvc3QpcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMuc2hvdyh4LHkpKXJldHVybjtcclxuICAgICAgICB0aGlzLnRvcCh4KzEseSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGJvdHRvbSh4LHkpe1xyXG4gICAgICAgIGlmKHg8MClyZXR1cm47XHJcbiAgICAgICAgaWYoZ2FtZU1hcFt4XVt5XSE9MCYmZ2FtZU1hcFt4XVt5XS5zbGljZSgwLDEpPT1ob3N0KXJldHVybjtcclxuICAgICAgICBpZih0aGlzLnNob3coeCx5KSlyZXR1cm47XHJcbiAgICAgICAgdGhpcy5ib3R0b20oeC0xLHkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBsZWZ0KHgseSl7XHJcbiAgICAgICAgaWYoeTwwKXJldHVybjtcclxuICAgICAgICBpZihnYW1lTWFwW3hdW3ldIT0wJiZnYW1lTWFwW3hdW3ldLnNsaWNlKDAsMSk9PWhvc3QpcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMuc2hvdyh4LHkpKXJldHVybjtcclxuICAgICAgICB0aGlzLmxlZnQoeCx5LTEpO1xyXG4gICAgfSxcclxuXHJcbiAgICByaWdodCh4LHkpe1xyXG4gICAgICAgIGlmKHk+PTkpcmV0dXJuO1xyXG4gICAgICAgIGlmKGdhbWVNYXBbeF1beV0hPTAmJmdhbWVNYXBbeF1beV0uc2xpY2UoMCwxKT09aG9zdClyZXR1cm47XHJcbiAgICAgICAgaWYodGhpcy5zaG93KHgseSkpcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmlnaHQoeCx5KzEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=