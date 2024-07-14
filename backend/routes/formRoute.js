const express = require("express");
const router = express.Router();
const {postFormSolo, postFormTeam, postFormTeamMember,deleteFormSolo} = require('../controllers/form.controller.js');

//router.post("/signup", signupUser);
//router.post("/login", loginUser);
router.post("/submitFormSolo", postFormSolo);
router.post("/submitFormTeam", postFormTeam);
router.post("/submitFormTeamMember", postFormTeamMember);
router.post("/deleteFormSolo", deleteFormSolo);

module.exports = router;