import React from 'react';
import Link from '@mui/material/Link';
import FilterCart from '../Cart/FilterCart';
import '../Screens/css/SearchDeal.css';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
import Dealoffercart from '../Cart/DealOfferCart';
const SearchDeal = (props) => {
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
                        backgroundColor: '#D8D8D8',
                        height: '94%',
                        width: '1.5px',
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
                        <div>
                            <Dealoffercart />
                            <Dealoffercart />
                            <Dealoffercart />
                            <Dealoffercart />
                            <Dealoffercart />
                            <Dealoffercart />
                        </div>

                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
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
            <OptionLand />
        </div>
    );
};

export default SearchDeal;
