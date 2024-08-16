const User = require('../models/user.model');
const Forms = require('../models/form.model');
const Event = require('../models/events.model');
const FormTeam = require('../models/formTeam.model');
const Admin = require('../models/admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginAdmin = async(req, res) => {
    
    const{username,password}=req.body
    console.log(req.body);
    try{
        const admin = await Admin.findOne({username:username});
        if(!admin){
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(!passwordMatch){
            return res.status(501).json({ error: 'Invalid credentials'});
        }
        console.log(admin);
        const token = jwt.sign({username: admin.username}, 'test', { expiresIn: "1h"});
        console.log(token);
        res.status(201).json({result: admin, token, message: "Admin logged in success"});
    }
    catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const signUpAdmin = async(req, res) =>{
    const{username, password} = req.body;
    console.log(req.body);
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new Admin({
            username: username,
            password: hashedPassword
        })
        await newAdmin.save();
        res.status(201).json({message: "user registered successfully", newAdmin});
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

const getUsers = async(req, res) =>{
    const page = req.body.page || 1;
    try{
        // Default to page 1 if no page is specified
        const limit = 2; // Number of users per page
        const skip = (page - 1) * limit;

        const users = await User.find().skip(skip).limit(limit).select('-feePayment -uniCard -password');
        res.status(200).json(users);
    }
    catch(e){
        res.status(500).json({message: 'Internal server error'});
    }

}

const getOneUserByEmail = async(req, res) =>{
    const userEmail = req.body.email;
    try{
        const user = await User.findOne({
            email: userEmail
        })
        if(user){
            return res.status(200).json(user);
        }
        
        res.status(200).json({message: "no user found please confirm spelling of email"})
    }   
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

const getUsersByName = async(req, res) =>{
    const userName = req.body.name;
    try{
        const users = await User.find({
            name: userName
        }).select('-password');
        if(users){
            return res.status(200).json(users);
        }
        res.status(200).json({message: "no user found please confirm spelling of name"});
    }   
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

const getEventForms = async(req, res) => {
    const eventName = req.body.eventName;
    try{
        const forms = await Forms.find({
            eventName: eventName
        })
        if(forms.length > 0){
            console.log("check");
            return res.status(200).json(forms);
        }
        const teamForms = await FormTeam.find({
            eventName: eventName
        })
        console.log(teamForms);
        if(teamForms){
            return res.status(200).json(teamForms);
        }
        res.status(200).json({message: "uh damn this wasn't supposed to happen"})
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }

}

const getNumOfRegistered = async(req, res) =>{
    try{
        const events = await Event.find().select('title category registered');
        res.status(200).json(events);
    }
    catch(e){
        res.status(500).json({message: 'Internal server error'});
    }
}

const approveFeePayment = async(req, res) => {
    const email = req.body.email;
    
    try{
        const findUser = await User.findOneAndUpdate(
        { email: email },
        {$set: {approved: false}}
        )
        if(findUser){
            res.status(200).json({message: "User's fee payment has been disapproved"});
        }
        else{
            res.status(200).json({message: "user not found"});
        }
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

const getImages = async(req, res) =>{
    const email = req.body.email;
    try{
        const user = await User.findOne({
            'email': email,
        })
        const uniCard = user.uniCard;
        const feePayment = user.feePayment;
        
        if(uniCard && feePayment){
            return res.status(200).json({uniCard, feePayment});
        }
        else{
            const message = "User still has not uploaded fee payment."
            return res.status(200).json({uniCard, message});
        }
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

const deleteUser = async(req, res) => {
    const {email, username, password} = req.body;
    console.log(email, username, password);
    const message = "user successfully deleted";
    try{
        const admin = await Admin.findOne({username: username});
        if(!admin){
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(!passwordMatch){
            return res.status(501).json({ error: 'Invalid credentials'});
        }
        
        const findSoloForms = await Forms.find({email: email});
        for (const item of findSoloForms) {
            const eventName = item.eventName;

            // Find the event by its title (eventName) and decrement the registered count
            const event = await Event.findOneAndUpdate(
                { title: eventName },
                { $inc: { registered: -0 } }, // Decrement registered count by 1
                { new: true } // Return the updated document
            );

            if (event) {
                console.log(`Updated event: ${eventName}, new registered count: ${event.registered}`);
            } else {
                console.log(`Event not found: ${eventName}`);
            }
        }
        const deleteSoloForms = await Forms.deleteMany({email: email});
        //--------------------------------------------------------------------------------------------------
        const findTeamForms = await FormTeam.find({email: email});
        for (const item of findTeamForms) {
            const eventName = item.eventName;
            console.log("check");
            // delete the events the other users are registered in as a team member of the user whose account will be deleted
            for (const user of item.user) {
                // Find the corresponding user in the User collection
                await User.updateOne(
                  { email: user.email }, // Find user by email
                  { $pull: { events: { title: eventName } } } // Remove the event from events array
                );
            }
            console.log("check2 ")
            const teamEvent = await Event.findOneAndUpdate(
                {title: eventName},
                { $inc: {registered: -0} },
                {new: true}
            );
            if (teamEvent) {
                console.log(`Updated event: ${eventName}, new registered count of teams: ${teamEvent.registered}`);
            } else {
                console.log(`Event not found: ${eventName}`);
            }
        }
        const deleteTeamForms = await FormTeam.deleteMany({email: email});
        //------------------------------------delete user as team member from forms
        const findTeamMemberForms = await FormTeam.find({'user.email': email});
        for (const item of findTeamMemberForms) {
            const result = await FormTeam.updateOne(
                { _id: item._id },
                { $pull: { user: { email: email } },
                  $inc: { numOfMembers: -1 } }
              );
        }
        //return res.status(200).json({message, findSoloForms, deleteSoloForms, deleteTeamForms});
        const test = await User.deleteOne({email: email});
        return res.status(200).json({message, test});
    }
    catch(e){
        return res.status(500).json({message: "internal server error"});
    }
}

const deleteTeamEvent = async(req, res) =>{
    const {email, eventName, username, password} = req.body;
    try{
        const admin = await Admin.findOne({username: username});
        if(!admin){
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        if(!passwordMatch){
            return res.status(501).json({ message: 'Invalid credentials'});
        }

        const findTeamForm = await FormTeam.findOne({
            'email': email,
            'eventName': eventName
        })

        if(!findTeamForm){
            return res.status(401).json({message:"user is not registered in this event"});
        }
        if(findTeamForm.numOfMembers > 1){
            return res.statu(401).json({message:"team cannot be deleted, team already has members"});
        }
        const deleteTeamForm = await FormTeam.deleteOne({
            'email': email,
            'eventName': eventName
        })

        const removeFormUser = await User.updateOne(
            { email: email }, // Find user by email
            { $pull: { events: { title: eventName } } } // Remove the event from events array
        )

        return res.status(200).json({message: "team event deleted successfully from user"});
    }
    catch(e){
        return res.status(500).json({message: "internal server error"});
    }
}

module.exports = {
    loginAdmin,
    signUpAdmin,
    getUsers,
    getOneUserByEmail,
    getUsersByName,
    getEventForms,
    getNumOfRegistered,
    approveFeePayment,
    getImages,
    deleteUser,
    deleteTeamEvent
}