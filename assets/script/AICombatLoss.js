
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    loss(){
        // 发送请求
        wx.request({
            url: 'http://'+localHost+'/chess/aihouse/lose', //仅为示例，并非真实的接口地址
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
                  cc.find("music").getComponent("Music").playLoss();
                    console.log(res);
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
