"use strict";
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