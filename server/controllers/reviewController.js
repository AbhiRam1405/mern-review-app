const Review = require('../models/Review');

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = async (req, res) => {
    try {
        // Sort by newest first
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error: Unable to fetch reviews',
            error: error.message
        });
    }
};

// @desc    Create a review
// @route   POST /api/reviews
// @access  Public
const createReview = async (req, res) => {
    try {
        const { name, rating, comment } = req.body;

        const review = await Review.create({
            name,
            rating,
            comment
        });

        res.status(201).json({
            success: true,
            data: review
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server Error: Unable to submit review',
            error: error.message
        });
    }
};

module.exports = {
    getReviews,
    createReview
};
