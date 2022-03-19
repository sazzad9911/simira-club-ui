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


const Home = () => {
    return (
        <div style={{
            overflowY:'scroll'
        }}>
            <Header/>
            <Slider/>
            <div>
                <IconButton/>
            </div>
            <TopBrands/>
            <BookShow/>
            <PopularHotels/>
            <AppOverView/>
            <OptionLand/>
            <Footer/>
        </div>
    );
};

export default Home;