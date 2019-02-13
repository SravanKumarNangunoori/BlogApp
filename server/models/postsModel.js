var mongoose = require("mongoose");

module.exports = mongoose.model("posts", {
    name: String,
    mail: String,
    content: String

});