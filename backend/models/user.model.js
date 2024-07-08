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
    events: [{
        formId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'form'
        },
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;