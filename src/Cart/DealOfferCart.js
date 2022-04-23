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
            
            <div className='cartBottom6'>
                <div className='cartButtomLeft6'>
                   {/* <img className="img6" src={props.data.image?props.data.image:'https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ho3ts2gxb5sqf9yxgfks'} alt="img1" />*/}
                </div>
                <div className='cartButtomRight6'>
                    <div className='headlineLeft'>
                       {/* <div>
                            <p className='headline6'>{props.data.name?props.data.name:'No name found!'}</p>
                        </div>*/}
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
                        <AcUnitIcon style={{
                            marginLeft:20
                        }} className='DealCartIcon' fontSize='small' />
                        <p className='bottomText'>Free for Members</p>
                    </div>
                </div>
            </div>
            <div className='hr6'></div>
        </div>
    );
};

export default Dealoffercart;
