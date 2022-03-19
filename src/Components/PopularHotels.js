import React from 'react';
import HotelCart from '../Cart/HotelCart';
import '../Components/css/popularhotels.css';

const PopularHotels = () => {
    return (
        <div className='popularhotelsBody'>
            <HotelCart/>
            <HotelCart/>
        </div>
    );
};

export default PopularHotels;