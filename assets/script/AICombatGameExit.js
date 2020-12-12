
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    back(){
        cc.director.loadScene("main scene");
        // 发送请求
        wx.request({
            url: 'http://'+localHost+'/chess/aihouse/quit', //仅为示例，并非真实的接口地址
            data: {
              protocol:timeStamp
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
