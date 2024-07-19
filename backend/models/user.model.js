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
        required: true,
    },
    uniCard:{
        type: String,
        required: true
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
        title:{
            type: String,
        },
        category:{
            type: String
        },
        formID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'forms'
        },
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;