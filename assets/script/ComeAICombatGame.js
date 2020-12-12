
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    play(){
      // 发送请求
      timeStamp = Date.now();
      wx.request({
        url: 'http://'+localHost+'/chess/aihouse/join', //仅为示例，并非真实的接口地址
        data: {
          protocol:timeStamp+'<>'+'red'
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          console.log(res)
          if (res.statusCode == 200) {
            //something to do
            if(res.data.code==1){
              regretCount = 3;
              cc.director.loadScene("AI combat");
            }
          } else {
            //something to do
            console.log(res);
          }
        },
        fail: function (res) {
          console.log(res);
        }
      })
    }

    // update (dt) {},
});
