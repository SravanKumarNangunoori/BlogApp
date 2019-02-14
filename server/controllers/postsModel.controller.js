var Posts = require("../models/postsModel.js")
var Users = require("../models/usersModel.js")
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'team6softwareengineering@gmail.com',
        pass: 'team6password'
    }
});


module.exports.createPost = function(req, res) {
    var post = new Posts(req.body);
    post.save(function(err, result) {

        console.log(result);
        var tomail = '';
        Users.find({}, function(err, result) {
            for (var i = 0; i < result.length; i++) {
                tomail = tomail + result[i].email + ',';
            }
            var mailOptions = {
                from: 'team6.softwareengineering@gmail.com',
                to: tomail,
                subject: 'New Post on the blog',
                text: 'There is a new post : ' + post.title
            };

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        });

        res.json(result);
    })
};

module.exports.getPost = function(req, res) {

    Posts.find({}, function(err, result) {
        res.json(result);
    });

};


module.exports.getresponse = function(req, res) {

    res.send("Hi");
}