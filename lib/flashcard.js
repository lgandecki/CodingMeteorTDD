Flashcards = new Mongo.Collection("Flashcard", {
	transform: function (doc) {
		return new Flashcard(doc);
	}
});

Flashcards.allow({
	insert: function(userId) {
		return Roles.userIsInRole(userId, "admin");
	},
	update: function(userId) {
		return Roles.userIsInRole(userId, "admin");
	},
	remove: function(userId) {
		return Roles.userIsInRole(userId, "admin");
	}
});

Flashcard = function (doc) {
	this.question = doc.question;
	this.answer = doc.answer;
	this.videoId = doc.videoId;
};

Flashcard.prototype = {
	insert: function (callback) {
		var _that = this;
		Flashcards.insert({
				question: this.question,
				answer: this.answer,
				videoId: this.videoId
			}, function (err, id) {
				_that._id = id;
				callback && callback(err, id);
			}
		)
	}
};

