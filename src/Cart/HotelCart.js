import React from 'react';
import './css/hotelcart.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const HotelCart = () => {
    return (
        <div className='hotelcartBody'>
            <img className='hotelcartImg' src="https://www.berjayahotel.com/sites/default/files/BMH%20PremierRoom%20800x800.jpg" />
            <div className='hotelcartBodydiv'>
                <h2 className='hotelcartText'>Shradha Saburi Palace</h2>
                <p className='hotelcartText'>Shirdi,Maharashtra</p>
                <div className='hotelcartIconDiv'>
                    <AcUnitIcon className='hotelcartIcon'/>
                    <p className='hotelcartText'>Free for Members</p>
                </div>
            </div>
        </div>
    );
};

export default HotelCart;
