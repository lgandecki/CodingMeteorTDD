Router.configure({
	layoutTemplate: "TheBrainBody"
});


Router.route('/', function() {
	this.render("video");
});

Router.route('/addFlashcards', function() {
	this.render("addFlashcards");
});