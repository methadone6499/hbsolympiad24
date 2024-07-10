const express = require("express");
const router = express.Router();
const {postFormSolo, postFormTeam} = require('../controllers/form.controller.js');

//router.post("/signup", signupUser);
//router.post("/login", loginUser);
router.post("/submitFormSolo", postFormSolo);
router.post("/submitFormTeam", postFormTeam);

module.exports = router;