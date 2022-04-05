import React from 'react';

const ShowAllReview = ({ reviews }) => {
    const { name, description, rating, photo, email } = reviews;
    return (
        <div>
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

export default ShowAllReview;