import React,{ createRef} from 'react';
import HotelCart from '../Cart/HotelCart';
import '../Components/css/popularhotels.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';

const PopularHotels = () => {
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
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://www.berjayahotel.com/sites/default/files/BMH%20PremierRoom%20800x800.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://www.berjayahotel.com/sites/default/files/BMH%20PremierRoom%20800x800.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            </div>

        </div>
    );
};

export default PopularHotels;