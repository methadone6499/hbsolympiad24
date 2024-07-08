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
        type: BinData,
        required: true,
    }
})