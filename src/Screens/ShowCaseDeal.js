import React from 'react';
import Link from '@mui/material/Link';
import ShowCaseDealCart from '../Cart/ShowCaseDealCart';
import TopBrands from '../Components/TopBrands';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
import {useSelector} from 'react-redux'


const ShowCaseDeal = () => {
    const brands=useSelector(state => state.Brands)

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
               
            }}>
                <ShowCaseDealCart />
            </div>
            <TopBrands headText='Top Brands For You' />
            <div style={{
                marginTop: '50px',
                
            }}>
                <AppOverView />
            </div>
            <div style={{marginTop: '50px'}}>
            <OptionLand />
            </div>
        </div>
    );
};

export default ShowCaseDeal; 