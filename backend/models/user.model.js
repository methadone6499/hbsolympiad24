const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    id:{
        type: String,
    },
    password:{
        type: String,
        required: true,
    },
    events:{
        type: [String]
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;