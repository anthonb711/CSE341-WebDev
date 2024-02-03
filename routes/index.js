const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.get          );
//router.use('/',         require('../swagger') );
router.use('/profile',  require('./profile') );
router.use('/contacts', require('./contacts'));

module.exports = router;