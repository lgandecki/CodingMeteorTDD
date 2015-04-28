"use strict";

describe("Flashcard", function() {
	var _flashcardObject = {
		question: "this is question",
		answer: "This is answer",
		videoId: "video1"
	};

	afterEach(function(done) {
		Meteor.logout(function () {
			done();
		});
	});

	it("should not be created by not-logged in users", function (done) {
		var _flashcard = new Flashcard(_flashcardObject);
		_flashcard.insert(function (error, result) {
			expect(Meteor.userId()).toBe(null);
			expect(error).toBeDefined();
			expect(error && error.error).toBe(403);
			done();
		});

	});


	it("should not be created by non admins", function(done) {
			Meteor.loginWithPassword("user@thebrain.pro", "password", function(err) {
				expect(err).toBeUndefined();

				var _flashcard = new Flashcard(_flashcardObject);
				_flashcard.insert(function(error, result) {
					expect(error.error).toBe(403);

					Meteor.logout(function() {
						done();
					})
				})
			})
	});


	describe("when logged in as admin", function(done) {
		beforeEach(function(done) {
			Meteor.loginWithPassword("admin@thebrain.pro", "password", function(err) {
				done();
			});
		});

		it("should be saveable", function(done) {
				var _flashcard = new Flashcard(_flashcardObject);
				_flashcard.insert(function (error, result) {
					expect(Meteor.userId()).not.toBe(null);
					expect(error).toBeUndefined();
					done();
				});
		});

		it("should add _id after saving", function(done) {
			var _flashcard = new Flashcard(_flashcardObject);

			_flashcard.insert(function() {
				expect(_flashcard._id).toEqual(jasmine.any(String));
				done();
			});
		});
	});



	it("should be returned from the DB with methods on it", function() {
		var _flashcard = new Flashcard(_flashcardObject);
		_flashcard.insert();

		var _flashcardReturned = Flashcards.findOne();
		expect(_flashcardReturned.insert).toEqual(jasmine.any(Function));
	});
});