import React from 'react';
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



const Home = () => {
    return (
        <div style={{
            overflowY: 'scroll',
            overflowX: 'hidden',
            width: '100vw',
            heigh: '100vh'
        }}>
            <Header />
            <SliderHead />
            <div style={{
                width: '100%',
                heigh: '150px',
                overflowX: 'scroll'
            }}>
                <div className='IconButtonarrowLeft'>
                    <Button >
                        <ArrowCircleLeftSharpIcon color="disabled" fontSize='large'
                        ></ArrowCircleLeftSharpIcon>
                    </Button>
                </div>

                <div className='IconButtonarrowRight'>
                    <Button>
                        <ArrowCircleRightSharpIcon
                            fontSize='large'
                            color="disabled"></ArrowCircleRightSharpIcon>
                    </Button>
                </div>
                <div>

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
            <TopBrands />
            <PopularDeal />
            <BookShow />
            <PopularHotels />
            <AppOverView />
            <OptionLand />
            <Footer />
        </div>
    );
};

export default Home;
