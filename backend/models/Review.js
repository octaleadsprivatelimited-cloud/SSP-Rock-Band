const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  eventType: {
    type: String,
    required: false,
    enum: ['Wedding', 'Corporate Event', 'Birthday Party', 'Concert', 'Festival', 'Private Party', 'Other']
  },
  eventDate: {
    type: Date,
    required: false
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5
  },
  title: {
    type: String,
    required: [true, 'Review title is required'],
    trim: true
  },
  review: {
    type: String,
    required: [true, 'Review is required'],
    trim: true
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', reviewSchema);

