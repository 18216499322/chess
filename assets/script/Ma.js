
cc.Class({
    extends: cc.Component,

    properties: {
        chessType:""
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,
            function(e){
                name = this.node.name;
                loc_x = this.node.x;//实际坐标
                loc_y = this.node.y;
                x = loc_y>0?(loc_y-30)/60+5:(loc_y+30)/60+4;//逻辑坐标
                y = loc_x/68+4;
                tip.forEach(function(item){
                    cc.find(item).active = false;
                });
                tip.splice(0,tip.length);
                if(host==this.chessType){
                    curName = this.node.name;
                    this.top(x+1,y);
                    this.bottom(x-1,y);
                    this.left(x,y-1);
                    this.right(x,y+1);
                }
            },this);
    },

    top(x,y){
        if(x>=10)return;
        if(gameMap[x][y]!=0)return;
        if(y-1>=0){
            if(x+1<=9){
                if(gameMap[x+1][y-1]!=0&&gameMap[x+1][y-1].slice(0,1)!=host||gameMap[x+1][y-1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y));
                }
            }
        }
        if(y+1<=8){
            if(x+1<=9){
                if(gameMap[x+1][y+1]!=0&&gameMap[x+1][y+1].slice(0,1)!=host||gameMap[x+1][y+1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y+2)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y+2));
                }
            }
        }
    },

    bottom(x,y){
        if(x<0)return;
        if(gameMap[x][y]!=0)return;
        if(y-1>=0){
            if(x-1>=0){
                if(gameMap[x-1][y-1]!=0&&gameMap[x-1][y-1].slice(0,1)!=host||gameMap[x-1][y-1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y));
                }
            }
        }
        if(y+1<=8){
            if(x-1>=0){
                if(gameMap[x-1][y+1]!=0&&gameMap[x-1][y+1].slice(0,1)!=host||gameMap[x-1][y+1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y+2)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y+2));
                }
            }
        }
    },

    left(x,y){
        if(y<0)return;
        if(gameMap[x][y]!=0)return;
        if(x+1<=9){
            if(y-1>=0){
                if(gameMap[x+1][y-1]!=0&&gameMap[x+1][y-1].slice(0,1)!=host||gameMap[x+1][y-1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y));
                }
            }
        }
        if(x-1>=0){
            if(y-1>=0){
                if(gameMap[x-1][y-1]!=0&&gameMap[x-1][y-1].slice(0,1)!=host||gameMap[x-1][y-1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y)); 
                }
            }
        }
    },

    right(x,y){
        if(y>=9)return;
        if(gameMap[x][y]!=0)return;
        if(x+1<=9){
            if(y+1<=8){
                if(gameMap[x+1][y+1]!=0&&gameMap[x+1][y+1].slice(0,1)!=host||gameMap[x+1][y+1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y+2)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+1)*9+y+2));
                }
            }
        }
        if(x-1>=0){
            if(y+1<=8){
                if(gameMap[x-1][y+1]!=0&&gameMap[x-1][y+1].slice(0,1)!=host||gameMap[x-1][y+1]==0){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y+2)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-1)*9+y+2));
                }
            }
        }
    },

    start () {

    },

    // update (dt) {},
});
