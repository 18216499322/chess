window.host = 'r';
window.gameMap = [
    ['r_c_l','r_m_l','r_x_l','r_s_l','r_j','r_s_r','r_x_r','r_m_r','r_c_r'],
    [0,0,0,0,0,0,0,0,0],
    [0,'r_p_l',0,0,0,0,0,'r_p_r',0],
    ['r_z_1',0,'r_z_2',0,'r_z_3',0,'r_z_4',0,'r_z_5'],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    ['b_z_1',0,'b_z_2',0,'b_z_3',0,'b_z_4',0,'b_z_5'],
    [0,'b_p_l',0,0,0,0,0,'b_p_r',0],
    [0,0,0,0,0,0,0,0,0],
    ['b_c_l','b_m_l','b_x_l','b_s_l','b_j','b_s_r','b_x_r','b_m_r','b_c_r']
]
window.tip = [];
window.curName;
window.stack = [];
cc.Class({
    extends: cc.Component,
    properties: {
        
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.game.addPersistRootNode(this.node);
    },

    start () {
        
    },

    // update (dt) {},
});
