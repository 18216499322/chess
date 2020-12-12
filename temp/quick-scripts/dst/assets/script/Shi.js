
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Shi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55d4f9/n3FLRbwsbc2qYfPK', 'Shi');
// script/Shi.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    chessType: ""
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      var name = null;
      var loc_x = null;
      var loc_y = null;
      var x = null;
      var y = null;
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
        this.shi_right_top(x, y); //x+1,y+1

        this.shi_right_bottom(x, y); //x-1,y+1

        this.shi_left_top(x, y); //x+1,y-1

        this.shi_left_bottom(x, y); //x-1,y-1
      }
    }, this);
  },
  shi_right_top: function shi_right_top(x, y) {
    if ((x >= 5 ? x + 1 <= 9 ? true : false : x + 1 <= 2 ? true : false) && y + 1 <= 5 && (gameMap[x + 1][y + 1] == 0 || gameMap[x + 1][y + 1].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x + 1) * 9 + y + 2)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x + 1) * 9 + y + 2));
    }
  },
  shi_right_bottom: function shi_right_bottom(x, y) {
    if ((x >= 5 ? x - 1 >= 7 ? true : false : x - 1 >= 0 ? true : false) && y + 1 <= 5 && (gameMap[x - 1][y + 1] == 0 || gameMap[x - 1][y + 1].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x - 1) * 9 + y + 2)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x - 1) * 9 + y + 2));
    }
  },
  shi_left_top: function shi_left_top(x, y) {
    if ((x >= 5 ? x + 1 <= 9 ? true : false : x + 1 <= 2 ? true : false) && y - 1 >= 3 && (gameMap[x + 1][y - 1] == 0 || gameMap[x + 1][y - 1].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x + 1) * 9 + y)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x + 1) * 9 + y));
    }
  },
  shi_left_bottom: function shi_left_bottom(x, y) {
    if ((x >= 5 ? x - 1 >= 7 ? true : false : x - 1 >= 0 ? true : false) && y - 1 >= 3 && (gameMap[x - 1][y - 1] == 0 || gameMap[x - 1][y - 1].slice(0, 1) != host)) {
      cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x - 1) * 9 + y)).active = true;
      tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + ((x - 1) * 9 + y));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTaGkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGVzc1R5cGUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJlIiwibmFtZSIsImxvY194IiwibG9jX3kiLCJ4IiwieSIsInRpcCIsImZvckVhY2giLCJpdGVtIiwiZmluZCIsImFjdGl2ZSIsInNwbGljZSIsImxlbmd0aCIsImhvc3QiLCJjdXJOYW1lIiwic2hpX3JpZ2h0X3RvcCIsInNoaV9yaWdodF9ib3R0b20iLCJzaGlfbGVmdF90b3AiLCJzaGlfbGVmdF9ib3R0b20iLCJnYW1lTWFwIiwic2xpY2UiLCJwdXNoIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUM7QUFERixHQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFDSSxVQUFTQyxDQUFULEVBQVc7QUFDUCxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFVBQUlDLEtBQUssR0FBRyxJQUFaO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLElBQVo7QUFDQSxVQUFJQyxDQUFDLEdBQUcsSUFBUjtBQUNBLFVBQUlDLENBQUMsR0FBRyxJQUFSO0FBQ0FKLE1BQUFBLElBQUksR0FBRyxLQUFLTixJQUFMLENBQVVNLElBQWpCO0FBQ0FDLE1BQUFBLEtBQUssR0FBRyxLQUFLUCxJQUFMLENBQVVTLENBQWxCLENBUE8sQ0FPYTs7QUFDcEJELE1BQUFBLEtBQUssR0FBRyxLQUFLUixJQUFMLENB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UUMsQ0FBNUQsQ0FBUixFQUF3RUssTUFBeEUsR0FBaUYsSUFBakY7QUFDQUosTUFBQUEsR0FBRyxDQUFDZSxJQUFKLENBQVMseUJBQXVCUixJQUF2QixHQUE0QixNQUE1QixHQUFtQyxHQUFuQyxHQUF1Q0EsSUFBdkMsR0FBNEMsTUFBNUMsSUFBb0QsQ0FBQ1QsQ0FBQyxHQUFDLENBQUgsSUFBTSxDQUFOLEdBQVFDLENBQTVELENBQVQ7QUFDSDtBQUNKLEdBOURJO0FBZ0VMaUIsRUFBQUEsS0FoRUssbUJBZ0VJLENBRVIsQ0FsRUksQ0FvRUw7O0FBcEVLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNoZXNzVHlwZTpcIlwiXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULFxyXG4gICAgICAgICAgICBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBsb2NfeCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jX3kgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHRoaXMubm9kZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbG9jX3ggPSB0aGlzLm5vZGUueDsvL+WunumZheWdkOagh1xyXG4gICAgICAgICAgICAgICAgbG9jX3kgPSB0aGlzLm5vZGUueTtcclxuICAgICAgICAgICAgICAgIHggPSBsb2NfeT4wPyhsb2NfeS0zMCkvNjArNToobG9jX3krMzApLzYwKzQ7Ly/pgLvovpHlnZDmoIdcclxuICAgICAgICAgICAgICAgIHkgPSBsb2NfeC82OCs0O1xyXG4gICAgICAgICAgICAgICAgdGlwLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChpdGVtKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlwLnNwbGljZSgwLHRpcC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgaWYoaG9zdD09dGhpcy5jaGVzc1R5cGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ck5hbWUgPSB0aGlzLm5vZGUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaV9yaWdodF90b3AoeCx5KTsvL3grMSx5KzFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaV9yaWdodF9ib3R0b20oeCx5KTsvL3gtMSx5KzFcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoaV9sZWZ0X3RvcCh4LHkpOy8veCsxLHktMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpX2xlZnRfYm90dG9tKHgseSk7Ly94LTEseS0xXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNoaV9yaWdodF90b3AoeCx5KXtcclxuICAgICAgICBpZigoeD49NT8oeCsxPD05P3RydWU6ZmFsc2UpOih4KzE8PTI/dHJ1ZTpmYWxzZSkpJiZ5KzE8PTUmJihnYW1lTWFwW3grMV1beSsxXT09MHx8Z2FtZU1hcFt4KzFdW3krMV0uc2xpY2UoMCwxKSE9aG9zdCkpe1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKCh4KzEpKjkreSsyKSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGlwLnB1c2goXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgrMSkqOSt5KzIpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNoaV9yaWdodF9ib3R0b20oeCx5KXtcclxuICAgICAgICBpZigoeD49NT8oeC0xPj03P3RydWU6ZmFsc2UpOih4LTE+PTA/dHJ1ZTpmYWxzZSkpJiZ5KzE8PTUmJihnYW1lTWFwW3gtMV1beSsxXT09MHx8Z2FtZU1hcFt4LTFdW3krMV0uc2xpY2UoMCwxKSE9aG9zdCkpe1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKCh4LTEpKjkreSsyKSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGlwLnB1c2goXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgtMSkqOSt5KzIpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNoaV9sZWZ0X3RvcCh4LHkpe1xyXG4gICAgICAgIGlmKCh4Pj01Pyh4KzE8PTk/dHJ1ZTpmYWxzZSk6KHgrMTw9Mj90cnVlOmZhbHNlKSkmJnktMT49MyYmKGdhbWVNYXBbeCsxXVt5LTFdPT0wfHxnYW1lTWFwW3grMV1beS0xXS5zbGljZSgwLDEpIT1ob3N0KSl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgrMSkqOSt5KSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGlwLnB1c2goXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgrMSkqOSt5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaGlfbGVmdF9ib3R0b20oeCx5KXtcclxuICAgICAgICBpZigoeD49NT8oeC0xPj03P3RydWU6ZmFsc2UpOih4LTE+PTA/dHJ1ZTpmYWxzZSkpJiZ5LTE+PTMmJihnYW1lTWFwW3gtMV1beS0xXT09MHx8Z2FtZU1hcFt4LTFdW3ktMV0uc2xpY2UoMCwxKSE9aG9zdCkpe1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKCh4LTEpKjkreSkpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRpcC5wdXNoKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9cIitob3N0K1wiX2JveFwiK1wiL1wiK2hvc3QrXCJfYm94XCIrKCh4LTEpKjkreSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=