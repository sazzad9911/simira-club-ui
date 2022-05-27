import React from 'react';
import '../Cart/css/FilterTowCart.css'

const FilterTowCart = (props) => {
    return (
        <div className='FilterCartBody'> 
            <div style={{ display: 'flex' }}>
                <h2>Filters</h2>
                <button style={{
                    fontSize: '18px'
                }} className='FilterCartButton'>Clear All</button>
            </div>
            <div className='FilterCartDivLine' />
            <p style={{ marginLeft: '15px', marginTop: '30px' }}>Sort by</p>
            <div style={{ display: 'grid', marginTop: '20px' }}>
                <button className='FilterCartButtonPopu'>Popularity</button>
                <button className='FilterCartButtonRat'>Discounts</button>
            </div>
            <div style={{ marginTop: '30px' }} />
            <div className='FilterCartDivLine' />
            <p style={{ marginLeft: '15px', marginTop: '30px' }}>Bands</p>
            <div style={{ display: 'grid', marginTop: '20px' }}>
                <button className='FilterCartButtonPopu'>Ovenstory</button>
                <button className='FilterCartButtonRat'>Dominoes</button>
                <button className='FilterCartButtonRat'>SmokinJoe's</button>
            </div>
            <div style={{ marginTop: '30px' }} />
            
        </div>
    );
};

export default FilterTowCart;
