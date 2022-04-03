import React from 'react';
import '../Cart/css/FilterCart.css'

const FilterCart = (props) => {
    return (
        <div className='FilterCartBody'>
            <div style={{display:'flex'}}>
                <h2>Filters</h2>
                <button className='FilterCartButton'>Clear All</button>
            </div>
        </div>
    );
};

export default FilterCart;
