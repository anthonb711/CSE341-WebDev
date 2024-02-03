const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.get          );
router.use('/profile',  require('./profile') );
router.use('/contacts', require('./contacts'));

module.exports = router;