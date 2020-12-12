
cc.Class({
    extends: cc.Component,

    properties: {
        chessType:""
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,
            function(e){
                var name = null;
                var loc_x = null;
                var loc_y = null;
                var x = null;
                var y = null;
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
                    this.xiang_right_top(x,y);//x+1,y+1
                    this.xiang_right_bottom(x,y);//x-1,y+1
                    this.xiang_left_top(x,y);//x+1,y-1
                    this.xiang_left_bottom(x,y);//x-1,y-1
                }
            },this);
    },

    xiang_right_top(x,y){
        if((x>=5?(x+2<=9?true:false):(x+2<=4?true:false))&&y+2<=8&&gameMap[x+1][y+1]==0&&(gameMap[x+2][y+2]==0||gameMap[x+2][y+2].slice(0,1)!=host)){
            cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+2)*9+y+3)).active = true;
            tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+2)*9+y+3));
        }
    },

    xiang_right_bottom(x,y){
        if((x>=5?(x-2>=5?true:false):(x-2>=0?true:false))&&y+2<=8&&gameMap[x-1][y+1]==0&&(gameMap[x-2][y+2]==0||gameMap[x-2][y+2].slice(0,1)!=host)){
            cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-2)*9+y+3)).active = true;
            tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-2)*9+y+3));
        }
    },

    xiang_left_top(x,y){
        if((x>=5?(x+2<=9?true:false):(x+2<=4?true:false))&&y-2>=0&&gameMap[x+1][y-1]==0&&(gameMap[x+2][y-2]==0||gameMap[x+2][y-2].slice(0,1)!=host)){
            cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+2)*9+y-1)).active = true;
            tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x+2)*9+y-1));
        }
    },

    xiang_left_bottom(x,y){
        if((x>=5?(x-2>=5?true:false):(x-2>=0?true:false))&&y-2>=0&&gameMap[x-1][y-1]==0&&(gameMap[x-2][y-2]==0||gameMap[x-2][y-2].slice(0,1)!=host)){
            cc.find("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-2)*9+y-1)).active = true;
            tip.push("Canvas/game_bg/grid/"+host+"_box"+"/"+host+"_box"+((x-2)*9+y-1));
        }
    },

    start () {

    },

    // update (dt) {},
});
