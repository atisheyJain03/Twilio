const express = require('express');
const sendMessage = require('./Controller/sendMessage')

const router = express.Router();

router.post("/whatsApp", sendMessage);

module.exports = router;