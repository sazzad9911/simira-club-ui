import React from 'react';
import SearchHotelCart from '../Cart/SearchHotelCart';
import FilterCart from '../Cart/FilterCart';
import '../Screens/css/SearchHotel.css'
const SearchHotel = (props) => {
    return (
        <div>
            <div style={{
                display: 'flex',
            }}>
                <div style={{
                    width: '300px',
                    height: '700px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FilterCart />
                </div>
                <div>
                    <div className='ScarchBox1'>
                        <div className='ScarchInputBox1'>
                            <input className='ScarchInput1' type='text'
                                placeholder='Search by hotel,deal,restaurant' />
                            <select className='ScarchSelect1'>
                                <option value="opel">Hotel</option>
                                <option value="audi">Deals</option>
                            </select>
                            <button className='ScarchButton1'>Search</button>

                        </div>
                    </div>
                    
                    <SearchHotelCart />
                    <SearchHotelCart />
                </div>
            </div>
        </div>
    );
};

export default SearchHotel;
