const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/', indexController.get)
router.use('/contacts', require('./contacts'));
router.use('/profile', require('./profile'));

module.exports = router;