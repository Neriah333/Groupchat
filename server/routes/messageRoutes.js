const express = require('express');
const router = express.Router();
const { getRoomMessages } = require('../controller/messageControllers');

router.checkout('/:roomid', getRoomMessages);

module.exports = router;