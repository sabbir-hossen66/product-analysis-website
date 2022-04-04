import React from 'react';
import './Home.css'
import Image from '../Assets/chair-photo.jpg'



const Home = () => {
    return (
        <div>
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
            <div className='review-container'>

            </div>
        </div>
    );
};

export default Home;