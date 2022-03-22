import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../Components/css/optionland.css'
import Link from '@mui/material/Link';


const OptionLand = (props) => {
    return (
        <div className='optionLandBody'>
            <h2 style={{
                marginTop: 30,
                marginBottom: 30,
                fontSize: 25,
            }}>Loads of options for you to explore here</h2>
            <PopularDeals></PopularDeals>
            <PopularHotels></PopularHotels>
            <TopBrands></TopBrands>
            <CitiesWeOffer></CitiesWeOffer>
        </div>
    );
};

export default OptionLand;

const PopularDeals = (props) => {
    return (
        <div>
            <h2 >Popular Deals</h2>
            <div className='popularDealsView'>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>

            </div>

        </div>
    );
};
const PopularDealsName = (props) => {
    return (
        <div className='PopularDealsNameCart'>
            <Link href="#" color="inherit" underline="none">
                <h4>{props.PDT}</h4>
            </Link>
            <h3 className='dot'>.</h3>
        </div>
    );
};
const PopularHotels = (props) => {
    return (
        <div>
            <h2 >Popular Hotels</h2>
            <div className='popularDealsView1'>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>
                <PopularHotelsName PHT='Hotels near me'></PopularHotelsName>

            </div>

        </div>
    );
};
const PopularHotelsName = (props) => {
    return (
        <div className='PopularDealsNameCart1'>
            <Link href="#" color="inherit" underline="none">
                <h4>{props.PHT}</h4>
            </Link>
            <h3 className='dot1'>.</h3>
        </div>
    );
};

const TopBrands = (props) => {
    return ( 
        <div>
            <h2 >Top Brands With Us</h2>
            <div className='popularDealsView'>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>
                <TopBrandsName TBWU='Oven Story'></TopBrandsName>

            </div>

        </div>
    );
};
const TopBrandsName = (props) => {
    return (
        <div className='PopularDealsNameCart2'>
            <Link className='link'
                href="#" color="inherit" underline="none">
                <h4>{props.TBWU}</h4>
            </Link>
        </div>
    );
};





const CitiesWeOffer = (props) => {
    return (
        <div>
            <h2 >Cities We Offer</h2>
            <div className='popularDealsView'>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
                <CitiesWeOfferName CWO='Alibaug'></CitiesWeOfferName>
           
            </div>

        </div>
    );
};
const CitiesWeOfferName = (props) => {
    return (
        <div className='PopularDealsNameCart3'>
            <Link
                href="#" color="inherit" underline="none">
                <h4>{props.CWO}</h4>
            </Link>
        </div>
    );
};
