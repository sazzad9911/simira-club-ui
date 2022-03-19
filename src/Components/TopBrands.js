import React from 'react';
import '../Components/css/topbrands.css';
import Brands from '../Content/Brands';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Button from '@mui/material/Button';

const TopBrands = (props) => {
    return (
        <div className='box'>
            <view className='arrowLeft1'>
                <Button >
                    <ArrowCircleLeftSharpIcon color="disabled" fontSize='large'
                    ></ArrowCircleLeftSharpIcon>
                </Button>
            </view>

            <view className='arrowRight1'>
                <Button>
                    <ArrowCircleRightSharpIcon
                        fontSize='large'
                        color="disabled"></ArrowCircleRightSharpIcon>
                </Button>
            </view>
            <h2 >Top brands for you</h2>
            <div className='brandShow'>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
                <Brands img='https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'></Brands>
            </div>
        </div>
    );
};

export default TopBrands;