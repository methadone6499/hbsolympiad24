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
        min: 10,
        max: 2000
    },
    price:{
        type: Number,
        required: true
    },
    registered:{
        type: Number,
        min: 10,
        maX: 2000
    }
})

const Events = mongoose.model("Events", eventSchema);
module.exports = Events;