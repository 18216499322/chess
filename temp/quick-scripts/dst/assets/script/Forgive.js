
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Forgive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c32c0qJRfhB0b+wba7rSPDg', 'Forgive');
// script/Forgive.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    chessType: ""
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  forgive: function forgive() {
    if (stack.length > 0) {
      hasChess = true;
      stack.forEach(function (item) {
        if (item.name.slice(0, 1) == host) {
          hasChess = false;
        }
      });
      if (hasChess && host === this.chessType) return; //去掉所有的提示棋子

      tip.forEach(function (item) {
        cc.find(item).active = false;
      });
      tip.splice(0, tip.length);

      if (host == this.chessType) {
        chess1 = stack.pop();
        chess2 = stack.pop();
        chess3 = stack.pop();
        chess4 = stack.pop();

        if (chess1.enemyName != null) {
          node1 = cc.find("Canvas/game_bg/grid/chess/" + chess1.name);
          node1.x = chess2.x;
          node1.y = chess2.y;
          cc.find("Canvas/game_bg/grid/chess/" + chess1.enemyName).active = true;
          gameMap[chess1.i][chess1.j] = chess1.enemyName;
          gameMap[chess2.i][chess2.j] = chess1.name;
        } else {
          node2 = cc.find("Canvas/game_bg/grid/chess/" + chess1.name);
          node2.x = chess2.x;
          node2.y = chess2.y;
          gameMap[chess1.i][chess1.j] = 0;
          gameMap[chess2.i][chess2.j] = chess1.name;
        }

        if (chess3.enemyName != null) {
          node3 = cc.find("Canvas/game_bg/grid/chess/" + chess3.name);
          node3.x = chess4.x;
          node3.y = chess4.y;
          cc.find("Canvas/game_bg/grid/chess/" + chess3.enemyName).active = true;
          gameMap[chess3.i][chess3.j] = chess3.enemyName;
          gameMap[chess4.i][chess4.j] = chess3.name;
        } else {
          node4 = cc.find("Canvas/game_bg/grid/chess/" + chess3.name);
          node4.x = chess4.x;
          node4.y = chess4.y;
          gameMap[chess3.i][chess3.j] = 0;
          gameMap[chess4.i][chess4.j] = chess3.name;
        }
      } else {
        chess1 = stack.pop();
        chess2 = stack.pop();

        if (chess1.enemyName != null) {
          node1 = cc.find("Canvas/game_bg/grid/chess/" + chess1.name);
          node1.x = chess2.x;
          node1.y = chess2.y;
          cc.find("Canvas/game_bg/grid/chess/" + chess1.enemyName).active = true;
          gameMap[chess1.i][chess1.j] = chess1.enemyName;
          gameMap[chess2.i][chess2.j] = chess1.name;
        } else {
          node2 = cc.find("Canvas/game_bg/grid/chess/" + chess1.name);
          node2.x = chess2.x;
          node2.y = chess2.y;
          gameMap[chess1.i][chess1.j] = 0;
          gameMap[chess2.i][chess2.j] = chess1.name;
        }

        if (host == 'r') {
          host = 'b';
        } else {
          host = 'r';
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGb3JnaXZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2hlc3NUeXBlIiwic3RhcnQiLCJmb3JnaXZlIiwic3RhY2siLCJsZW5ndGgiLCJoYXNDaGVzcyIsImZvckVhY2giLCJpdGVtIiwibmFtZSIsInNsaWNlIiwiaG9zdCIsInRpcCIsImZpbmQiLCJhY3RpdmUiLCJzcGxpY2UiLCJjaGVzczEiLCJwb3AiLCJjaGVzczIiLCJjaGVzczMiLCJjaGVzczQiLCJlbmVteU5hbWUiLCJub2RlMSIsIngiLCJ5IiwiZ2FtZU1hcCIsImkiLCJqIiwibm9kZTIiLCJub2RlMyIsIm5vZGU0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFDO0FBREYsR0FIUDtBQU9MO0FBRUE7QUFFQUMsRUFBQUEsS0FYSyxtQkFXSSxDQUVSLENBYkk7QUFlTEMsRUFBQUEsT0FmSyxxQkFlSTtBQUNMLFFBQUdDLEtBQUssQ0FBQ0MsTUFBTixHQUFhLENBQWhCLEVBQWtCO0FBQ2RDLE1BQUFBLFFBQVEsR0FBRyxJQUFYO0FBQ0FGLE1BQUFBLEtBQUssQ0FBQ0csT0FBTixDQUFjLFVBQVNDLElBQVQsRUFBYztBQUN4QixZQUFHQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixDQUFnQixDQUFoQixFQUFrQixDQUFsQixLQUFzQkMsSUFBekIsRUFBOEI7QUFDMUJMLFVBQUFBLFFBQVEsR0FBRyxLQUFYO0FBQ0g7QUFDSixPQUpEO0FBS0EsVUFBR0EsUUFBUSxJQUFFSyxJQUFJLEtBQUcsS0FBS1YsU0FBekIsRUFBbUMsT0FQckIsQ0FRZDs7QUFDQVcsTUFBQUEsR0FBRyxDQUFDTCxPQUFKLENBQVksVUFBU0MsSUFBVCxFQUFj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QUFDRG1CLFVBQUFBLEtBQUssR0FBRy9CLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSwrQkFBNkJHLE1BQU0sQ0FBQ1AsSUFBNUMsQ0FBUjtBQUNBbUIsVUFBQUEsS0FBSyxDQUFDTCxDQUFOLEdBQVVMLE1BQU0sQ0FBQ0ssQ0FBakI7QUFDQUssVUFBQUEsS0FBSyxDQUFDSixDQUFOLEdBQVVOLE1BQU0sQ0FBQ00sQ0FBakI7QUFDQUMsVUFBQUEsT0FBTyxDQUFDVCxNQUFNLENBQUNVLENBQVIsQ0FBUCxDQUFrQlYsTUFBTSxDQUFDVyxDQUF6QixJQUE4QixDQUE5QjtBQUNBRixVQUFBQSxPQUFPLENBQUNQLE1BQU0sQ0FBQ1EsQ0FBUixDQUFQLENBQWtCUixNQUFNLENBQUNTLENBQXpCLElBQThCWCxNQUFNLENBQUNQLElBQXJDO0FBQ0g7O0FBQ0QsWUFBR0UsSUFBSSxJQUFJLEdBQVgsRUFBZTtBQUNYQSxVQUFBQSxJQUFJLEdBQUcsR0FBUDtBQUNILFNBRkQsTUFFSztBQUNEQSxVQUFBQSxJQUFJLEdBQUcsR0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKLEdBdEZJLENBd0ZMOztBQXhGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjaGVzc1R5cGU6XCJcIlxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgZm9yZ2l2ZSgpe1xyXG4gICAgICAgIGlmKHN0YWNrLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgaGFzQ2hlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdGFjay5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbS5uYW1lLnNsaWNlKDAsMSk9PWhvc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NoZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKGhhc0NoZXNzJiZob3N0PT09dGhpcy5jaGVzc1R5cGUpcmV0dXJuO1xyXG4gICAgICAgICAgICAvL+WOu+aOieaJgOacieeahOaPkOekuuaji+WtkFxyXG4gICAgICAgICAgICB0aXAuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoaXRlbSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aXAuc3BsaWNlKDAsdGlwLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmKGhvc3Q9PXRoaXMuY2hlc3NUeXBlKXtcclxuICAgICAgICAgICAgICAgIGNoZXNzMSA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlc3MyID0gc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBjaGVzczMgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGNoZXNzNCA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hlc3MxLmVuZW15TmFtZSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEgPSBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9jaGVzcy9cIitjaGVzczEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEueCA9IGNoZXNzMi54O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnkgPSBjaGVzczIueTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9jaGVzcy9cIitjaGVzczEuZW5lbXlOYW1lKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNYXBbY2hlc3MxLmldW2NoZXNzMS5qXSA9IGNoZXNzMS5lbmVteU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1hcFtjaGVzczIuaV1bY2hlc3MyLmpdID0gY2hlc3MxLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMiA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL2NoZXNzL1wiK2NoZXNzMS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMi54ID0gY2hlc3MyLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTIueSA9IGNoZXNzMi55O1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNYXBbY2hlc3MxLmldW2NoZXNzMS5qXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1hcFtjaGVzczIuaV1bY2hlc3MyLmpdID0gY2hlc3MxLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihjaGVzczMuZW5lbXlOYW1lIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMyA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL2NoZXNzL1wiK2NoZXNzMy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMy54ID0gY2hlc3M0Lng7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTMueSA9IGNoZXNzNC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL2NoZXNzL1wiK2NoZXNzMy5lbmVteU5hbWUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1hcFtjaGVzczMuaV1bY2hlc3MzLmpdID0gY2hlc3MzLmVuZW15TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWFwW2NoZXNzNC5pXVtjaGVzczQual0gPSBjaGVzczMubmFtZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU0ID0gY2MuZmluZChcIkNhbnZhcy9nYW1lX2JnL2dyaWQvY2hlc3MvXCIrY2hlc3MzLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGU0LnggPSBjaGVzczQueDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlNC55ID0gY2hlc3M0Lnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1hcFtjaGVzczMuaV1bY2hlc3MzLmpdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lTWFwW2NoZXNzNC5pXVtjaGVzczQual0gPSBjaGVzczMubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjaGVzczEgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGNoZXNzMiA9IHN0YWNrLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgaWYoY2hlc3MxLmVuZW15TmFtZSE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEgPSBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9jaGVzcy9cIitjaGVzczEubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTEueCA9IGNoZXNzMi54O1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUxLnkgPSBjaGVzczIueTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVfYmcvZ3JpZC9jaGVzcy9cIitjaGVzczEuZW5lbXlOYW1lKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNYXBbY2hlc3MxLmldW2NoZXNzMS5qXSA9IGNoZXNzMS5lbmVteU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1hcFtjaGVzczIuaV1bY2hlc3MyLmpdID0gY2hlc3MxLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMiA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZV9iZy9ncmlkL2NoZXNzL1wiK2NoZXNzMS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlMi54ID0gY2hlc3MyLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZTIueSA9IGNoZXNzMi55O1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNYXBbY2hlc3MxLmldW2NoZXNzMS5qXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZU1hcFtjaGVzczIuaV1bY2hlc3MyLmpdID0gY2hlc3MxLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihob3N0ID09ICdyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9zdCA9ICdiJztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSAncic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=