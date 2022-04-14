import React,{ createRef} from 'react';
import HotelCart from '../Cart/HotelCart';
import '../Components/css/popularhotels.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import Loader from '../Content/Loader';

const PopularHotels = () => {
    const hotels= useSelector(state => state.Hotels)
    const ref=createRef()

    const Left=()=>{
        ref.current.scrollLeft-=60;
    }
    const Right=()=>{
        ref.current.scrollLeft+=60;
    }
    return (
        <div className='popularhotelsBody'>
        <div className='arrowLeft11'>
                <Button onClick={Left}>
                    <ArrowBackIosNewIcon color="disabled" fontSize='large'
                    ></ArrowBackIosNewIcon>
                </Button>
            </div>
 
            <div className='arrowRight11'>
                <Button onClick={Right}>
                    <ArrowForwardIosIcon
                        fontSize='large'
                        color="disabled"></ArrowForwardIosIcon>
                </Button>
            </div> 
            <div className='popularhotelsText'>
                <h2>Popular Hotels</h2>
            </div>
            <div ref={ref} className='popularhotelsCart'>
            
            {
                hotels?(
                    hotels.map((d,i)=> (
                        <HotelCart data={d} key={i}/>
                    ))
                ):(
                    <Loader/>
                )
            }
            </div>

        </div>
    );
};

export default PopularHotels;