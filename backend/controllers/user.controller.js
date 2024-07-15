const User = require('../models/user.model');
const bcrypt = require('bcrypt');


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
        res.status(201).json({ message: 'User registered successfully' });
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
            return res.status(401).json({ error: 'Invalid credentials'});
        }
        console.log(user);
        res.status(201).json(user);
    }
    catch(e){
        res.status(500).json({error: 'Internal server error'});
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
    getUser
}