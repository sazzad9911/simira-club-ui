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
                <HotelCart scendText='akasg' text='Shradha Saburi Palace' img='https://www.berjayahotel.com/sites/default/files/BMH%20PremierRoom%20800x800.jpg'/>
                <HotelCart />
                <HotelCart />
                <HotelCart />
            </div>

        </div>
    );
};

export default PopularHotels;