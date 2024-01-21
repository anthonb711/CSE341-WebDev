const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));
router.use('/profile', require('./profile'));

  module.exports = router;