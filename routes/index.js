const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// home route
router.get('/', indexController.kaiaName);
router.post('/', indexController.kaiaName);

// profile route
router.get('/profile', indexController.profiles);
router.post('/profile', indexController.profiles);

  module.exports = router;