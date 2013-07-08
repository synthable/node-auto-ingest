module.exports = function(app) {
	app.get("/", function(req, res) {
		res.render("index");
	});

	app.get("/two", function(req, res) {
                res.render("two/index");
        });
};
