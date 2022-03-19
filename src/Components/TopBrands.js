import React from 'react';
import '../Components/css/topbrands.css';
import Brands from '../Content/Brands';

const TopBrands = () => {
    return (
        <div className='box'>
            <p className='text'>Top brands for you</p>
            <div className='brandShow'>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
                <Brands></Brands>
            </div>
        </div>
    );
};

export default TopBrands;