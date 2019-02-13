var Posts = require("../models/postsModel.js")

module.exports.createPost = function(req, res) {
    var post = new Posts(req.body);
    console.log(post);
    post.save(function(err, result) {

        console.log(result);
        res.json(result);
    })
};
module.exports.getresponse = function(req, res) {

    res.send("Hi");
}