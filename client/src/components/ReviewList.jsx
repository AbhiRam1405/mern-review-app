import React, { useEffect, useState } from 'react';
import { getAllReviews } from '../services/reviewService';

const ReviewList = ({ refreshTrigger }) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setIsLoading(true);
                const data = await getAllReviews();
                setReviews(data);
                setError(null);
            } catch (err) {
                setError(err.message || 'Failed to fetch reviews');
            } finally {
                setIsLoading(false);
            }
        };

        fetchReviews();
    }, [refreshTrigger]);

    const styles = {
        container: {
            maxWidth: '600px',
            margin: '20px auto',
            padding: '0 20px',
            fontFamily: 'Arial, sans-serif'
        },
        heading: {
            textAlign: 'center',
            color: '#333'
        },
        loading: {
            textAlign: 'center',
            color: '#666',
            fontSize: '18px'
        },
        error: {
            textAlign: 'center',
            color: '#D8000C',
            backgroundColor: '#FFD2D2',
            padding: '10px',
            borderRadius: '4px'
        },
        empty: {
            textAlign: 'center',
            color: '#888',
            fontStyle: 'italic',
            marginTop: '20px'
        },
        card: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            marginBottom: '15px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px'
        },
        name: {
            fontWeight: 'bold',
            fontSize: '1.1em',
            color: '#2c3e50'
        },
        rating: {
            backgroundColor: '#f1c40f',
            color: '#fff',
            padding: '2px 8px',
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '0.9em'
        },
        comment: {
            color: '#555',
            lineHeight: '1.5',
            marginBottom: '10px'
        },
        date: {
            fontSize: '0.8em',
            color: '#999',
            textAlign: 'right'
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (isLoading) {
        return <div style={styles.loading}>Loading reviews...</div>;
    }

    if (error) {
        return (
            <div style={styles.container}>
                <div style={styles.error}>{error}</div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Recent Reviews</h3>

            {reviews.length === 0 ? (
                <div style={styles.empty}>No reviews yet. Be the first to add one!</div>
            ) : (
                reviews.map((review) => (
                    <div key={review._id} style={styles.card}>
                        <div style={styles.header}>
                            <span style={styles.name}>{review.name}</span>
                            <span style={styles.rating}>{review.rating} / 5</span>
                        </div>
                        <p style={styles.comment}>{review.comment}</p>
                        <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>
                            <strong>Phone:</strong> {review.phoneNumber}
                        </div>
                        <div style={styles.date}>
                            {formatDate(review.createdAt)}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ReviewList;
