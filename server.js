var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var userModelController = require(__dirname + "/server/controllers/userModel.controller.js");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://sravan:mypassword@ds056979.mlab.com:56979/sravannangunoori");
var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "./public/index.html");
});

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

app.listen(8080, function() {
    console.log("Listening on PORT 8080");
});