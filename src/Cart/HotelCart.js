import React from 'react';
import './css/hotelcart.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Link from '@mui/material/Link';

const HotelCart = (props) => {
    const data =props.data;
    return (
        <Link href={'/ShowcaseHotel'+'/'+data.id} color='inherit' underline='none'>
            <div className='hotelcartBody'>
                <img className='hotelcartImg' src={data.image} />
                <div className='hotelcartBodydiv'>
                    <h2 className='hotelcartText'>{data.name}</h2>
                    <p className='hotelcartText'>{data.address}</p>
                    <div className='hotelcartIconDiv'>
                        <AcUnitIcon className='hotelcartIcon' />
                        <p className='hotelcartText'>{data.type}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HotelCart;
