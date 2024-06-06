const express = require('express');
const router = express.Router();
const { ChangeStatus } = require('../controller/changeStatus');

router.get('/', ChangeStatus);

module.exports = router;
