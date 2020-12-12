
cc.Class({
    extends: cc.Component,

    properties: {
        move: {
            default: null,
            type: cc.AudioClip
        },
        eat: {
            default: null,
            type: cc.AudioClip
        },
        win: {
            default: null,
            type: cc.AudioClip
        },
        promote: {
            default: null,
            type: cc.AudioClip
        },
        loss: {
            default: null,
            type: cc.AudioClip
        },
        again: {
            default: null,
            type: cc.AudioClip
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    playMove(){
        cc.audioEngine.play(this.move,false,1);
    },

    playEat(){
        cc.audioEngine.play(this.eat,false,1);
    },

    playWin(){
        cc.audioEngine.play(this.win,false,1);
    },

    playPromote(){
        cc.audioEngine.play(this.promote,false,1);
    },

    playLoss(){
        cc.audioEngine.play(this.loss,false,1);
    },

    playAgain(){
        cc.audioEngine.play(this.again,false,1);
    }

    // update (dt) {},
});
