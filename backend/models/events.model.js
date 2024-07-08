const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    limits:{
        type: Number,
        max: 2000
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    registered:{
        type: Number,
        max: 2000,
        required: true,
    }
})

const Events = mongoose.model("Events", eventSchema);
module.exports = Events;