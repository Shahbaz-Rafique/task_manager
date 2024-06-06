const express = require('express');
const router = express.Router();
const { AddTask } = require('../controller/addtask');

router.post('/', AddTask);

module.exports = router;
