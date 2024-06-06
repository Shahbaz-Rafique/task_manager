const express = require('express');
const router = express.Router();
const { GetTasks } = require('../controller/getTasks');

router.get('/', GetTasks);

module.exports = router;
