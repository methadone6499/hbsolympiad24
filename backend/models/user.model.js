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
    uniName:{
        type: String,
    },
    uniCard:{
        type: String,
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    feePayment:{
        type: String
    },
    approved:{
        type: Boolean
    },
    events: [{
        formID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'forms'
        },
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;