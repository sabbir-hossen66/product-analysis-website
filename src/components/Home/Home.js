import React from 'react';
import './Home.css'
import '../Assets/black chair.jpg'



const Home = () => {
    return (
        <div className='parent-div'>
            <div className='explore-product'>
                <h3>This's Productive <span className='product-color'>Chair</span></h3>

            </div>
            <div className='photo-show'>
                <img src={Image} alt="" />
            </div>

        </div>
    );
};

export default Home;