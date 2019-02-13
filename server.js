var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var userModelController = require(__dirname + "/server/controllers/userModel.controller.js");
var postModelController = require(__dirname + "/server/controllers/postsModel.controller.js");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://bloguser:blogpassword1@ds219181.mlab.com:19181/blogapp", { useMongoClient: true });
var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

// Api

app.get('/api/', postModelController.getresponse);
app.post('/api/post', postModelController.createPost);



// angular routes
app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

app.listen(8080, function() {
    console.log("Listening on PORT 8080");
});