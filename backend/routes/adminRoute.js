const express = require("express");
const router = express.Router();
const {getUsers} = require('../controllers/admin.controller.js');


router.post("/getUsers", getUsers);

module.exports = router;