const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
        
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    affiliation:{
        type: String,
        required: true,
        
    },
    spRequirements:{
        type: String,
    
    },
    feePayment:{
        type: Buffer,
        required :true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    eventID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events'
    }
})

const Form = mongoose.model("Form", formSchema);
module.exports = Form;