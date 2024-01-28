const express = require('express');
const router = express.Router();
const updateContactController = require('../controllers/updateContactController');

router.put('/:id', updateContactController.updateContact);   // updates a contact

module.exports = router;