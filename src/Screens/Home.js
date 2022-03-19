import React from 'react';
import Header from './../Components/Header';
import Slider from './../Cart/Slider';
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


const Home = () => {
    return (
        <div style={{
            overflowY:'scroll',
            overflowX:'hidden',
            width:'100vw',
            heigh:'100vh'
        }}>
            <Header/>
            <Slider/>
            <div>
                <IconButton img={Hotels} title='Hotels'/>
                <IconButton img={Restaurant} title='Restaurant'/>
                <IconButton img={Games} title='Games'/>
                <IconButton img={Shopping} title='Shopping'/>
                <IconButton img={Villas} title='Villas'/>
                <IconButton img={Camping} title='Camping'/>
                <IconButton img={Spa_Salons} title='Spa & Salons'/>
                <IconButton img={Travel} title='Travel'/>
            </div>
            <TopBrands/>
            <PopularDeal/>
            <BookShow/>
            <PopularHotels/>
            <AppOverView/>
            <OptionLand/>
            <Footer/>
        </div>
    );
};

export default Home;
