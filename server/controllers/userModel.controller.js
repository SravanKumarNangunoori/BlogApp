var Users = require("../models/usersModel.js")

module.exports.createUser = function(req, res) {
    var user = new Users(req.body);
    user.save(function(err, result) {
        res.json(result);
    })
}


module.exports.deleteUser = function(req, res) {
    console.log("req inside deleteuser");
    Users.remove({ _id: req.params._id }, function(err, removed) {
        console.log("removed from serverdb");
        res.send("removed");
    });

}

module.exports.getUsers = function(req, res) {
    Users.find({}, function(err, result) {
        res.json(result);
    });
}