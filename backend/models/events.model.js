const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    date:{
        type: String,
    },
    location:{
        type: String,
    },
    description:{
        type: String,
        required: true,
    },
    limits:{
        type: Number,
    },
    memberLimits:{
        type: Number,
    },
    category:{
        type: String,
        required: true
    },
    registered:{
        type: Number,
        required: true,
    }
})

const Events = mongoose.model("Events", eventSchema);
module.exports = Events;