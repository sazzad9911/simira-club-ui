import React from 'react';
import DealCart from '../Cart/DealCart';
import '../Components/css/populardeal.css';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Button from '@mui/material/Button';
const PopularDeal = () => {
    return (
        <div className='box1'>

            <div className='arrowLeft'>
                <Button >
                    <ArrowCircleLeftSharpIcon color="disabled" fontSize='large'
                    ></ArrowCircleLeftSharpIcon>
                </Button>
            </div>

            <div className='arrowRight'>
                <Button>
                    <ArrowCircleRightSharpIcon
                        fontSize='large'
                        color="disabled"></ArrowCircleRightSharpIcon>
                </Button>
            </div>
            <h2> Popular Deals</h2>
            <div className='brandShow1'>
            <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'
                    text='Flat 35 % OFF On All Orders'>

                </DealCart>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'
                    text='Flat 35 % OFF On All Orders'>

                </DealCart>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'
                    text='Flat 35 % OFF On All Orders'>

                </DealCart>
            
            </div>
        </div>
    );
};

export default PopularDeal;