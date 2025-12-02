const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Booking = require('../models/Booking');
const { sendBookingConfirmation, sendBookingNotification } = require('../utils/emailService');

// Validation middleware
const validateBooking = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('eventType').isIn(['Wedding', 'Corporate Event', 'Birthday Party', 'Concert', 'Festival', 'Private Party', 'Club Event', 'Other']).withMessage('Valid event type is required'),
  body('eventDate').isISO8601().withMessage('Valid event date is required'),
  body('eventTime').trim().notEmpty().withMessage('Event time is required'),
  body('eventDuration').isIn(['1-2 hours', '2-3 hours', '3-4 hours', '4+ hours', 'Full Day']).withMessage('Valid duration is required'),
  body('venueName').trim().notEmpty().withMessage('Venue name is required'),
  body('venueAddress').trim().notEmpty().withMessage('Venue address is required'),
  body('venueCity').trim().notEmpty().withMessage('City is required')
];

// POST /api/booking - Submit booking request
router.post('/', validateBooking, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName, lastName, email, phone,
      eventType, eventDate, eventTime, eventDuration,
      venueName, venueAddress, venueCity,
      expectedGuests, bandPreference, specialRequests, budget
    } = req.body;

    // Create new booking (filter out empty optional fields)
    const bookingData = {
      firstName,
      lastName,
      email,
      phone,
      eventType,
      eventDate,
      eventTime,
      eventDuration,
      venueName,
      venueAddress,
      venueCity,
      specialRequests: specialRequests || undefined
    };

    // Only add optional enum fields if they have values
    if (expectedGuests) bookingData.expectedGuests = expectedGuests;
    if (bandPreference) bookingData.bandPreference = bandPreference;
    if (budget) bookingData.budget = budget;

    const booking = new Booking(bookingData);

    await booking.save();

    // Send confirmation emails
    sendBookingConfirmation(booking).catch(console.error);
    sendBookingNotification(booking).catch(console.error);

    res.status(201).json({
      success: true,
      message: 'Your booking request has been submitted successfully!',
      bookingReference: booking.bookingReference,
      data: booking
    });
  } catch (error) {
    console.error('Booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

// GET /api/booking - Get all bookings (admin)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ success: false, message: 'Error fetching bookings' });
  }
});

// GET /api/booking/:reference - Get booking by reference
router.get('/:reference', async (req, res) => {
  try {
    const booking = await Booking.findOne({ bookingReference: req.params.reference });
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }
    res.json({ success: true, data: booking });
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ success: false, message: 'Error fetching booking' });
  }
});

// GET /api/booking/check-availability - Check date availability
router.get('/check-availability/:date', async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));
    
    const existingBookings = await Booking.find({
      eventDate: { $gte: startOfDay, $lte: endOfDay },
      status: { $in: ['pending', 'confirmed'] }
    });

    res.json({
      success: true,
      available: existingBookings.length < 3, // Allow up to 3 bookings per day
      bookingsCount: existingBookings.length
    });
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({ success: false, message: 'Error checking availability' });
  }
});

module.exports = router;

