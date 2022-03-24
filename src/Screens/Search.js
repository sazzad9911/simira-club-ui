import React from 'react';
import './css/Search.css'
import Img from "./css/Search.PNG"
import TopBrands from "../Components/TopBrands"
import PopularHotels from "../Components/PopularHotels"
import PopularDeal from "../Components/PopularDeal"

function Search(props) {
    return (
        <div className='ScarchBody'>
            <img src={Img} className='ScarchImg'/>

            <div className='ScarchImgDiv'>
                <div className='ScarchImgDivText'>
                    <h1 className='ScarchImgText'>Over 45 hotel & 100+ deals across 10 cities</h1>
                </div>
                <div className='ScarchBox'>
                    <div className='ScarchInputBox'>
                        <input className='ScarchInput' type='text'
                            placeholder='Search by hotel,deal,restaurant' />
                        <select className='ScarchSelect'>
                            <option value="opel">Hotel</option>
                            <option value="audi">Deals</option>
                        </select>
                        <button className='ScarchButton'>Search</button>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Search;