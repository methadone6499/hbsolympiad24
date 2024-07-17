const Form = require('../models/form.model');
const FormTeam = require('../models/formTeam.model');
const Event = require('../models/events.model.js');
const User = require('../models/user.model');


const postFormSolo = async (req, res) =>{
    const userEmail = req.body.email;
    const eventName = req.body.eventName;
    const id = req.body.id;
    try{
        const existingForm = await Form.findOne({
            'email': userEmail,
            'eventName': eventName,
            'id': id,
        })

        if(existingForm){
            return res.status(200).json({message: 'You have already registered for this event', existingForm});
        }
        console.log(existingForm);

        const checkLimit = await Event.findOne(
            {title: eventName}
        )
        console.log(checkLimit.registered, checkLimit.limits);
        if(checkLimit.registered===checkLimit.limits){
            return res.status(200).json({message: "Event registration limit reached better luck next time."})
        }
        console.log("limit not reached can continue with registration");

        const userEventLimit = await User.findOne({
            email: userEmail,
            id: id
        })
        if(userEventLimit.events.length === 5){
            return res.status(200).json({message: "You cannot register for more than 5 events"});
        }
        console.log("event limit check ", userEventLimit.events.length);

        const newForm = new Form({
            name: req.body.name,
            email: userEmail,
            id: id,
            phoneNumber: req.body.phoneNumber,
            eventName: eventName,
        })
        console.log(newForm);
        
        const updateSoloEventCount = await Event.findOneAndUpdate(
            {title: eventName},
            {$inc: {registered: 1}},
            {new: true,  runValidators: true}
        )
        console.log(updateSoloEventCount);

        const updatedUser = await User.findOneAndUpdate(
            {email: userEmail},
            {$push: { events: {title: eventName}}},
            {new: true, runValidators: true}
        );
        //console.log(updatedUser);
        await newForm.save();
        res.status(201).json({message: 'Form successfully submitted'});
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
    
}

const postFormTeam = async (req, res) =>{
    const userEmail = req.body.email;
    const eventName = req.body.eventName;
    try{
        const existingForm = await FormTeam.findOne({
            'email': userEmail,
            'eventName': eventName
        })
    }
    catch(e){
        res.status(500).json({message: "Internal server error"});
    }
    console.log(req.body);
    
}

const postFormTeamMember = async(req, res) =>{
    console.log(req.body);
}

const deleteFormSolo = async(req, res) =>{
    console.log(req.body);
    
}

module.exports = {
    postFormSolo,
    postFormTeam,
    postFormTeamMember,
    deleteFormSolo
}