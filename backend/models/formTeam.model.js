const mongoose = require('mongoose');

const formTeamSchema = new mongoose.Schema({
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
    token:{
        type: String,
        required: true,
    },
    user: {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    event: {
        eventID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'events'
        },
    }
})

const FormTeam = mongoose.model("FormTeam", formTeamSchema);
module.exports = FormTeam;