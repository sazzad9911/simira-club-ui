import React from 'react';
import '../Cart/css/dealcart.css';
import Link from '@mui/material/Link';

const DealCart = (props) => {
    return (
        <div className='body1'>
            <div>
            <Link href="#">
                <img className="img1" src={props.img1} alt="img1" />
            </Link>
            </div>
            <div className='cartBottom'>
                <div className='cartButtomLeft'>

                </div>
                <div className='cartButtomRight'>

                </div>
            </div>
            
        </div>
    );
};

export default DealCart;