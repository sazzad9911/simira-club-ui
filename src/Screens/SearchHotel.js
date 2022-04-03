import React from 'react';
import Link from '@mui/material/Link';
import SearchHotelCart from '../Cart/SearchHotelCart';
import FilterCart from '../Cart/FilterCart';
import '../Screens/css/SearchHotel.css';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
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
                <div style={{
                    display: 'flex'
                }}>
                    <div style={{
                        border: '1px solid #D8D8D8',
                        height: '93%',
                        width: '0px',
                        margin: '30px'
                    }}>

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
                        <SearchHotelCart />
                        <SearchHotelCart />
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Link href="#" underline="none" color="inherit">
                    <p>1</p>
                </Link>
                <Link href="#" underline="none" color="inherit">
                    <p>2</p>
                </Link>
                <Link href="#" underline="none" color="inherit">
                    <p>3</p>
                </Link>
                <Link href="#" underline="none" color="inherit">
                    <p>4</p>
                </Link>
            </div>
            <AppOverView />
            <OptionLand/>
        </div>
    );
};

export default SearchHotel;
