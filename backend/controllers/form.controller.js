const Form = require('../models/form.model');
const FormTeam = require('../models/formTeam.model');
const Event = require('../models/events.model.js');
const User = require('../models/user.model');

const postFormSolo = async (req, res) =>{
    console.log(req.body);
    
    try{
        
        const feePaymentBuffer = Buffer.from(req.body.feePayment, 'base64');
        console.log(feePaymentBuffer);
        const userID = req.body.userID;
        const eventID = req.body.eventID;

        console.log("testing if feepayment was converted to base64");

        // Check if the user is already registered for the event
        const existingForm = await Form.findOne({
            'userID': userID,
            'eventID': eventID
        });

        console.log("testing existing form");
        if (existingForm) {
            return res.status(400).json({ error: 'User already registered for this event' });
        }

        /*const newForm = new Form({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            affiliation: req.body.affiliation,
            spRequirements: req.body.spRequirements,
            feePayment: feePaymentBuffer,
            user: {userID: req.body.user.userID},
            event: {eventID: req.body.event.eventID},
        })*/
        const newForm = new Form({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            affiliation: req.body.affiliation,
            spRequirements: req.body.spRequirements,
            feePayment: feePaymentBuffer,
            userID: req.body.userID,
            eventID: req.body.eventID,
        })
        console.log(newForm._id);
        await newForm.save();
        const updateEvent = await Event.findByIdAndUpdate(
            eventID,
            {$inc: {registered: 1}},
            {new: true, runValidators: true}
        );
        console.log(updateEvent);
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $push: { events: { formId: newForm._id } } },
            { new: true, runValidators: true }
        );
        console.log(updatedUser);

        res.status(201).json({message: 'Form successfully submitted'});
    } catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const postFormTeam = async (req, res) =>{
    console.log(req.body);
    try{
        
        const feePaymentBuffer = Buffer.from(req.body.feePayment, 'base64');
        console.log(feePaymentBuffer);
        const userID = req.body.userID;
        const eventID = req.body.eventID;

        console.log(userID);

        // Check if the user is already registered for the event
        const existingForm = await FormTeam.findOne({
            'user.userID': userID,
            'eventID': eventID
        });

        if (existingForm) {
            return res.status(400).json({ error: 'User already registered for this event' });
        }
        console.log("no existing form");

        var rand = function() {
            return Math.random().toString(36).substring(2); // remove `0.`
        };
        
        var genToken = function() {
            return rand() + rand() + rand() + "-" + rand() + rand() + rand(); // to make it longer
        };

        teamToken = genToken();

        const newForm = new FormTeam({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            affiliation: req.body.affiliation,
            spRequirements: req.body.spRequirements,
            feePayment: feePaymentBuffer,
            token: teamToken,
            user: [{userID: req.body.userID}],
            eventID: req.body.eventID,
        })
        console.log(newForm);
        await newForm.save();
        const updateEvent = await Event.findByIdAndUpdate(
            eventID,
            {$inc: {registered: 1}},
            {new: true, runValidators: true}
        );
        console.log(updateEvent);
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $push: { events: { formId: newForm._id } } },
            { new: true, runValidators: true }
        );
        console.log(updatedUser);
        res.status(201).json({message: 'Form successfully submitted', teamToken});
    } catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const postFormTeamMember = async(req, res) =>{
    console.log("man");
    const userID = req.body.userID;
    const token = req.body.token;
    const eventID = req.body.eventID;
    try{
        const existingEntry = await FormTeam.findOne({
            'user.userID': userID,
            'token': token
        });
        if(existingEntry){
            return res.status(400).json({error: 'User already registered for this team'});
        }
        console.log("no existing form");
        
        const updateForm = await FormTeam.findOneAndUpdate(
            {
                token: token,
                eventID: eventID
            },
            {
                $push: { user: { userID: userID } }
            },
            {
                new: true,
                runValidators: true
            }
        );
        console.log(updateForm);
        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { $push: { events: { formID: updateForm._id } } },
            { new: true, runValidators: true }
        );
        console.log(updatedUser);
        
        return res.status(201).json({message: "successful registration as a team member"});

    } catch(err){
        return res.status(500).json({error: 'Internal server error'});
    }
}

const deleteFormSolo = async(req, res) =>{
    console.log("man");
    const userID = req.body.userID;
    const eventID = req.body.eventID;
    try {
        const result = await Form.deleteOne({
            'userID': userID,
            'eventID': eventID 
        });
        if (result.deletedCount === 0) {
            console.log('No form found with the specified userID and eventID');
            res.status(400).json({error: "No form to delete"});
        }
        const updateEvent = await Event.findByIdAndUpdate(
            eventID,
            {$inc: {registered: -1}},
            {new: true, runValidators: true}
        );
        console.log(updateEvent);
        res.status(201).json({message: 'Form successfully deleted'});

    } catch (err) {
        res.status(500).json({error: "internal server error"});
    }
}

module.exports = {
    postFormSolo,
    postFormTeam,
    postFormTeamMember,
    deleteFormSolo
}