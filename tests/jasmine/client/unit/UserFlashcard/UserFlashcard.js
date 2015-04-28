describe("UserFlashcard", function () {
	var _userFlashcardObj = {
		userId: "userId",
		videoId: "givenVideoId",
		flashcardId: "givenFlashcardId"
	};

	it("should be created with userId, videoId, flashcardId", function () {

		var _userFlashcard = new UserFlashcard(_userFlashcardObj);
		for (var key in _userFlashcardObj) {
			if (_userFlashcardObj.hasOwnProperty(key)) {
				expect(_userFlashcard[key]).toBe(_userFlashcardObj[key]);
			}
		}
	});

	//it("should be insertable to DB", function () {
	//
	//});
	//
	//it("should not be saved without a user", function () {
	//	var _userFlashcard = new UserFlashcard({
	//		videoId: "givenVideoId",
	//		flashcardId: "givenFlashcardId"
	//	})
	//})

});