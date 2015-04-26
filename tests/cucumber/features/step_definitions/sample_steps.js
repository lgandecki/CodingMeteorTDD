(function () {

  'use strict';
  var assert = require('assert');

  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');

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
        waitForVisible('div#video').
        getHTML("div#video", function(err, html) {
            console.log("html ", html);
            assert.notStrictEqual(html, '<iframe width="560" height="315" src="https://www.youtube.com/embed/Yocja_N5s1I?list=PLBDA2E52FB1EF80C9" frameborder="0" allowfullscreen></iframe>')
          }).call(callback);

    });

  };

})();