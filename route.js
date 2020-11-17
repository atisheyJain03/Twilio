const express = require('express');
const sendMessage = require('./Controller/sendMessage')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("Welcome")
})

router.post("/whatsApp", sendMessage);

module.exports = router;