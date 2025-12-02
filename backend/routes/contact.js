const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendContactNotification } = require('../utils/emailService');

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  body('eventDate').optional().isISO8601().withMessage('Invalid date format'),
  body('eventType').optional().isIn(['Wedding', 'Corporate Event', 'Birthday Party', 'Concert', 'Festival', 'Private Party', 'Other'])
];

// POST /api/contact - Submit contact form
router.post('/', validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, eventDate, eventType, message } = req.body;

    // Create new contact submission
    const contact = new Contact({
      name,
      email,
      eventDate,
      eventType,
      message
    });

    await contact.save();

    // Send email notification (don't wait for it)
    sendContactNotification(contact).catch(console.error);

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: contact
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contacts (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Error fetching contacts' });
  }
});

module.exports = router;

