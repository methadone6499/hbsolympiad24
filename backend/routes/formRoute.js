const express = require("express");
const router = express.Router();
const {postFormSolo, postFormTeam, deleteFormSolo} = require('../controllers/form.controller.js');

//router.post("/signup", signupUser);
//router.post("/login", loginUser);
router.post("/submitFormSolo", postFormSolo);
router.post("/submitFormTeam", postFormTeam);
router.post("/deleteFormSolo", deleteFormSolo);

module.exports = router;