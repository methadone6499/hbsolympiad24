const User = require('../models/user.model');
const Forms = require('../models/form.model');
const Event = require('../models/events.model');
const FormTeam = require('../models/formTeam.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginAdmin = async(req, res) => {
    
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
        res.status(201).json({result: user, token, message: "Admin logged in success"});
    }
    catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const getUsers = async(req, res) =>{
    const page = req.body.page || 1;
    try{
        // Default to page 1 if no page is specified
        const limit = 2; // Number of users per page
        const skip = (page - 1) * limit;

        const users = await User.find().skip(skip).limit(limit).select('-feePayment -uniCard');
        res.status(200).json(users);
    }
    catch(e){
        res.status(500).json({message: 'Internal server error'});
    }

}

module.exports = {
    loginAdmin,
    getUsers
}