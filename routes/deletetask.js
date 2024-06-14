const express = require('express');
const router = express.Router();
const { DeleteTask } = require('../controller/deleteTask');

router.get('/', DeleteTask);

module.exports = router;
