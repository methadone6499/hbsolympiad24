const express = require("express");
const router = express.Router();
const {postForm} = require('../controllers/form.controller.js');

//router.post("/signup", signupUser);
//router.post("/login", loginUser);
router.post("/submitForm", postForm);


module.exports = router;