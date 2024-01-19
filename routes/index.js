const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// home route
router.get('/', indexController.kaiaName);
router.post('/', indexController.kaiaName);


// profile route
router.get('/profile', indexController.profile);
router.post('/profile', indexController.profile);

  module.exports = router;