import React, { useRef, useState } from 'react';
import './css/Search.css'
import Img from "./Image/Search.PNG"
import Link from '@mui/material/Link';
import TopBrands from "../Components/TopBrands"
import PopularHotels from "../Components/PopularHotels"
import PopularDeal from "../Components/PopularDeal"
import OptionLand from './../Components/OptionLand';
import AppOverView from './../Cart/AppOverView'




function Search(props) {
    const [Select, setSelect] = useState('Hotel');


    return (




        <div>
            <div className='ScarchBody'>
                <img src={Img} className='ScarchImg' />

                <div className='ScarchImgDiv'>
                    <div className='ScarchImgDivText'>
                        <p className='ScarchImgText'>Over 45 hotel & 100+ deals across 10 cities</p>
                    </div>
                    <div className='ScarchDiv'>
                        <input className='ScarchInput' type='text'
                            placeholder='Search by hotel,deal,restaurant' />
                        <div className='ScarchScDiv'>
                            <select onChange={setSelect} className='ScarchSelect'>
                                <option value="Hotel">Hotel</option>
                                <option value="Deal">Deals</option>
                            </select>
                            <Link href={Select == 'Hotel' ? '/SearchHotel' : '#'} underline='none' color='inherit'>
                                <button className='ScarchButton'><p className='ScarchButtonP'>Search</p></button>
                            </Link>
                        </div>
                    </div>
                    {
                        /*
                        <div className='ScarchBox'>
                            <div className='ScarchInputBox'>
                                <input className='ScarchInput' type='text'
                                    placeholder='Search by hotel,deal,restaurant' />
                                <select onChange={setSelect}  className='ScarchSelect'>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Deal">Deals</option>
                                </select>
                                <Link href={Select=='Hotel'?'/SearchHotel':'#'} underline='none' color='inherit'>
                                    <button className='ScarchButton'>Search</button>
                                </Link>
                            </div>
                        </div>
                         */
                    }
                </div>
            </div>
            <div style={{ height: 50, width: '100%' }}></div>
            <TopBrands />
            <div style={{ height: 50, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ height: 20, width: '100%' }}></div>
            <AppOverView />
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
        </div>
    );
}

export default Search;