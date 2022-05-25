import React, { useRef, useState } from 'react';
import './css/Search.css'
import Img from "./Image/Search.PNG"
import TopBrands from "../Components/TopBrands"
import PopularHotels from "../Components/PopularHotels"
import PopularDeal from "../Components/PopularDeal"
import OptionLand from './../Components/OptionLand';
import AppOverView from './../Cart/AppOverView'
import {postData, url} from '../action'
import { Link } from 'react-router-dom';



function Search(props) {
    const [Select, setSelect] = useState('SearchHotel');
    const [SearchData,setSearchData] = useState(null)

    
    return (
        <div>
            <div className='ScarchBody'>
                <img src={Img} className='ScarchImg' />
 
                <div className='ScarchImgDiv'>
                    <div className='ScarchImgDivText'>
                        <p className='ScarchImgText'>Over 45 hotel & 100+ deals across 10 cities</p>
                    </div>
                    <div className='ScarchDiv'>
                        <input onChange={(e) =>setSearchData(e.target.value)} className='ScarchInput' type='text'
                            placeholder='Search by hotel,deal,restaurant' />
                        <div className='ScarchScDiv'>
                            <select value={Select} onChange={(e) =>setSelect(e.target.value)} className='ScarchSelect'>
                                <option value="SearchHotel">Hotel</option>
                                <option value="SearchDeal">Deals</option>
                            </select>
                            <Link style={{textDecoration: 'none'}} to={'/'+Select+'/'+SearchData} className='ScarchButton'>Search</Link>
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
            <div className='Home-topBrand'>
                <TopBrands headText='Top Brands For You' />
            </div>
            <div style={{ height: 50, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ marginTop:'380px' }}></div>
            <AppOverView />
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
        </div>
    );
}

export default Search;