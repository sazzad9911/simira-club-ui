import React, { createRef, useState } from 'react';
import Header from './../Components/Header';
import './../Content/css/IconButton.css'
import SliderHead from './../Cart/Slider';
import IconButton from './../Content/IconButton';
import TopBrands from './../Components/TopBrands';
import BookShow from './../Cart/BookShow';
import PopularHotels from './../Components/PopularHotels';
import AppOverView from './../Cart/AppOverView';
import OptionLand from './../Components/OptionLand';
import Footer from './../Components/Footer';
import Games from './../File/icon/Games.png';
import Hotels from './../File/icon/Hotels.png';
import Restaurant from './../File/icon/Restaurant.png';
import Shopping from './../File/icon/Shopping.png';
import Villas from './../File/icon/Villas.png';
import Camping from './../File/icon/Camping.png';
import Spa_Salons from './../File/icon/Spa _ Salons.png';
import Travel from './../File/icon/Travel.png';
import PopularDeal from './../Components/PopularDeal';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
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
        <div className='HomeContainer'>
            <Header />
            <SliderHead />
            <div className='HomeContainer'>
                <div className='IconButtonarrowLeft'>
                    <Button onClick={Left}>
                        <ArrowCircleLeftSharpIcon color="disabled" fontSize='large'
                        ></ArrowCircleLeftSharpIcon>
                    </Button>
                </div>

                <div className='IconButtonarrowRight'>
                    <Button onClick={Right}>
                        <ArrowCircleRightSharpIcon
                            fontSize='large'
                            color="disabled"></ArrowCircleRightSharpIcon>
                    </Button>
                </div>
                <div ref={ref} className='HomeIconContainer'>
                    <IconButton img={Hotels} title='Hotels' />
                    <IconButton img={Restaurant} title='Restaurant' />
                    <IconButton img={Games} title='Games' />
                    <IconButton img={Shopping} title='Shopping' />
                    <IconButton img={Villas} title='Villas' />
                    <IconButton img={Camping} title='Camping' />
                    <IconButton img={Spa_Salons} title='Spa & Salons' />
                    <IconButton img={Travel} title='Travel' />
                </div>

            </div>
            <div style={{ height: 20, width: '100%' }}></div>
            <TopBrands />
            <div style={{ height: 20, width: '100%' }}></div>
            <PopularDeal />
            <div style={{ height: 20, width: '100%' }}></div>
            <BookShow />
            <div style={{ height: 20, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ height: 20, width: '100%' }}></div>
            <AppOverView />
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
            <Footer />
            {
                /*

                
            
            
               
            <BookShow />
            
           
            
            */
            }
        </div>
    );
};

export default Home;
