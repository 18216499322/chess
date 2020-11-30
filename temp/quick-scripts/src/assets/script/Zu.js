"use strict";
cc._RF.push(module, 'b7606EmGz9GdbxhW6fBPceq', 'Zu');
// script/Zu.js

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

        if (this.chessType == 'r') {
          if (x < 5) {
            this.zu_top(x + 1, y);
          } else {
            this.zu_top(x + 1, y);
            this.zu_left(x, y - 1);
            this.zu_right(x, y + 1);
          }
        } else {
          if (x > 4) {
            this.zu_bottom(x - 1, y);
          } else {
            this.zu_bottom(x - 1, y);
            this.zu_left(x, y - 1);
            this.zu_right(x, y + 1);
          }
        }
      }
    }, this);
  },
  // show(x,y){
  //     if(gameMap[x][y]!=0&&gameMap[x][y].substr(0,1)!=host){
  //         cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
  //         tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
  //         return true;
  //     };
  //     cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
  //     tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
  //     return false;
  // },
  zu_top: function zu_top(x, y) {
    if (x >= 10) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1)).active = true;
    tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1));
  },
  zu_bottom: function zu_bottom(x, y) {
    if (x < 0) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1)).active = true;
    tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1));
  },
  zu_left: function zu_left(x, y) {
    if (y < 0) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1)).active = true;
    tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1));
  },
  zu_right: function zu_right(x, y) {
    if (y >= 9) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) == host) return;
    cc.find("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1)).active = true;
    tip.push("Canvas/game_bg/grid/" + host + "_box" + "/" + host + "_box" + (x * 9 + y + 1));
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();