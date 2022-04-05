import React from 'react';
import ShowAllReview from '../ShowAllReview/ShowAllReview';
import UserReview from '../UserReview/UserReview';
import './Reviews.css'


const Reviews = () => {
    const [reviews, setReviews] = UserReview([])



    return (

        <div>
            <h2 className='user-style'>Show All User</h2>
            <div className='new-container'>

                {
                    reviews.map(review => <ShowAllReview key={review.id} reviews={review}></ShowAllReview>)
                }
                <div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;