import React from 'react';
import Link from '@mui/material/Link';
import ShowCaseDealCart from '../Cart/ShowCaseDealCart';

const ShowCaseDeal = () => {
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'20px'
        }}>
            <ShowCaseDealCart/>
        </div>
    );
};

export default ShowCaseDeal; 