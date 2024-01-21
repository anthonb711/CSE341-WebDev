const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/', contactsController.getContacts);   // gets the entire contacts collection
router.get('/:id', contactsController.getContact); // gets a single queried contact

module.exports = router;