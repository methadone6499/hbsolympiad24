const express = require("express");
const router = express.Router();
const {signupUser, loginUser, getUser, setPayment, getUserEvents, getTeamMates, getApproval} = require('../controllers/user.controller.js');

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/suki", getUser);
router.post("/postFeePayment", setPayment);
router.post("/getEvents", getUserEvents);
router.post("/getTeamMates", getTeamMates);
router.post("/getApproval", getApproval);
module.exports = router;