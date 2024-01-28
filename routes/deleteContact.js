const express = require('express');
const router = express.Router();
const deleteContactController = require('../controllers/deleteContactController');

router.delete('/:id', deleteContactController.deleteContact);   // updates a contact

module.exports = router;