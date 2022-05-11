import React, { useRef, useState } from 'react';
import './css/Search.css'
import Img from "./Image/Search.PNG"
import Link from '@mui/material/Link';
import TopBrands from "../Components/TopBrands"
import PopularHotels from "../Components/PopularHotels"
import PopularDeal from "../Components/PopularDeal"

function Search(props) {
    const [Select, setSelect] = useState('Hotel');

    return (
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
                            <button className='ScarchButton'>Search</button>
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
    );
}

export default Search;