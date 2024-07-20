const express = require("express");
const router = express.Router();
const {getUsers, getNumOfRegistered, getOneUserByEmail, getUsersByName, getEventForms, approveFeePayment} = require('../controllers/admin.controller.js');


router.post("/getUsers", getUsers);
router.post("/getNumOfRegistered", getNumOfRegistered)
router.post("/getOneUserByEmail", getOneUserByEmail);
router.post("/getUsersByName", getUsersByName);
router.post("/getEventForms", getEventForms);
router.post("/approveFeePayment", approveFeePayment);


module.exports = router;