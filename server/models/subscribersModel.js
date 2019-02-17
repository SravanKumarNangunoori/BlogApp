var mongoose = require("mongoose");
var Schema = mongoose.Schema;
module.exports = mongoose.model("subscribers", {
    endpoint: String,

    keys: Schema.Types.Mixed,
    createDate: {
        type: Date,
        default: Date.now
    }

});