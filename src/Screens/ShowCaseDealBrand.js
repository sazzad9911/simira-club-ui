import React from 'react';
import '../Screens/css/showcasedealbrand.css'
import Button from '@mui/material/Button';

const ShowCaseDealBrand = (props) => {
    return (
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
            <div className='hr'></div>
        </div>
    );
};

export default ShowCaseDealBrand;
