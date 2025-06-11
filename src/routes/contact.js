const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

const contactController = new ContactController();

router.get('/', contactController.renderContact);

module.exports = router;