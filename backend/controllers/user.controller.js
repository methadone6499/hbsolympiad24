const User = require('../models/user.model');
const bcrypt = require('bcrypt');


const signupUser = async (req, res) => {
    const{email}=req.body;
    console.log("bruh");

    try{
        const check = await User.findOne({email:email})

        if(check){
            return res.status(400).json({ error: 'Email already exists' });
        }
        console.log("Email doesn't exist")
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            id: req.body.id,
            password: hashedPassword
        });
            
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch(e){
        res.status(500).json({ error: 'Internal server error' });
    }
}

const loginUser = async(req, res) => {
    
    const{email,password}=req.body

    try{
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({ error: 'Invalid credentials'});
        }
        res.status(201).json({message: 'User logged in successfully'});
    }
    catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    signupUser,
    loginUser
}