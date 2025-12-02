const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // Contact Information
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  
  // Event Details
  eventType: {
    type: String,
    required: [true, 'Event type is required'],
    enum: ['Wedding', 'Corporate Event', 'Birthday Party', 'Concert', 'Festival', 'Private Party', 'Club Event', 'Other']
  },
  eventDate: {
    type: Date,
    required: [true, 'Event date is required']
  },
  eventTime: {
    type: String,
    required: [true, 'Event time is required']
  },
  eventDuration: {
    type: String,
    required: [true, 'Event duration is required'],
    enum: ['1-2 hours', '2-3 hours', '3-4 hours', '4+ hours', 'Full Day']
  },
  
  // Venue Information
  venueName: {
    type: String,
    required: [true, 'Venue name is required'],
    trim: true
  },
  venueAddress: {
    type: String,
    required: [true, 'Venue address is required'],
    trim: true
  },
  venueCity: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  },
  
  // Additional Details
  expectedGuests: {
    type: String,
    enum: ['Less than 50', '50-100', '100-200', '200-500', '500+']
  },
  bandPreference: {
    type: String,
    enum: ['Classic Rock Band', 'Modern Rock Band', 'Acoustic Set', 'Full Band with DJ', 'Custom Package']
  },
  specialRequests: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    enum: ['Under ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹2,00,000', '₹2,00,000+', 'Flexible']
  },
  
  // Booking Status
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  bookingReference: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Generate booking reference before saving
bookingSchema.pre('save', function(next) {
  if (!this.bookingReference) {
    this.bookingReference = 'SSP-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);

