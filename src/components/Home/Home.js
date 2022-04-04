import React from 'react';
import './Home.css'
import Image from '../Assets/chair-photo.jpg'
import UserReview from '../UserReview/UserReview';
import Review from '../Review/Review';
import { useNavigate, useNavigationType } from 'react-router-dom';




const Home = () => {
    const [reviews, setReviews] = UserReview([])
    const homeReviewData = reviews.slice(0, 3)
    const navigate = useNavigate()

    return (
        <div className='main-container'>
            <div className='flex-container'>
                <div className='explore-product'>
                    <h2>This's Productive <span className='product-color'>Chair</span></h2>
                    <p>This is  a special Chair.it's looks very beautiful.and every people wants to buy this productive Chair..!!</p>

                </div>
                <div className='photo-show'>
                    <img src={Image} alt="" />
                </div>

            </div>
            {/* review */}
            <h2 className='user-review'>User Review</h2>
            <div className='review-container'>
                {
                    homeReviewData.map(review => <Review key={review.id} review={review}></Review>)

                }

            </div>
            <div className='button-container'>
                <button className='review-button' onClick={() => navigate('/reviews')}>Reviews </button>
            </div>
        </div>
    );
};

export default Home;