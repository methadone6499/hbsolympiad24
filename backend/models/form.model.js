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
        required: true,
    
    },
    feePayment:{
        type: Buffer,
        required :true,
    },
    user: {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    },
    event: {
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event'
        },
    }
})

const Form = mongoose.model("Form", formSchema);
module.exports = Form;