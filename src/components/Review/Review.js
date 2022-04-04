import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, description, rating, photo, email } = review;
    return (
        <div className='container'>
            <div className='user-container'>
                <img className='photo-size' src={photo} alt="" />
                <h2>{name}</h2>
                <p>description: {description}</p>
                <p>email: {email}</p>
                <p><small>rating: {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;