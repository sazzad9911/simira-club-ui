import React, { createRef, useState } from 'react';
import './../Content/css/IconButton.css'
import Slider from './../Cart/Slider';
import IconButton from './../Content/IconButton';
import TopBrands from './../Components/TopBrands';
import BookShow from './../Cart/BookShow';
import PopularHotels from './../Components/PopularHotels';
import AppOverView from './../Cart/AppOverView';
import OptionLand from './../Components/OptionLand';
import Games from './../File/icon/Games.png';
import Hotels from './../File/icon/Hotels.png';
import Restaurant from './../File/icon/Restaurant.png';
import Shopping from './../File/icon/Shopping.png';
import Villas from './../File/icon/Villas.png';
import Health from './../File/icon/Health.png';
import Services from './../File/icon/Services.png';
import Camping from './../File/icon/Camping.png';
import Spa_Salons from './../File/icon/Spa _ Salons.png';
import Travel from './../File/icon/Travel.png';
import PopularDeal from './../Components/PopularDeal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import './css/Home.css'


const Home = () => {
    const ref = createRef()
    const Left = () => {
        ref.current.scrollLeft -= 60
    }
    const Right = () => {
        ref.current.scrollLeft += 60
    }
    
    return (
        <div className='Home'>
            <Slider />
            <div style={{ height: 20, width: '100%' }}></div>
            <div className='HomeContainer'>
                <div className='IconButtonarrowLeft'>
                    <Button onClick={Left}>
                        <ArrowBackIosNewIcon color="disabled" fontSize='medium'
                        ></ArrowBackIosNewIcon>
                    </Button>
                </div>
                <div className='IconButtonarrowRight'>
                    <Button onClick={Right}>
                        <ArrowForwardIosIcon
                            fontSize='medium'
                            color="disabled"></ArrowForwardIosIcon>
                    </Button>
                </div>
                <div ref={ref} className='HomeIconContainer'>
                    <IconButton link='/hotel' img={Hotels} title='Hotels' />
                    <IconButton link='/restaurant' img={Restaurant} title='Restaurant' />
                    <IconButton link='/games' img={Games} title='Games' />
                    <IconButton link='/shopping' img={Shopping} title='Shopping' />
                    <IconButton link='/villas' img={Villas} title='Villas' />
                    <IconButton link='/camping' img={Camping} title='Camping' />
                    <IconButton link='/salon' img={Spa_Salons} title='Spa & Salons' />
                    <IconButton link='/travel' img={Travel} title='Travel' />
                    <IconButton link='/health' img={Health} title='Health' />
                    <IconButton link='/services' img={Services} title='Services' />
                </div>
            </div>
            <div className='Home-topBrand'>
                <TopBrands headText='Top Brands For You' /> 
            </div>
            <div style={{ height: 20, width: '100%' }}></div>
            <PopularDeal />
            <div style={{ height: 20, width: '100%' }}></div>
            <BookShow />
            <div style={{ height: 50, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ height: 20, width: '100%' }}></div>
            <AppOverView />
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
           
            {
                /*
 <Header />
            
           

                
                
            
            
            <div className='Home-topBrand'>
                
            </div>
            < div style={{ height: 20, width: '100%' }}></div>
            

            <div style={{ height: 20, width: '100%' }}></div>
            
            <div style={{ height: 20, width: '100%' }}></div>
            
            <div style={{ height: 20, width: '100%' }}></div>
            
            <Footer />
           
            
            */
            }
        </div>
    );
};

export default Home;
