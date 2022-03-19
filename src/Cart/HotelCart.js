import React from 'react';
import './css/hotelcart.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const HotelCart = (props) => {
    return (
        <div className='hotelcartBody'>
            <img className='hotelcartImg' src={props.img} />
            <div className='hotelcartBodydiv'>
                <h2 className='hotelcartText'>{props.text}</h2>
                <p className='hotelcartText'>{props.scendText}</p>
                <div className='hotelcartIconDiv'>
                    <AcUnitIcon className='hotelcartIcon'/>
                    <p className='hotelcartText'>{props.thirdText}</p>
                </div>
            </div>
        </div>
    );
};

export default HotelCart;
