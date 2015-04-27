(function () {

  'use strict';
  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');
    var assert = require("/usr/local/lib/node_modules/chai/chai").assert;

    this.Given(/^I am a new user$/, function () {
      // no callbacks! DDP has been promisified so you can just return it
      return this.ddp.callAsync('reset', []); // this.ddp is a connection to the mirror
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      // WebdriverIO supports Promises/A+ out the box, so you can return that too
      this.browser. // this.browser is a pre-configured WebdriverIO + PhantomJS instance
        url(url.resolve(process.env.HOST, relativePath)). // process.env.HOST always points to the mirror
        call(callback);
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      // you can use chai-as-promised in step definitions also
      this.browser.
        //waitForVisible('title'). // WebdriverIO chain-able promise magic
        getTitle().should.become(expectedTitle).and.notify(callback);
    });

    this.Then(/^I should see first Crash Course youtube video$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      this.browser.
        waitForVisible('#ytplayer').
        getHTML("#ytplayer", function(err, html) {
            assert.match(html, /youtube.com/, "ytplayer loaded youtube link")
          }).call(callback);

    });

    this.Then(/^I should not see button "([^"]*)"$/, function (arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      var _buttonSelector = "//button[text()='" + arg1 + "']";
      this.browser.waitForExist(_buttonSelector)
      .isVisible(_buttonSelector, function(err, isVisible) {
        assert.isFalse(isVisible);
          callback();
      })
    });

    //this.When(/^Video finished$/, function (callback) {
    //  callback().pending();
    //  // Write code here that turns the phrase above into concrete actions
    //  //Session.set("videoFinished", true);
    //  callback();
    //});
    //
    //
    //this.Then(/^I should see button "([^"]*)"$/, function (arg1, callback) {
    //  callback().pending();
    //  var _buttonSelector = "//button[text()='" + arg1 + "']";
    //  this.browser.waitForExist(_buttonSelector)
    //    .isVisible(_buttonSelector, function(err, isVisible) {
    //      assert.isTrue(isVisible);
    //      callback();
    //    })
    //});

  };

})();