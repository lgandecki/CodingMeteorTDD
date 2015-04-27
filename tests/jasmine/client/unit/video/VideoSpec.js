/// <reference path="../../../../../libs/package_custom/jasmine.d.ts" />
/// <reference path="../../../../../libs/package_defs/meteor.d.ts" />
/// <reference path="../../../../../libs/package_custom/YTPlayer.d.ts" />
describe("videoTemplate", function () {
    describe(" onRendered ", function () {
        it("should call the tracker function with YT object", function () {
            spyOn(window["theBrain.video"], "tracker");
            window["theBrain.video"].onRendered();
            expect(window["theBrain.video"].tracker).toHaveBeenCalledWith(jasmine.any(Object));
        });
    });
    describe(" tracker ", function () {
        var yt = {
            "ready": function () {
                return true;
            },
            player: {
                "addEventListener": function () {
                },
                "cueVideoById": function () {
                }
            }
        };
        it("should be running inside a tracker", function () {
            spyOn(Tracker, "autorun");
            window["theBrain.video"].onRendered();
            expect(Tracker.autorun).toHaveBeenCalledWith(jasmine.any(Function));
        });
        it("should render the video", function () {
            spyOn(yt.player, "cueVideoById");
            window["theBrain.video"].tracker(yt);
            expect(yt.player.cueVideoById).toHaveBeenCalledWith("Yocja_N5s1I");
        });
        it("should set a hook for when the video finishes", function () {
            spyOn(yt.player, "addEventListener");
            window["theBrain.video"].tracker(yt);
            expect(yt.player.addEventListener).toHaveBeenCalledWith("onStateChange", jasmine.any(Function));
        });
    });
});
//# sourceMappingURL=VideoSpec.js.map