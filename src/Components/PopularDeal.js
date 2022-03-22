import React,{ createRef} from 'react';
import DealCart from '../Cart/DealCart';
import '../Components/css/topbrands.css';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Button from '@mui/material/Button';
const PopularDeal = () => {
    const ref = createRef()

    const Left = () => {
        ref.current.scrollLeft -=100
    }
    const Right = () => {
        ref.current.scrollLeft +=100
    }
    return (
        <div className='box'>

            <div className='arrowLeft1'>
                <Button onClick={Left}>
                    <ArrowCircleLeftSharpIcon color="disabled" fontSize='large'
                    ></ArrowCircleLeftSharpIcon>
                </Button>
            </div>

            <div className='arrowRight1'>
                <Button onClick={Right}>
                    <ArrowCircleRightSharpIcon
                        fontSize='large'
                        color="disabled"></ArrowCircleRightSharpIcon>
                </Button>
            </div>
            <h2> Popular Deals</h2>
            <div ref={ref} className='brandShow'>
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