const Form = require('../models/form.model');

const postForm = async (req, res) =>{
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

module.exports = {
    postForm
}