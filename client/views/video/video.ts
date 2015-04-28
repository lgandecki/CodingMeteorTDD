/// <reference path="../../../libs/package_defs/meteor.d.ts" />
/// <reference path="../../../libs/package_defs/node.d.ts" />
/// <reference path="../../../libs/package_custom/YTPlayer.d.ts" />
/// <reference path="../../../libs/package_custom/YT.d.ts" />

window["theBrain.video"] = {};


Template["video"].onRendered(window["theBrain.video"].onRendered = function () {
    _setVideoFinished(false);
    var _yt = new YTPlayer("ytplayer", {
        height: '390',
        width: '640'
    });
    window["theBrain.video"].tracker(_yt);
});


window["theBrain.video"].tracker = function (yt:YTPlayer) {
    Tracker.autorun(function () {
        if (yt.ready()) {
            yt.player.cueVideoById("Yocja_N5s1I");
            yt.player.addEventListener("onStateChange", _playerEventListener);
        }
    });
};


var _playerEventListener = function (e) {
    if (_videoFinished(e)) {
        _setVideoFinished(true);
    } else {
        _setVideoFinished(false);
    }
};

var _videoFinished = function(e) {
    // this should be YT.PlayerState.ENDED
    // but it is not available right away
    return e.data === 0;
};

var _setVideoFinished = function (value) {
    Session.set("videoFinished", value);
};

window["theBrain.video"]._playerEventListener = _playerEventListener;
