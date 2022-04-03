import React from 'react';
import Link from '@mui/material/Link';
import ShowCaseDealCart from '../Cart/ShowCaseDealCart';
import TopBrands from '../Components/TopBrands';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';

const ShowCaseDeal = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
            }}>
                <ShowCaseDealCart />
            </div>
            <TopBrands />
            <AppOverView />
            <OptionLand />
        </div>
    );
};

export default ShowCaseDeal; 