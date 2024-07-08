const express = require("express");
const router = express.Router();
const {addEvent, getEvent} = require('../controllers/event.controller.js');

router.post("/addEvent", addEvent);
router.get("/getEvents", getEvent);

module.exports = router;