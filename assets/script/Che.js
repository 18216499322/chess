
cc.Class({
    extends: cc.Component,

    properties: {
        chessType:""
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,
            function(e){
                var name = '';
                var loc_x = '';
                var loc_y = '';
                var x = '';
                var y = '';
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

    show(x,y){
        if(gameMap[x][y]!=0&&gameMap[x][y].substr(0,1)!=host){
            cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
            tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
            return true;
        };
        cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1)).active = true;
        tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+(x*9+y+1));
        return false;
    },

    top(x,y){
        if(x>=10)return;
        if(gameMap[x][y]!=0&&gameMap[x][y].slice(0,1)==host)return;
        if(this.show(x,y))return;
        this.top(x+1,y);
    },

    bottom(x,y){
        if(x<0)return;
        if(gameMap[x][y]!=0&&gameMap[x][y].slice(0,1)==host)return;
        if(this.show(x,y))return;
        this.bottom(x-1,y);
    },

    left(x,y){
        if(y<0)return;
        if(gameMap[x][y]!=0&&gameMap[x][y].slice(0,1)==host)return;
        if(this.show(x,y))return;
        this.left(x,y-1);
    },

    right(x,y){
        if(y>=9)return;
        if(gameMap[x][y]!=0&&gameMap[x][y].slice(0,1)==host)return;
        if(this.show(x,y))return;
        this.right(x,y+1);
    },

    start () {
       
    },

    // update (dt) {},
});
