import React from 'react';
import '../Cart/css/DealOfferCart.css'
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';

const Dealoffercart = (props) => {
    return (
        <div >
            <div className='hr6'></div>
            <div className='cartBottom6'>
                <div className='cartButtomLeft6'>
                    <img className="img6" src="https://etimg.etb2bimg.com/thumb/msid-83333101,imgsize-289635,width-1200,height-900,overlay-etbrandequity/ovenstory-pizza-s-new-campaign-highlights-real-issues-of-mainstream-pizza.jpg" alt="img1" />
                </div>
                <div className='cartButtomRight6'>
                    <div className='headlineLeft'>
                        <div>
                            <p className='headline6'>Flat 35% OFF On All Order</p>
                        </div>
                        <div className='headlineReft'>
                            <Button>
                                <FavoriteBorderIcon sx={{ color: pink[500] }} />
                            </Button>
                        </div>
                    </div>
                    <p className='text2'>Ovenstory</p>
                    <div className='buttonView6'>
                        <Link href='/ShowCaseDeal' color='inherit' underline='none' >
                            <div className='button6'>
                                <p>VIEW</p>
                            </div>
                        </Link>
                        <AcUnitIcon className='DealCartIcon' fontSize='small' />
                        <p className='bottomText'>Free for Members</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dealoffercart;
