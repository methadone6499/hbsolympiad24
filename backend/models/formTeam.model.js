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
    id:{
        type: String,
        required: true,
        
    },
    phoneNumber:{
        type: String,
        required: true,
    },
    token:{
        type: String,
        required: true,
    },
    numOfMembers:{
        type: Number
    },
    eventName:{
        type: String,
        required: true
    },
    user: [{
        userName: {
            type: String,
        },
    }],
    eventID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'events'
    },
})

const FormTeam = mongoose.model("FormTeam", formTeamSchema);
module.exports = FormTeam;