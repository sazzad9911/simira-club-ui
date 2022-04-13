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
                        <p className='headline'>Oven Story</p>
                        <p className='text2'>18 Offers Available</p>
                        <Button variant="text" >
                            <div className='buttonView'>
                                <p>VISIT STORE</p>
                            </div>
                        </Button>
                    </div>
                </div> 
                <div className='hr6'></div>
                <div>
                <Dealoffercart />
                <Dealoffercart />
                <Dealoffercart />
                </div>
                <div className='pageSlide'>
                    <Button variant="text" >1</Button>
                    <Button variant="text" >2</Button>
                    <Button variant="text" >3</Button>
                    <Button variant="text" >4</Button>
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
