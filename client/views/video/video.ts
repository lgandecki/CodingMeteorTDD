/// <reference path="../../../.meteor/local/build/programs/server/assets/packages/meteortypescript_typescript-libs/definitions/meteor.d.ts" />
/// <reference path="../../../.meteor/local/build/programs/server/assets/packages/meteortypescript_typescript-libs/definitions/node.d.ts" />
/// <reference path="../../../libs/package_custom/YTPlayer.d.ts" />

window["theBrain.video"] = {};

Template["video"].onRendered(window["theBrain.video"].onRendered = function () {
    console.log("on rendered");
    var _yt = new YTPlayer("ytplayer", {
        height: '390',
        width: '640'
    });
    window["theBrain.video"].tracker(_yt);
});

window["theBrain.video"].tracker = function (yt:YTPlayer) {
    Tracker.autorun(function () {
        if (yt.ready()) {
            console.log("ready!");
            yt.player.loadVideoById("Yocja_N5s1I");
        }
    });
};