import React, { useState } from 'react';
import { createReview } from '../services/reviewService';

const ReviewForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        rating: 5,
        comment: ''
    });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'rating' ? parseInt(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsError(false);

        try {
            await createReview(formData);
            setMessage('Review submitted successfully!');
            setFormData({ name: '', rating: 5, comment: '' });
        } catch (error) {
            setIsError(true);
            setMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    const styles = {
        container: {
            maxWidth: '500px',
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            fontFamily: 'Arial, sans-serif'
        },
        formGroup: {
            marginBottom: '15px'
        },
        label: {
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold'
        },
        input: {
            width: '100%',
            padding: '8px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: '1px solid #ccc'
        },
        textarea: {
            width: '100%',
            padding: '8px',
            height: '100px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: '1px solid #ccc',
            resize: 'vertical'
        },
        button: {
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px'
        },
        message: {
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '4px',
            textAlign: 'center',
            backgroundColor: isError ? '#FFD2D2' : '#DFF2BF',
            color: isError ? '#D8000C' : '#4F8A10'
        }
    };

    return (
        <div style={styles.container}>
            <h2>Submit a Review</h2>

            {message && (
                <div style={styles.message}>
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="name">Name:</label>
                    <input
                        style={styles.input}
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength="50"
                        placeholder="Enter your name"
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="rating">Rating (1-5):</label>
                    <select
                        style={styles.input}
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    >
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="comment">Comment:</label>
                    <textarea
                        style={styles.textarea}
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                        maxLength="500"
                        placeholder="Write your review here..."
                    />
                </div>

                <button style={styles.button} type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
