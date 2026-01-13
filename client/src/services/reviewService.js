const API_URL = 'https://mern-review-app.onrender.com/api/reviews';

/**
 * Fetches all reviews from the backend.
 * @returns {Promise<Array>} - An array of review objects.
 * @throws {Error} - If the request fails.
 */
export const getAllReviews = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to fetch reviews');
        }

        return data.data; // data.data because backend returns { success: true, count: N, data: [] }
    } catch (error) {
        throw error;
    }
};

/**
 * Submits a new review to the backend.
 * @param {Object} reviewData - The review object containing name, rating, and comment.
 * @returns {Promise<Object>} - The created review data.
 * @throws {Error} - If the request fails.
 */
export const createReview = async (reviewData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });

        const data = await response.json();

        if (!response.ok) {
            // Throw error with message from backend if available
            throw new Error(data.message || 'Failed to submit review');
        }

        return data;
    } catch (error) {
        throw error;
    }
};
