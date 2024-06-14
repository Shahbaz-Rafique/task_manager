const express = require('express');
const router = express.Router();
const { UpdateTask } = require('../controller/updatetask');

router.get('/', UpdateTask);

module.exports = router;
