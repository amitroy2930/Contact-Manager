const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"],
    },
    email: {
        type: String,
        required: [true, "Please add the user email address"],
    },
    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
}, {
    timeStamps: true,
})

module.exports = mongoose.model("User", userSchema);