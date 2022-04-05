import React from 'react';
import ShowAllReview from '../ShowAllReview/ShowAllReview';
import UserReview from '../UserReview/UserReview';


const Reviews = () => {
    const [reviews, setReviews] = UserReview([])



    return (
        <div>
            {
                reviews.map(review => <ShowAllReview key={review.id} reviews={review}></ShowAllReview>)
            }
            <div>

            </div>
        </div>
    );
};

export default Reviews;