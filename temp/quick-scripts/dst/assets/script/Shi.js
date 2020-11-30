
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTaGkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjaGVzc1R5cGUiLCJvbkxvYWQiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJlIiwibmFtZSIsImxvY194IiwieCIsImxvY195IiwieSIsInRpcCIsImZvckVhY2giLCJpdGVtIiwiZmluZCIsImFjdGl2ZSIsInNwbGljZSIsImxlbmd0aCIsImhvc3QiLCJjdXJOYW1lIiwic2hpX3JpZ2h0X3RvcCIsInNoaV9yaWdodF9ib3R0b20iLCJzaGlfbGVmdF90b3AiLCJzaGlfbGVmdF9ib3R0b20iLCJnYW1lTWFwIiwic2xpY2UiLCJwdXNoIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUM7QUFERixHQUhQO0FBT0w7QUFFQUMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFDSSxVQUFTQyxDQUFULEVBQVc7QUFDUEMsTUFBQUEsSUFBSSxHQUFHLEtBQUtOLElBQUwsQ0FBVU0sSUFBakI7QUFDQUMsTUFBQUEsS0FBSyxHQUFHLEtBQUtQLElBQUwsQ0FBVVEsQ0FBbEIsQ0FGTyxDQUVhOztBQUNwQkMsTUFBQUEsS0FBSyxHQUFHLEtBQUtULElBQUwsQ0FBVVUsQ0FBbEI7QUFDQUYsTUFBQUEsQ0FBQyxHQUFHQyxLQUFLLEdBQUMsQ0FBTixHQUFRLENBQUNBLEtBQUssR0FBQyxFQUFQLElBQVcsRUFBWCxHQUFjLENBQXRCLEdBQXdCLENBQUNBLEtBQUssR0FBQyxFQUFQLElBQVcsRUFB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LEdBQTRDLE1BQTVDLElBQW9ELENBQUNWLENBQUMsR0FBQyxDQUFILElBQU0sQ0FBTixHQUFRRSxDQUE1RCxDQUFUO0FBQ0g7QUFDSixHQXpESTtBQTJETGlCLEVBQUFBLEtBM0RLLG1CQTJESSxDQUVSLENBN0RJLENBK0RMOztBQS9ESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjaGVzc1R5cGU6XCJcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcclxuICAgICAgICAgICAgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy5ub2RlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsb2NfeCA9IHRoaXMubm9kZS54Oy8v5a6e6ZmF5Z2Q5qCHXHJcbiAgICAgICAgICAgICAgICBsb2NfeSA9IHRoaXMubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgeCA9IGxvY195PjA/KGxvY195LTMwKS82MCs1Oihsb2NfeSszMCkvNjArNDsvL+mAu+i+keWdkOagh1xyXG4gICAgICAgICAgICAgICAgeSA9IGxvY194LzY4KzQ7XHJcbiAgICAgICAgICAgICAgICB0aXAuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKGl0ZW0pLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aXAuc3BsaWNlKDAsdGlwLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBpZihob3N0PT10aGlzLmNoZXNzVHlwZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VyTmFtZSA9IHRoaXMubm9kZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpX3JpZ2h0X3RvcCh4LHkpOy8veCsxLHkrMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpX3JpZ2h0X2JvdHRvbSh4LHkpOy8veC0xLHkrMVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hpX2xlZnRfdG9wKHgseSk7Ly94KzEseS0xXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGlfbGVmdF9ib3R0b20oeCx5KTsvL3gtMSx5LTFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hpX3JpZ2h0X3RvcCh4LHkpe1xyXG4gICAgICAgIGlmKCh4Pj01Pyh4KzE8PTk/dHJ1ZTpmYWxzZSk6KHgrMTw9Mj90cnVlOmZhbHNlKSkmJnkrMTw9NSYmKGdhbWVNYXBbeCsxXVt5KzFdPT0wfHxnYW1lTWFwW3grMV1beSsxXS5zbGljZSgwLDEpIT1ob3N0KSl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgrMSkqOSt5KzIpKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aXAucHVzaChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvXCIraG9zdCtcIl9ib3hcIitcIi9cIitob3N0K1wiX2JveFwiKygoeCsxKSo5K3krMikpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hpX3JpZ2h0X2JvdHRvbSh4LHkpe1xyXG4gICAgICAgIGlmKCh4Pj01Pyh4LTE+PTc/dHJ1ZTpmYWxzZSk6KHgtMT49MD90cnVlOmZhbHNlKSkmJnkrMTw9NSYmKGdhbWVNYXBbeC0xXVt5KzFdPT0wfHxnYW1lTWFwW3gtMV1beSsxXS5zbGljZSgwLDEpIT1ob3N0KSl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgtMSkqOSt5KzIpKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aXAucHVzaChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvXCIraG9zdCtcIl9ib3hcIitcIi9cIitob3N0K1wiX2JveFwiKygoeC0xKSo5K3krMikpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2hpX2xlZnRfdG9wKHgseSl7XHJcbiAgICAgICAgaWYoKHg+PTU/KHgrMTw9OT90cnVlOmZhbHNlKTooeCsxPD0yP3RydWU6ZmFsc2UpKSYmeS0xPj0zJiYoZ2FtZU1hcFt4KzFdW3ktMV09PTB8fGdhbWVNYXBbeCsxXVt5LTFdLnNsaWNlKDAsMSkhPWhvc3QpKXtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvXCIraG9zdCtcIl9ib3hcIitcIi9cIitob3N0K1wiX2JveFwiKygoeCsxKSo5K3kpKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aXAucHVzaChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvXCIraG9zdCtcIl9ib3hcIitcIi9cIitob3N0K1wiX2JveFwiKygoeCsxKSo5K3kpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNoaV9sZWZ0X2JvdHRvbSh4LHkpe1xyXG4gICAgICAgIGlmKCh4Pj01Pyh4LTE+PTc/dHJ1ZTpmYWxzZSk6KHgtMT49MD90cnVlOmZhbHNlKSkmJnktMT49MyYmKGdhbWVNYXBbeC0xXVt5LTFdPT0wfHxnYW1lTWFwW3gtMV1beS0xXS5zbGljZSgwLDEpIT1ob3N0KSl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgtMSkqOSt5KSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGlwLnB1c2goXCJDYW52YXMvZ2FtZV9iZy9ncmlkL1wiK2hvc3QrXCJfYm94XCIrXCIvXCIraG9zdCtcIl9ib3hcIisoKHgtMSkqOSt5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==