var Express = require("express"),
    Sequelize = require("sequelize"),
    app = Express(),
    sequelize = new Sequelize('autoingest', 'root', 'password');

/** Define views path and template engine (Handlebars) **/
//app.set("views", __dirname + "/views");
app.set("views", __dirname + "/www");
app.set("view engine", "html");
app.engine("html", require("hbs").__express);

app.use("/images", Express.static(__dirname + "/www/images"));
app.use("/js", Express.static(__dirname + "/www/js"));
app.use("/css", Express.static(__dirname + "/www/css"));
app.use("/partials", Express.static(__dirname + "/www/partials"));

app.use(Express.bodyParser());
app.use(Express.cookieParser("k~789d@fuHhKLBSh=.clbw8"));
app.use(Express.cookieSession());

/** Routes **/
require(__dirname +"/routes/index")(app);


app.listen(8080);
console.log('Listening on port 8080');
