import React from 'react';
import HotelCart from '../Cart/HotelCart';
import '../Components/css/popularhotels.css';

const PopularHotels = () => {
    return (
        <div className='popularhotelsBody'>
            <div className='popularhotelsText'>
                <p>Popular Hotels</p>
            </div>
            <div className='popularhotelsCart'>
                <HotelCart />
                <HotelCart />
                <HotelCart />
                <HotelCart />
            </div>

        </div>
    );
};

export default PopularHotels;