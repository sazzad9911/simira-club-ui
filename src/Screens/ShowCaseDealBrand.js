import React from 'react';
import '../Screens/css/showcasedealbrand.css'
import Button from '@mui/material/Button';
import Dealoffercart from '../Cart/DealOfferCart';
import TopBrands from '../Components/TopBrands';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';

const ShowCaseDealBrand = (props) => {
    return (
        <div>
            <div className='showcasebody'>
                <div className='cartBottom4'>
                    <div className='cartButtomLeft4'>
                        <img className="img4" src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/izvc5aawbix9cyhleh8s" alt="img1" />
                    </div>
                    <div className='cartButtomRight4'>
                        <div style={{
                            marginTop:'7px'
                        }}>
                            <p className='headline'>Oven Story</p>
                            <p className='text2'>18 Offers Available</p>
                            <Button variant="text" >
                                <div className='buttonView'>
                                    <p style={{
                                        color:'#fc444b'
                                    }}> VISIT STORE</p>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='hr6'></div>
                <div>
                    <Dealoffercart />
                    <Dealoffercart />
                    <Dealoffercart />
                </div>
                <div className='pageSlide'>
                    <Button variant="text" ><p className='text'>1</p></Button>
                    <Button variant="text" ><p className='text'>2</p></Button>
                    <Button variant="text" ><p className='text'>3</p></Button>
                    <Button variant="text" ><p className='text'>4</p></Button>
                </div>
                <div className='hr'></div>
                <div className='Home-topBrand1'>
                    <TopBrands headText='Try other top brands' />
                </div>
            </div>
            <div>
                <AppOverView />
            </div>
            <div>
                <OptionLand />
            </div>
        </div>
    );
};

export default ShowCaseDealBrand;
