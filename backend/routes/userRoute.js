const express = require("express");
const router = express.Router();
const {signupUser, loginUser, getUser, setPayment, getUserEvents, getTeamMates} = require('../controllers/user.controller.js');

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/suki", getUser);
router.post("/postFeePayment", setPayment);
router.post("/getEvents", getUserEvents);
router.post("/getTeamMates", getTeamMates);
module.exports = router;