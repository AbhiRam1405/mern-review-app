const API_URL = 'http://localhost:5000/api/reviews';

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
