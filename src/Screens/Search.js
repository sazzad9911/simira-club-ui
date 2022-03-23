import React from 'react';
import './css/Search.css'

function Search(props) {
    return (
        <div className='ScarchBody'>
            <img className='ScarchImg' src={'https://thumbs.dreamstime.com/b/pretty-pink-background-soft-burgundy-mauve-rose-colors-vintage-texture-sweet-valentines-day-girls-baby-shower-104265928.jpg'} />
            <div className='ScarchImgDiv'>
                <h1>Over 45 hotel & 100+ deals across 10 cities</h1>
                <div className='MyProfileBox'>
                    <div className='MyProfileInputBox'>
                        <select className='MyProfileSelect'>
                            <option value="opel">Hotel</option>
                            <option value="audi">Deals</option>
                        </select>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;