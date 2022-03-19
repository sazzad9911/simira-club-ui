import React from 'react';
import DealCart from '../Cart/DealCart';
import '../Components/css/populardeal.css';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Button from '@mui/material/Button';
const PopularDeal = () => {
    return (
        <div className='box1'>

            <view className='arrowLeft'>
                <Button >
                    <ArrowCircleLeftSharpIcon color="disabled" fontSize='large'
                    ></ArrowCircleLeftSharpIcon>
                </Button>
            </view>

            <view className='arrowRight'>
                <Button>
                    <ArrowCircleRightSharpIcon
                        fontSize='large'
                        color="disabled"></ArrowCircleRightSharpIcon>
                </Button>
            </view>
            <h2> Popular Deals</h2>
            <div className='brandShow1'>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'
                    text='Flat 35 % OFF On All Orders'>

                </DealCart>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://s3-alpha-sig.figma.com/img/fcaa/a71f/9538ee5c855942f0520465a27aa76c72?Expires=1648425600&Signature=YaX9wnhPFSBgvyW0zBEQaBry3h6SBOjRNT~uh6KGwVNJ8TzWpRTfc3qIYhrEI~r6TkGPyaqsqrNJ2nzm8hgFjFX1FCywRHYMFHjJG67udu~o4rw1FlzAEhQXDdDgCLgVJDjQXpx4NrYLbZisoLx~HgcVTwvi~icq4AYR8tHInYIlmAAmOKnCrjsRIDVe5akUy~n7Yj06qHRxWYkt8ShnJ~zCtR-bJa5CoCZu0rCpzYoUsj87Nccw9Efth5xSefi8-R4w2xEcH3Ev9apejz5f01JxrjkidN6n9vRcXz1F9Tu~KjbxPB9CBQQEofTdV3GHQzY6wBFu4EaC3bBHz3u1XQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                    text='Any 2 Or More Pizza For ₹199*'>

                </DealCart>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://s3-alpha-sig.figma.com/img/023a/85d8/cdbfe83500e9b2dcc2f586c4a068ba21?Expires=1648425600&Signature=fBZvqHknriaolfd6h6jWCTrhsl6~S2A4dtdHOIyynmF8-qIVRJQHTnjGCeuOapQQ0K1pDIzANaiS1CPpncnhr5n7j8NNJe7zRR6fVpi19ikrRwAyEojHPaHg2ru47lwQ0MjrwiD0QJtyHwiirVmTUuHv~IYRmCBA9eugC-DP7jQY3fkKk6zB2QDtZqfRmgb-aA1vA2EzyojpXMOhTkrfOCh1MdvvKjAwIWQkLzkykLmdwPCZ6p5QNoMQTtuiPmusKfcmR8UqXjZBx3mlfjGk2bafiG-02SIFgHYIEx0L6kDiy2KI~DOEUEw2-92hui6G38jdq7EoblHV75E3LTUc7w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                    text='Get 2 Wraps @99 each'></DealCart>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'
                    text='Flat 35 % OFF On All Orders'></DealCart>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'
                    text='Flat 35 % OFF On All Orders'></DealCart>
                <DealCart img1='https://happysale.in/hs/img/w/up/ovenstorycouponshappysalejpg1626767947245.jpg'
                    img2='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'
                    text='Flat 35 % OFF On All Orders'></DealCart>
            </div>
        </div>
    );
};

export default PopularDeal;