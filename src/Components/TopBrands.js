import React, { createRef } from 'react';
import '../Components/css/topbrands.css';
import Brands from '../Content/Brands';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';

const TopBrands = (props) => {
    const ref = createRef()

    const Left = () => {
        ref.current.scrollLeft -= 60;
    }
    const Right = () => {
        ref.current.scrollLeft += 60;
    }
    return (
        <div className='box'>
            <div className='arrowLeft1'>
                <Button onClick={Left}>
                    <ArrowBackIosNewIcon color="disabled" fontSize='medium'
                    ></ArrowBackIosNewIcon>
                </Button>
            </div>

            <div className='arrowRight1'>
                <Button onClick={Right}>
                    <ArrowForwardIosIcon
                        fontSize='medium'
                        color="disabled"></ArrowForwardIosIcon>
                </Button> 
            </div>
            <h2>Top brands for you</h2>
            <div ref={ref} className='brandShow'>
                <Brands img='https://img.freepik.com/free-vector/letter-s-brand-logo-concept-golden-style_1017-23640.jpg'></Brands>
                <Brands img='https://thumbs.dreamstime.com/b/s-letter-logo-luxury-design-badge-template-brand-unique-texture-letter-s-luxury-logo-204534056.jpg'></Brands>
                <Brands img='https://images-platform.99static.com//7mE4E9xAR_l6DPwFO4Ssv30f7k0=/292x348:1212x1266/fit-in/590x590/99designs-contests-attachments/75/75211/attachment_75211913'></Brands>
                <Brands img='https://images-platform.99static.com//7mE4E9xAR_l6DPwFO4Ssv30f7k0=/292x348:1212x1266/fit-in/590x590/99designs-contests-attachments/75/75211/attachment_75211913'></Brands>
                <Brands img='https://thumbs.dreamstime.com/b/s-letter-logo-luxury-design-badge-template-brand-unique-texture-letter-s-luxury-logo-204534056.jpg'></Brands>
                <Brands img='https://img.freepik.com/free-vector/letter-s-brand-logo-concept-golden-style_1017-23640.jpg'></Brands>
                <Brands img='https://img.freepik.com/free-vector/letter-s-brand-logo-concept-golden-style_1017-23640.jpg'></Brands>
                <Brands img='https://img.freepik.com/free-vector/letter-s-brand-logo-concept-golden-style_1017-23640.jpg'></Brands>
                <Brands img='https://img.freepik.com/free-vector/letter-s-brand-logo-concept-golden-style_1017-23640.jpg'></Brands>
                <Brands img='https://img.freepik.com/free-vector/letter-s-brand-logo-concept-golden-style_1017-23640.jpg'></Brands>
            </div>
        </div>
    );
};

export default TopBrands;