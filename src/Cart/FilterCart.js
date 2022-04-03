import React from 'react';
import '../Cart/css/FilterCart.css'

const FilterCart = (props) => {
    return (
        <div className='FilterCartBody'>
            <div style={{ display: 'flex' }}>
                <h2>Filters</h2>
                <button className='FilterCartButton'>Clear All</button>
            </div>
            <div className='FilterCartDivLine' />
            <p>Sort by</p>
            <div style={{display:'grid'}}>
                <button>Popularity</button>
                <button>Ratings</button>
                <button>Amenities</button>
            </div>
            <div />
            <div className='FilterCartDivLine' />
            <p>Ratings</p>
            <div style={{ display: 'flex' }}>

            </div>
        </div>
    );
};

export default FilterCart;
