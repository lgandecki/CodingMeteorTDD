describe("Flashcards", function () {
	var _flashcardObject = {
		question: "this is question",
		answer: "This is answer",
		videoId: "video1"
	};

	it("should be created with question, answer and videoId", function () {

		var _flashcard = new Flashcard(_flashcardObject);

		for (var key in _flashcardObject) {
			if (_flashcardObject.hasOwnProperty(key)) {
				expect(_flashcard[key]).toBe(_flashcardObject[key]);
			}
		}
	});
	var _createFlashcard = function () {
		var _flashcard = new Flashcard(_flashcardObject);

		_flashcard.insert();

		return _flashcard;
	};
	it("should be insertable to the DB", function () {
		spyOn(Flashcards, "insert");
		_createFlashcard();

		expect(Flashcards.insert).toHaveBeenCalledWith(_flashcardObject, jasmine.any(Function));

	});

});