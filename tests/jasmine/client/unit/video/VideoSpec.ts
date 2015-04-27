/// <reference path="../../../../../libs/package_custom/jasmine.d.ts" />
/// <reference path="../../../../../libs/package_defs/meteor.d.ts" />
/// <reference path="../../../../../libs/package_custom/YTPlayer.d.ts" />

describe("videoTemplate", function() {

    describe(" onRendered ", function() {
        it("should call the tracker function with YT object", function() {
            spyOn(window["theBrain.video"], "tracker");

            window["theBrain.video"].onRendered();

            expect(window["theBrain.video"].tracker).toHaveBeenCalledWith(jasmine.any(Object));
        });
    });
    describe (" tracker ", function() {
        it("should be running inside a tracker", function() {
            spyOn(Tracker, "autorun");
            window["theBrain.video"].onRendered();

            expect(Tracker.autorun).toHaveBeenCalledWith(jasmine.any(Function));
        });

        it("should render the video", function () {
            var yt = {
                "ready": function () {

                },
                player: {
                    "loadVideoById": function () {

                    }
                }
            };

            spyOn(yt, "ready").and.returnValue(true);
            spyOn(yt.player, "loadVideoById");

            window["theBrain.video"].tracker(yt);

            expect(yt.player.loadVideoById).toHaveBeenCalledWith("Yocja_N5s1I");

        });
    });
});