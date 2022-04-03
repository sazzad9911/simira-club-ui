import React from 'react';
import SearchHotelCart from '../Cart/SearchHotelCart';
import FilterCart from '../Cart/FilterCart';

const SearchHotel = (props) => {
    return (
        <div>
            <div style={{
                display:'flex',
            }}>
                <div style={{
                    width:'300px',
                    height:'700px',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                   <FilterCart/>
                </div>

                <SearchHotelCart />
            </div>
        </div>
    );
};

export default SearchHotel;
