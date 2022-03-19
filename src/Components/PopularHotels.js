import React from 'react';
import HotelCart from '../Cart/HotelCart';
import '../Components/css/popularhotels.css';

const PopularHotels = () => {
    return (
        <div className='popularhotelsBody'>
            <div className='popularhotelsText'>
                <h1>Popular Hotels</h1>
            </div>
            <div className='popularhotelsCart'>
                <HotelCart />
                <HotelCart />
            </div>

        </div>
    );
};

export default PopularHotels;