const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.get)
router.use('/contacts',      require('./contacts'));
router.use('/profile',       require('./profile'));
router.use('/createContact', require('./createContact'));
router.use('/updateContact', require('./updateContact.js'));

module.exports = router;