import React from 'react';
import '../Cart/css/dealcart.css';
import Link from '@mui/material/Link';

const DealCart = (props) => {

    return (
        <div className='body12'>
            <Link href="#" underline='none' color={'black'}>
            
                <img className="img1" src={props.img1} alt="img1" />

                <div className='cartBottom'>
                     <div className='cartButtomLeft'>
                        <img className="img2" src={props.img2}  alt="img1" />

                    </div>
                    <div className='cartButtomRight'>
                        <p>{props.text}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DealCart;