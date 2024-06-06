const express = require('express');
const router = express.Router();
const { Register } = require('../controller/register');
const multer = require("multer");
const storageConfig = require("../utils/multer");

const upload = multer({ storage: storageConfig.storage });


router.post('/', upload.single('image') , Register);

module.exports = router;
