const Event = require("../models/events.model");

const addEvent = async(req, res) =>{
    const{title} = req.body;
    console.log(title);
    try{
        const check = await Event.findOne({title: title});
        if(check){
            return res.status(400).json({error: "Event already exists"});
        }
        console.log("Event doesn't exist");
        const newEvent = new Event({
            title: req.body.title,
            date: req.body.date,
            location: req.body.location,
            description: req.body.description,
            limits: req.body.limits,
            price: req.body.price,
            category: req.body.category,
            registered: req.body.registered
        })

        await newEvent.save();

        res.status(201).json({message: 'Event successfully registered'});
    } catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const getEvent = async(req, res) =>{
    try{
        const event = await Event.find();
        res.status(200).json(event);
    } catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    addEvent,
    getEvent,
}