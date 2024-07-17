const User = require('../models/user.model');
const Forms = require('../models/form.model');
const Event = require('../models/events.model');
const FormTeam = require('../models/formTeam.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signupUser = async (req, res) => {
    const{email}=req.body;
    //console.log(email);

    try{
        const check = await User.findOne({email:email})
        if(check){
            return res.status(201).json({ message: 'Email already exists' });
        }
        console.log(req.body)
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            id: req.body.idNum,
            phoneNumber: req.body.phoneNumber,
            uniCard: req.body.uniCardImgFR,
            password: hashedPassword
        });
        console.log(newUser);
        await newUser.save();
        const token = jwt.sign({name: newUser.name, email: newUser.email, userID: newUser._id}, 'test', { expiresIn: "1h"});
        console.log(token);
        res.status(201).json({result: newUser, token, message: "User Registered Successfully"});
    }
    catch(e){
        res.status(500).json({ error: 'Internal server error' });
    }
}

const loginUser = async(req, res) => {
    
    const{email,password}=req.body
    console.log(req.body);
    try{
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(501).json({ error: 'Invalid credentials'});
        }
        console.log(user);
        const token = jwt.sign({name: user.name, email: user.email, userID: user._id}, 'test', { expiresIn: "1h"});
        console.log(token);
        res.status(201).json({result: user, token, message: "User logged in succ"});
    }
    catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const setPayment = async(req, res) =>{
    console.log(req.body);
    try{
        const updatedUser = await User.findOneAndUpdate(
            { id: req.body.idNum, email: req.body.email },
            { $set: { feePayment: req.body.feePayment } },
            { new: true, runValidators: true }
        );
        if (updatedUser) {
            res.status(200).json({updatedUser, message: "fee payment updated successfully"});
        } else {
            res.status(404).json({ message: 'User not found or email does not match' });
        }
    }
    catch(e){
        res.status(500).json({error: "Internal server error"});
    }
}

const getUserEvents = async(req, res) => {
    const id = req.body.id;
    const email = req.body.email
    console.log(id);
    try{
        const user = await User.findOne({email});
        console.log(user.events);
        res.status(200).json({message: "first step successful", user});
        
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

const getTeamMates = async(req, res) =>{
    const name = req.body.name;
    const userEmail = req.body.email;
    const eventName = req.body.eventName;
    const id = req.body.id;
    try{
        let existingForm = await FormTeam.findOne({
            'email': userEmail,
            'eventName': eventName,
            'id': id,
        })
        if(!existingForm){
            existingForm = await FormTeam.findOne({
                eventName: eventName,
                user:{
                    $elemMatch:{
                        userName: req.body.name,
                        email: userEmail
                    }
                }
            })
        }
        existingForm.name = existingForm.name + " (Captain)"
        return res.status(200).json({name: existingForm.name, members: existingForm.user});
    }
    catch(e){
        res.status(500).json({message: "internal server error"});
    }
}

const getUser = async(req, res) => {
    console.log(req.body);
    try{
        const user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(201).json({user});
        }
        else{
            return res.status(400).json({message: "man"});
        }
    }
    catch(e){
        res.status(500).json({error: "Internal server errors"});
    }
}


module.exports = {
    signupUser,
    loginUser,
    setPayment,
    getUserEvents,
    getUser,
    getTeamMates
}