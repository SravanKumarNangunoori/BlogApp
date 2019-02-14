var mongoose = require("mongoose");

module.exports = mongoose.model("posts", {
    title: String,
    content: String

});