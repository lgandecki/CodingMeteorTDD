/// <reference path="../../../../../libs/package_custom/jasmine.d.ts" />
/// <reference path="../../../../../libs/package_defs/meteor.d.ts" />
/// <reference path="../../../../../libs/package_custom/YT.d.ts" />

describe("videoTemplate ", function() {
    it("should set the video finished session to false on start", function() {
        expect(Session.get("videoFinished")).toBeDefined();
        expect(Session.get("videoFinished")).toBeFalsy();
    });
    describe(" event listener ", function() {
        it("should change the video finished session when video finished", function() {
            var _event = {
                data: 0
                // this should be YT.PlayerState.ENDED
            };

            window["theBrain.video"]._playerEventListener(_event);

            expect(Session.get("videoFinished")).toBeTruthy();
        });
        it("should change the video finished session when video playing", function() {
            var _event = {
                data: 1
                // this should be YT.PlayerState.ENDED
            };
            Session.set("videoFinished", true);

            window["theBrain.video"]._playerEventListener(_event);

            expect(Session.get("videoFinished")).toBeFalsy();
        });
    })

});