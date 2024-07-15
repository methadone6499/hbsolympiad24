const express = require("express");
const router = express.Router();
const {signupUser, loginUser, getUser} = require('../controllers/user.controller.js');

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/suki", getUser);
module.exports = router;