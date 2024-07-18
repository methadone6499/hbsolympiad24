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
    const id = req.body.id;
    try{
        const existingForm = await FormTeam.findOne({
            'email': userEmail,
            'eventName': eventName,
            'id': id,
        })
        if(existingForm){
            return res.status(200).json({message: 'You have already registered for this event'});
        }
        console.log(existingForm, "line 85");
        const checkLimit = await Event.findOne(
            {title: eventName}
        )
        if(checkLimit.registered === checkLimit.limits){
            return res.status(200).json({message: "No more teams can register better luck next time"});
        }
        console.log(checkLimit, "line 92");
        console.log("event limit check  on line 93");
        const userEventLimit = await User.findOne({
            email: userEmail,
            id: id
        })
        console.log(userEventLimit);
        if(userEventLimit.events.length === 5){
            return res.status(200).json({message: "You cannot reigster for more than 5 events"});
        }

        var rand = function() {
            return Math.random().toString(36).substring(2); // remove `0.`
        };
        
        var genToken = function() {
            return rand() + rand(); // to make it longer
        };

        teamToken = genToken();

        const newTeamForm = new FormTeam({
            name: req.body.name,
            email: userEmail,
            id: id,
            phoneNumber: req.body.phoneNumber,
            token: teamToken,
            numOfMembers: 1,
            eventName: eventName,
        });

        const updateTeamEventCount = await Event.findOneAndUpdate(
            {title: eventName},
            {$inc: {registered: 1}},
            {new: true, runValidators: true}
        );
        
        const updatedUser = await User.findOneAndUpdate(
            {email: userEmail},
            {$push: { events: {title: eventName}}},
            {new: true, runValidators: true}
        );
        console.log(newTeamForm);
        await newTeamForm.save();
        return res.status(201).json({message: 'Form successfully submitted, please send the code you have to the people you wish to have as team memberrs.', newTeamForm})

    }
    catch(e){
        res.status(500).json({message: "Internal server error"});
    }
}

const postFormTeamMember = async(req, res) =>{
    console.log(req.body);
    const userEmail = req.body.email;
    const eventName = req.body.eventName;
    const id = req.body.id;
    const token = req.body.teamToken;
    const newUser = {
        userName: req.body.name,
        email: userEmail
    };
    try{
        const existingForm = await FormTeam.findOne({
            'email': userEmail,
            'eventName': eventName,
            'id': id,
        })
        if(existingForm){
            //return res.status(200).json({message: 'You have already registered for this event'});
            return res.status(200).json({message: 'You should kill yourself now captain'});
        }
        console.log("captain isn't registering for the same team or something");
        const existingTeamMember = await FormTeam.findOne({
            user:{
                $elemMatch: {
                    userName: req.body.name,
                    email: userEmail
                }
            },
            eventName: eventName
        })
        if(existingTeamMember){
            return res.status(200).json({message: "You have already registered in a team"});
        }
        console.log("user hasn't registered in a team");
        const userEventLimit = await User.findOne({
            email: userEmail,
            id: id
        });
        if(userEventLimit.events.length === 5){
            return res.status(200).json({message: "You cannot register for more than 5 events"});
        }

        const checkAmountOfMembers = await FormTeam.findOne({
            'token': token,
            'eventName': eventName,
        })
        const eventMemberLimit = Event.findOne({
            'eventName': eventName,
        })
        if(checkAmountOfMembers.numOfMembers === eventMemberLimit.maxLimits){
            return res.status(200).json({message: "max team member limit reached for a team"});
        }
        console.log("max team limit not reached");
        
        const updateTeamForm = await FormTeam.findOneAndUpdate(
            {
                token: token,
                eventName: eventName
            },
            {
                $push:{ user: newUser},
                $inc: {numOfMembers: 1}
            },
            {
                new: true,
                runValidators: true
            }
        )
        console.log(updateTeamForm);
        const updatedUser = await User.findOneAndUpdate(
            {email: userEmail},
            { $push: { events: {title: eventName}}},
            { new: true, runValidators: true }
        );
        return res.status(200).json({message: "You have successfully registered for the team.", updateTeamForm});

    }
    catch(e){
        res.status(500).json({message: "Internal server error"});
    }
}

const deleteFormSolo = async(req, res) =>{
    console.log(req.body);
    const userEmail = req.body.email;
    const eventName = req.body.eventName;
    try{
        const result = await Form.deleteOne({
            'email': userEmail,
            'eventName': eventName
        });
        if(result.deletedCount === 0){
            console.log("No form found with the specified fields");
            res.status(200).json({message:"No form found, please refresh page to see updated event List"});
        }
        const updateEvent = await Event.findOneandUpdate(
            {title: eventName},
            {$inc: {registered: -1}},
            {new: true, runValidators: true}
        )
        return res.status(200).json({message: "solo form successfully deleted"})
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

module.exports = {
    postFormSolo,
    postFormTeam,
    postFormTeamMember,
    deleteFormSolo
}