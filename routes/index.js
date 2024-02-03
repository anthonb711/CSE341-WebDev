const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');


router.get('/', contactController.getContacts          );
router.use('/profile',  require('./profile') );
router.use('/contacts', require('./contacts'));

module.exports = router;