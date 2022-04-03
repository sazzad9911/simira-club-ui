import React from 'react';
import '../Cart/css/FilterCart.css'
import StarIcon from '@mui/icons-material/Star';

const FilterCart = (props) => {
    return (
        <div className='FilterCartBody'>
            <div style={{ display: 'flex' }}>
                <h2>Filters</h2>
                <button className='FilterCartButton'>Clear All</button>
            </div>
            <div className='FilterCartDivLine' />
            <p>Sort by</p>
            <div style={{ display: 'grid' }}>
                <button>Popularity</button>
                <button>Ratings</button>
                <button>Amenities</button>
            </div>
            <div />
            <div className='FilterCartDivLine' />
            <p>Ratings</p>
            <div style={{ display: 'flex' }}>
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <StarIcon style={{ color: '#D7FB73' }} />
                <StarIcon style={{ color: '#D7FB73' }} />
                <StarIcon style={{ color: '#D7FB73' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <StarIcon style={{ color: '#FBDD73' }} />
                <StarIcon style={{ color: '#FBDD73' }} />
            </div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <StarIcon style={{ color: '#E47768' }} />
            </div>
        </div>
    );
};

export default FilterCart;
