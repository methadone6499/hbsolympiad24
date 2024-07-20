const User = require('../models/user.model');
const Forms = require('../models/form.model');
const Event = require('../models/events.model');
const FormTeam = require('../models/formTeam.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { postFormSolo } = require('./form.controller');

const signupUser = async (req, res) => {
    const{email}=req.body;
    console.log(req.body);
    const uniCardImg = req.body.uniCardImgFR;
    function getFileType(base64Data) {
        //console.log(base64Data)
        const fileType = base64Data.substring("data:image/".length, base64Data.indexOf(";base64"));
        if(fileType){
            return fileType;
        }
        return null;
    }

    const fileType = getFileType(uniCardImg);

    // Allowed MIME types
    const allowedTypes = ['jpeg', 'jpg', 'png'];

    // Validate file type
    if (!allowedTypes.includes(fileType)) {
        return res.status(200).json({ message: 'Invalid file type. Only PNG, JPG, and JPEG are allowed.' });
    }

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
            uniName: req.body.university,
            uniCard: req.body.uniCardImgFR,
            approved: false,
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
        res.status(201).json({result: user, token, message: "User logged in successful"});
    }
    catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const setPayment = async(req, res) =>{
    console.log("here");
    //console.log(req.body);
    const feePayment = req.body.feePayment;
    function getFileType(base64Data) {
        //console.log(base64Data)
        const fileType = base64Data.substring("data:image/".length, base64Data.indexOf(";base64"));
        if(fileType){
            return fileType;
        }
        return null;
    }

    const fileType = getFileType(feePayment);

    // Allowed MIME types
    const allowedTypes = ['jpeg', 'jpg', 'png'];

    // Validate file type
    if (!allowedTypes.includes(fileType)) {
        return res.status(200).json({ message: 'Invalid file type. Only PNG, JPG, and JPEG are allowed.' });
    }
    
    try{
        const updatedUser = await User.findOneAndUpdate(
            { id: req.body.id, email: req.body.email },
            { $set: { feePayment: req.body.feePayment, approved: true}},
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
    try{
        const user = await User.findOne({email});
        const { solo, team } = user.events.reduce((acc, item) => {
            if (item.category === 'Solo') {
              acc.solo.push(item);
            } else if (item.category === 'Team') {
              acc.team.push(item);
            }
            return acc;
        }, { solo: [], team: [] });
        //console.log('Solo:', solo);
        //console.log('Team:', team);
        
        const teamMembersbyEvent = {};
        for (let i = 0; i<team.length; i++){
            try{
                const formDetails = await FormTeam.findById({_id: team[i].formID});

                if (!teamMembersbyEvent[i]) {
                    teamMembersbyEvent[i] = [];
                }

                teamMembersbyEvent[i].push(formDetails);
                //console.log(formDetails);
            } catch(error){
                console.log("error", error);
            }
        }
        res.status(200).json({teamMembersbyEvent, solo});
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

const getApproval = async(req, res) => {
    const email = req.body.email;
    const id = req.body.id;
    try{
        const user = await User.findOne({
            'email': email,
            'id': id
        })
        const approved = user.approved;
        if(user.approved === true){
            return res.status(201).json({message: "Your fee payment can be disapproved if the picture you've uploaded is incorrect or blurry and the payment is unreadable ", approved});
        }
        if(user.approved === false){
            return res.status(201).json({message: "Your fee payment has been disapproved, to remove this message reupload your fee payment", approved});
        }
        return res.status(200).json({message: "no such user exists"});
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
    getTeamMates,
    getApproval
}