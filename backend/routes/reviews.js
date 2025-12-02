const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Review = require('../models/Review');

// Validation middleware
const validateReview = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5'),
  body('title').trim().notEmpty().withMessage('Review title is required'),
  body('review').trim().notEmpty().withMessage('Review is required')
];

// POST /api/reviews - Submit a review
router.post('/', validateReview, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, eventType, eventDate, rating, title, review } = req.body;

    const newReview = new Review({
      name,
      email,
      eventType,
      eventDate,
      rating,
      title,
      review
    });

    await newReview.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your review! It will be published after approval.',
      data: newReview
    });
  } catch (error) {
    console.error('Review submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

// GET /api/reviews - Get all approved reviews (public)
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ success: false, message: 'Error fetching reviews' });
  }
});

// GET /api/reviews/all - Get all reviews (admin)
router.get('/all', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
  } catch (error) {
    console.error('Error fetching all reviews:', error);
    res.status(500).json({ success: false, message: 'Error fetching reviews' });
  }
});

// GET /api/reviews/stats - Get review statistics
router.get('/stats', async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true });
    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0 
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews 
      : 0;
    
    const ratingDistribution = {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length
    };

    res.json({
      success: true,
      data: {
        totalReviews,
        averageRating: averageRating.toFixed(1),
        ratingDistribution
      }
    });
  } catch (error) {
    console.error('Error fetching review stats:', error);
    res.status(500).json({ success: false, message: 'Error fetching review stats' });
  }
});

module.exports = router;

