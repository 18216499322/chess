
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/AboutGame');
require('./assets/script/BgMusic');
require('./assets/script/ButtonSound');
require('./assets/script/Che');
require('./assets/script/ChoiceGame');
require('./assets/script/Commons');
require('./assets/script/ConsoleGame');
require('./assets/script/Forgive');
require('./assets/script/Jiang');
require('./assets/script/Ma');
require('./assets/script/MainSceneGameBg');
require('./assets/script/MainSceneGameState');
require('./assets/script/Music');
require('./assets/script/OffLineGameBg');
require('./assets/script/OffLineGameExit');
require('./assets/script/OffLineGiveUp');
require('./assets/script/Pao');
require('./assets/script/PlayBgMusic_Button');
require('./assets/script/ReturnForward');
require('./assets/script/SetGame');
require('./assets/script/Shi');
require('./assets/script/Tip');
require('./assets/script/Xiang');
require('./assets/script/Zu');
require('./assets/script/exit');
require('./assets/script/supportus');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();