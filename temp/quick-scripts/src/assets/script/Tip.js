"use strict";
cc._RF.push(module, 'ecc49TWyVpF5ZZ5t9Cg3D+/', 'Tip');
// script/Tip.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, function (e) {
      var enemyName = null;
      var des_x = null;
      var des_y = null;
      var pre_x = null;
      var pre_y = null;
      var cur_i = null;
      var cur_j = null;
      var pre_i = null;
      var pre_j = null;
      var pre_node = null;
      var myJiang = null;
      var enemyJiang = null;
      var mj_x = null;
      var mj_y = null;
      var mj_i = null; //目标逻辑坐标

      var mj_j = null;
      var j_x = null;
      var j_y = null;
      var j_i = null; //目标逻辑坐标

      var j_j = null;
      var pre_obj = null;
      var cur_obj = null;
      des_x = this.node.x; //目标位置

      des_y = this.node.y;
      pre_node = cc.find("Canvas/game_bg/grid/chess/" + curName);
      pre_x = pre_node.x;
      pre_y = pre_node.y; //检查当前位置是否有敌方棋子

      cur_i = des_y > 0 ? (des_y - 30) / 60 + 5 : (des_y + 30) / 60 + 4; //目标逻辑坐标

      cur_j = des_x / 68 + 4;
      pre_i = pre_y > 0 ? (pre_y - 30) / 60 + 5 : (pre_y + 30) / 60 + 4; //先前逻辑坐标

      pre_j = pre_x / 68 + 4;

      if (gameMap[cur_i][cur_j] != 0) {
        cc.find("Canvas/game_bg/grid/chess/" + gameMap[cur_i][cur_j]).active = false;
        enemyName = gameMap[cur_i][cur_j];

        if (gameMap[cur_i][cur_j].substr(2, 1) == 'j') {
          cc.find("music").getComponent("Music").playWin();
          cc.find("Canvas/game_bg/end_" + host).active = true;
          return;
        } else {
          cc.find("music").getComponent("Music").playEat();
        }
      } else {
        cc.find("music").getComponent("Music").playMove();
      }

      pre_node.x = des_x;
      pre_node.y = des_y;
      gameMap[pre_i][pre_j] = 0;
      gameMap[cur_i][cur_j] = curName; //去掉所有的提示棋子

      tip.forEach(function (item) {
        cc.find(item).active = false;
      });
      tip.splice(0, tip.length); //移动信息存放栈内

      pre_obj = {
        x: pre_x,
        y: pre_y,
        i: pre_i,
        j: pre_j,
        name: curName
      };
      cur_obj = {
        x: des_x,
        y: des_y,
        i: cur_i,
        j: cur_j,
        name: curName,
        enemyName: enemyName
      };
      stack.push(pre_obj);
      stack.push(cur_obj);
      myJiang = cc.find("Canvas/game_bg/grid/chess/" + host + "_j");
      mj_x = myJiang.x;
      mj_y = myJiang.y;
      mj_i = mj_y > 0 ? (mj_y - 30) / 60 + 5 : (mj_y + 30) / 60 + 4; //目标逻辑坐标

      mj_j = mj_x / 68 + 4;

      if (host == 'r') {
        host = 'b';
      } else {
        host = 'r';
      }

      if (curName.substr(2, 1) == 'c') {
        this.top(cur_i + 1, cur_j);
        this.bottom(cur_i - 1, cur_j);
        this.left(cur_i, cur_j - 1);
        this.right(cur_i, cur_j + 1);
      }

      if (curName.substr(2, 1) == 'm') {
        this.ma_top(cur_i + 1, cur_j);
        this.ma_bottom(cur_i - 1, cur_j);
        this.ma_left(cur_i, cur_j - 1);
        this.ma_right(cur_i, cur_j + 1);
      }

      if (curName.substr(2, 1) == 'p') {
        this.pao_top(cur_i + 1, cur_j, 0);
        this.pao_bottom(cur_i - 1, cur_j, 0);
        this.pao_left(cur_i, cur_j - 1, 0);
        this.pao_right(cur_i, cur_j + 1, 0);
      }

      if (curName.substr(2, 1) == 'z') {
        if (host == 'b') {
          this.zu_top(cur_i + 1, cur_j);
          this.zu_left(cur_i, cur_j - 1);
          this.zu_right(cur_i, cur_j + 1);
        } else {
          this.zu_bottom(cur_i - 1, cur_j);
          this.zu_left(cur_i, cur_j - 1);
          this.zu_right(cur_i, cur_j + 1);
        }
      }

      enemyJiang = cc.find("Canvas/game_bg/grid/chess/" + host + "_j");
      j_x = enemyJiang.x;
      j_y = enemyJiang.y;
      j_i = j_y > 0 ? (j_y - 30) / 60 + 5 : (j_y + 30) / 60 + 4; //目标逻辑坐标

      j_j = j_x / 68 + 4;

      if (curName.substr(2, 1) == 'j') {
        if (cur_j == j_j) {
          var hasChess = true;

          for (var i = j_i > cur_i ? cur_i + 1 : j_i + 1; i <= (j_i > cur_i ? j_i - 1 : cur_i - 1); i++) {
            if (gameMap[i][cur_j] != 0) {
              hasChess = false;
              break;
            }
          }

          if (hasChess) {
            cc.find("music").getComponent("Music").playWin();
            cc.find("Canvas/game_bg/end_" + host).active = true;
            return;
          }
        }
      }

      if (pre_j == j_j && mj_j == j_j) {
        var hasChess = true;

        for (var i = j_i > mj_i ? mj_i + 1 : j_i + 1; i <= (j_i > mj_i ? j_i - 1 : mj_i - 1); i++) {
          if (gameMap[i][pre_j] != 0) {
            hasChess = false;
            break;
          }
        }

        if (hasChess) {
          cc.find("music").getComponent("Music").playWin();
          cc.find("Canvas/game_bg/end_" + host).active = true;
        }
      }
    }, this);
  },
  zu_top: function zu_top(x, y) {
    if (x >= 10) return;

    if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
      cc.find("music").getComponent("Music").playPromote();
      return;
    }
  },
  zu_bottom: function zu_bottom(x, y) {
    if (x < 0) return;

    if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
      cc.find("music").getComponent("Music").playPromote();
      return;
    }
  },
  zu_left: function zu_left(x, y) {
    if (y < 0) return;

    if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
      cc.find("music").getComponent("Music").playPromote();
      return;
    }
  },
  zu_right: function zu_right(x, y) {
    if (y >= 9) return;

    if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
      cc.find("music").getComponent("Music").playPromote();
      return;
    }
  },
  pao_top: function pao_top(x, y, k) {
    if (x >= 10) return;

    if (gameMap[x][y] != 0) {
      //&&gameMap[x][y].substr(0,1)!=host
      if (k == 1) {
        if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
          return;
        }
      }

      k++;
    }

    ;
    this.pao_top(x + 1, y, k);
  },
  pao_bottom: function pao_bottom(x, y, k) {
    if (x < 0) return;

    if (gameMap[x][y] != 0) {
      //&&gameMap[x][y].substr(0,1)!=host
      if (k == 1) {
        if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
          return;
        }
      }

      k++;
    }

    ;
    this.pao_bottom(x - 1, y, k);
  },
  pao_left: function pao_left(x, y, k) {
    if (y < 0) return;

    if (gameMap[x][y] != 0) {
      //&&gameMap[x][y].substr(0,1)!=host
      if (k == 1) {
        if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
          return;
        }
      }

      k++;
    }

    ;
    this.pao_left(x, y - 1, k);
  },
  pao_right: function pao_right(x, y, k) {
    if (y >= 9) return; // if(gameMap[x][y]!=0&&gameMap[x][y].slice(0,1)==host)return;

    if (gameMap[x][y] != 0) {
      //&&gameMap[x][y].substr(0,1)!=host
      if (k == 1) {
        if (gameMap[x][y] != 0 && gameMap[x][y].substr(2, 1) == 'j' && gameMap[x][y].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
          return;
        }
      }

      k++;
    }

    ;
    this.pao_right(x, y + 1, k);
  },
  ma_top: function ma_top(x, y) {
    if (x >= 10) return;
    if (gameMap[x][y] != 0) return;

    if (y - 1 >= 0) {
      if (x + 1 <= 9) {
        if (gameMap[x + 1][y - 1] != 0 && gameMap[x + 1][y - 1].substr(2, 1) == 'j' && gameMap[x + 1][y - 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }

    if (y + 1 <= 8) {
      if (x + 1 <= 9) {
        if (gameMap[x + 1][y + 1] != 0 && gameMap[x + 1][y + 1].substr(2, 1) == 'j' && gameMap[x + 1][y + 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }
  },
  ma_bottom: function ma_bottom(x, y) {
    if (x < 0) return;
    if (gameMap[x][y] != 0) return;

    if (y - 1 >= 0) {
      if (x - 1 >= 0) {
        if (gameMap[x - 1][y - 1] != 0 && gameMap[x - 1][y - 1].substr(2, 1) == 'j' && gameMap[x - 1][y - 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }

    if (y + 1 <= 8) {
      if (x - 1 >= 0) {
        if (gameMap[x - 1][y + 1] != 0 && gameMap[x - 1][y + 1].substr(2, 1) == 'j' && gameMap[x - 1][y + 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }
  },
  ma_left: function ma_left(x, y) {
    if (y < 0) return;
    if (gameMap[x][y] != 0) return;

    if (x + 1 <= 9) {
      if (y - 1 >= 0) {
        if (gameMap[x + 1][y - 1] != 0 && gameMap[x + 1][y - 1].substr(2, 1) == 'j' && gameMap[x + 1][y - 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }

    if (x - 1 >= 0) {
      if (y - 1 >= 0) {
        if (gameMap[x - 1][y - 1] != 0 && gameMap[x - 1][y - 1].substr(2, 1) == 'j' && gameMap[x - 1][y - 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }
  },
  ma_right: function ma_right(x, y) {
    if (y >= 9) return;
    if (gameMap[x][y] != 0) return;

    if (x + 1 <= 9) {
      if (y + 1 <= 8) {
        if (gameMap[x + 1][y + 1] != 0 && gameMap[x + 1][y + 1].substr(2, 1) == 'j' && gameMap[x + 1][y + 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }

    if (x - 1 >= 0) {
      if (y + 1 <= 8) {
        if (gameMap[x - 1][y + 1] != 0 && gameMap[x - 1][y + 1].substr(2, 1) == 'j' && gameMap[x - 1][y + 1].substr(0, 1) == host) {
          cc.find("music").getComponent("Music").playPromote();
        }
      }
    }
  },
  show: function show(x, y) {
    if (gameMap[x][y] != 0 && gameMap[x][y].substr(0, 1) == host) {
      if (gameMap[x][y].substr(2, 1) == 'j') {
        cc.find("music").getComponent("Music").playPromote();
      }

      return true;
    }

    ;
    return false;
  },
  top: function top(x, y) {
    if (x >= 10) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) != host) return;
    if (this.show(x, y)) return;
    this.top(x + 1, y);
  },
  bottom: function bottom(x, y) {
    if (x < 0) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) != host) return;
    if (this.show(x, y)) return;
    this.bottom(x - 1, y);
  },
  left: function left(x, y) {
    if (y < 0) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) != host) return;
    if (this.show(x, y)) return;
    this.left(x, y - 1);
  },
  right: function right(x, y) {
    if (y >= 9) return;
    if (gameMap[x][y] != 0 && gameMap[x][y].slice(0, 1) != host) return;
    if (this.show(x, y)) return;
    this.right(x, y + 1);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();