
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
                    this.top(x+1,y,0);
                    this.bottom(x-1,y,0);
                    this.left(x,y-1,0);
                    this.right(x,y+1,0);
                }
            },this);
    },

    show(x,y){
        cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
        tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
        return;
    },

    top(x,y,k){
        if(x>=10)return;
        if(gameMap[x][y]!=0){//&&gameMap[x][y].substr(0,1)!=host
            if(k==1){
                if(gameMap[x][y]!=0&&gameMap[x][y].substr(0,1)!=host){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
                    return;
                }
            }
            k++;
        };
        if(k==0){
            this.show(x,y);
        }
        this.top(x+1,y,k);
    },

    bottom(x,y,k){
        if(x<0)return;
        if(gameMap[x][y]!=0){//&&gameMap[x][y].substr(0,1)!=host
            if(k==1){
                if(gameMap[x][y]!=0&&gameMap[x][y].substr(0,1)!=host){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
                    return;
                }
            }
            k++;
        };
        if(k==0){
            this.show(x,y);
        }
        this.bottom(x-1,y,k);
    },

    left(x,y,k){
        if(y<0)return;
        if(gameMap[x][y]!=0){//&&gameMap[x][y].substr(0,1)!=host
            if(k==1){
                if(gameMap[x][y]!=0&&gameMap[x][y].substr(0,1)!=host){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
                    return;
                }
            }
            k++;
        };
        if(k==0){
            this.show(x,y);
        }
        this.left(x,y-1,k);
    },

    right(x,y,k){
        if(y>=9)return;
        // if(gameMap[x][y]!=0&&gameMap[x][y].slice(0,1)==host)return;
        if(gameMap[x][y]!=0){//&&gameMap[x][y].substr(0,1)!=host
            if(k==1){
                if(gameMap[x][y]!=0&&gameMap[x][y].substr(0,1)!=host){
                    cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
                    tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
                    return;
                }
            }
            k++;
        };
        if(k==0){
            this.show(x,y);
        }
        this.right(x,y+1,k);
    },

    start () {

    },

    // update (dt) {},
});
