
cc.Class({
    extends: cc.Component,

    properties: {
        chessType:""
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    forgive(){
        if(stack.length>0){
            hasChess = true;
            stack.forEach(function(item){
                if(item.name.slice(0,1)==host){
                    hasChess = false;
                }
            })
            if(hasChess&&host===this.chessType)return;
            //去掉所有的提示棋子
            tip.forEach(function(item){
                cc.find(item).active = false;
            });
            tip.splice(0,tip.length);
            if(host==this.chessType){
                chess1 = stack.pop();
                chess2 = stack.pop();
                chess3 = stack.pop();
                chess4 = stack.pop();
                if(chess1.enemyName!=null){
                    node1 = cc.find("Canvas/game_bg/grid/chess/"+chess1.name);
                    node1.x = chess2.x;
                    node1.y = chess2.y;
                    cc.find("Canvas/game_bg/grid/chess/"+chess1.enemyName).active = true;
                    gameMap[chess1.i][chess1.j] = chess1.enemyName;
                    gameMap[chess2.i][chess2.j] = chess1.name;
                }else{
                    node2 = cc.find("Canvas/game_bg/grid/chess/"+chess1.name);
                    node2.x = chess2.x;
                    node2.y = chess2.y;
                    gameMap[chess1.i][chess1.j] = 0;
                    gameMap[chess2.i][chess2.j] = chess1.name;
                }
                if(chess3.enemyName!=null){
                    node3 = cc.find("Canvas/game_bg/grid/chess/"+chess3.name);
                    node3.x = chess4.x;
                    node3.y = chess4.y;
                    cc.find("Canvas/game_bg/grid/chess/"+chess3.enemyName).active = true;
                    gameMap[chess3.i][chess3.j] = chess3.enemyName;
                    gameMap[chess4.i][chess4.j] = chess3.name;
                }else{
                    node4 = cc.find("Canvas/game_bg/grid/chess/"+chess3.name);
                    node4.x = chess4.x;
                    node4.y = chess4.y;
                    gameMap[chess3.i][chess3.j] = 0;
                    gameMap[chess4.i][chess4.j] = chess3.name;
                }
            }else{
                chess1 = stack.pop();
                chess2 = stack.pop();
                if(chess1.enemyName!=null){
                    node1 = cc.find("Canvas/game_bg/grid/chess/"+chess1.name);
                    node1.x = chess2.x;
                    node1.y = chess2.y;
                    cc.find("Canvas/game_bg/grid/chess/"+chess1.enemyName).active = true;
                    gameMap[chess1.i][chess1.j] = chess1.enemyName;
                    gameMap[chess2.i][chess2.j] = chess1.name;
                }else{
                    node2 = cc.find("Canvas/game_bg/grid/chess/"+chess1.name);
                    node2.x = chess2.x;
                    node2.y = chess2.y;
                    gameMap[chess1.i][chess1.j] = 0;
                    gameMap[chess2.i][chess2.j] = chess1.name;
                }
                if(host == 'r'){
                    host = 'b';
                }else{
                    host = 'r';
                }
            }
        }
    }

    // update (dt) {},
});
