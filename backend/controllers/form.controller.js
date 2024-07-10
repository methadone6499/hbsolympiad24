const Form = require('../models/form.model');
const FormTeam = require('../models/formTeam.model');
const Event = require('../models/events.model.js');

const postFormSolo = async (req, res) =>{
    console.log(req.body);
    
    try{
        
        const feePaymentBuffer = Buffer.from(req.body.feePayment, 'base64');
        console.log(feePaymentBuffer);
        const userID = req.body.user.userID;
        const eventID = req.body.event.eventID;

        console.log("testing if feepayment was converted to base64");

        // Check if the user is already registered for the event
        const existingForm = await Form.findOne({
            'user.userID': userID,
            'event.eventID': eventID
        });

        console.log("testing existing form");
        if (existingForm) {
            return res.status(400).json({ error: 'User already registered for this event' });
        }

        const newForm = new Form({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            affiliation: req.body.affiliation,
            spRequirements: req.body.spRequirements,
            feePayment: feePaymentBuffer,
            user: {userID: req.body.user.userID},
            event: {eventID: req.body.event.eventID},
        })
        console.log(newForm);
        await newForm.save();
        const updateEvent = await Event.findByIdAndUpdate(
            eventID,
            {$inc: {registered: 1}},
            {new: true, runValidators: true}
        );
        console.log(updateEvent);

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
        const userID = req.body.user.userID;
        const eventID = req.body.event.eventID;

        console.log("man");

        // Check if the user is already registered for the event
        const existingForm = await Form.findOne({
            'user.userID': userID,
            'event.eventID': eventID
        });

        console.log("man");
        if (existingForm) {
            return res.status(400).json({ error: 'User already registered for this event' });
        }

        const newForm = new Form({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            affiliation: req.body.affiliation,
            spRequirements: req.body.spRequirements,
            feePayment: feePaymentBuffer,
            user: {userID: req.body.user.userID},
            event: {eventID: req.body.event.eventID},
        })
        console.log(newForm);
        await newForm.save();
        res.status(201).json({message: 'Form successfully submitted'});
    } catch(e){
        res.status(500).json({error: 'Internal server error'});
    }
}

const deleteFormSolo = async(req, res) =>{
    console.log("man");
    const userID = req.body.user.userID;
    const eventID = req.body.event.eventID;
    try {
        const result = await Form.deleteOne({
            'user.userID': userID,
            'event.eventID': eventID 
        });
        if (result.deletedCount === 0) {
            console.log('No form found with the specified userID and eventID');
            res.status(400).json({error: "No form to delete"});
        }
        const updateEvent = await Event.findByIdAndUpdate(
            req.body.event.eventID,
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
    deleteFormSolo
}