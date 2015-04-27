/// <reference path="../../../.meteor/local/build/programs/server/assets/packages/meteortypescript_typescript-libs/definitions/meteor.d.ts" />
/// <reference path="../../../.meteor/local/build/programs/server/assets/packages/meteortypescript_typescript-libs/definitions/node.d.ts" />
/// <reference path="../../../libs/package_custom/YTPlayer.d.ts" />


Template["video"].onRendered = window["theBrain.video"] = {
    onRendered: function() {
        console.log("test on rendered");
        var _yt = new YTPlayer("video", {});
        window["theBrain.video"].tracker(_yt);
    }
};

window["theBrain.video"].tracker = function(yt: YTPlayer) {
    console.log("yt ", yt);
    if (yt.ready()) {
        yt.player.loadVideoById("Yocja_N5s1I");
    }
};