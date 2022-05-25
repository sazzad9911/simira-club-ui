import React from 'react';
import '../Cart/css/FilterCart.css'
import StarIcon from '@mui/icons-material/Star';

const FilterCart = (props) => {
    return (
        <div> 
            <div style={{ display: 'flex',justifyContent:'space-between' }}>
                <h2>Filters</h2>
                <button className='FilterCartButton'>Clear All</button>
            </div>
            <div className='FilterCartDivLine' />
            <p style={{ marginLeft: '15px', marginTop: '30px' }}>Sort by</p>
            <div style={{ display: 'grid', marginTop: '20px' }}>
                <button className='FilterCartButtonPopu'>Popularity</button>
                <button className='FilterCartButtonRat'>Ratings</button>
                <button className='FilterCartButtonAme'>Amenities</button>
            </div>
            <div style={{ marginTop: '30px' }} />
            <div className='FilterCartDivLine' />
            <p style={{ marginTop: '30px', marginLeft: '15px' }}>Ratings</p>
            <div style={{
                display: 'flex',
                marginLeft: '15px',
                marginTop: '10px',
            }}>
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#D7FB73' }} />
                <StarIcon style={{ color: '#D7FB73' }} />
                <StarIcon style={{ color: '#D7FB73' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#FBDD73' }} />
                <StarIcon style={{ color: '#FBDD73' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#E47768' }} />
            </div>
            <div style={{ marginTop: '30px' }} />
            <div className='FilterCartDivLine' />
            <p style={{ marginTop: '30px', marginLeft: '15px' }}>Categories</p>
            <div style={{ display: 'flex' }}>
                <button className='FilterCartButtonDel'>Deluxe</button>
                <button className='FilterCartButtonVil'>Villas</button>
            </div>
            <button className='FilterCartButtonFarm'>Farm House</button>
        </div>
    );
};

export default FilterCart;
