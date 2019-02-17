const express = require('express');
const Subscribers = require("./models/subscribersModel.js")

module.exports.subscribeUser = function(req, res) {
    var user = new Subscribers(req.body);
    user.save(function(err, result) {
        console.log(user);
        res.json(result);
    })

}