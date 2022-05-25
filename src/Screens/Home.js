import React, { createRef, useState } from 'react';
import './../Content/css/IconButton.css'
import Slider from './../Cart/Slider';
import IconButton from './../Content/IconButton';
import TopBrands from './../Components/TopBrands';
import BookShow from './../Cart/BookShow';
import PopularHotels from './../Components/PopularHotels';
import AppOverView from './../Cart/AppOverView';
import OptionLand from './../Components/OptionLand';
import Games from './../File/icon/Games.svg';
import Hotels from './../File/icon/Hotels.svg';
import Restaurant from './../File/icon/Restaurant.svg';
import Shopping from './../File/icon/Shopping.svg';
import Villas from './../File/icon/Villas.svg';
import Health from './../File/icon/Health.svg';
import Services from './../File/icon/Services.svg';
import Camping from './../File/icon/Camping.svg';
import Spa_Salons from './../File/icon/Spa & Salons.svg';
import Travel from './../File/icon/Travel.svg';
import PopularDeal from './../Components/PopularDeal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import './css/Home.css'

 
const Home = () => {
    const ref = createRef()
    const [left,setLeft]=React.useState(false)
    const [right,setRight]=React.useState(true)

    React.useEffect(() =>{
        //console.log(ref.current.scrollLeft)
    },[])
    const scroll=()=>{
        if(ref.current.scrollLeft==0) {
            setLeft(false);
        }else{
            setLeft(true);
        }
        if(ref.current.scrollLeft>=(ref.current.scrollWidth-ref.current.clientWidth)){
            setRight(false);
        }else if(ref.current.scrollWidth==ref.current.clientWidth){
            setRight(false)
        }else{
            setRight(true);
        }
        
    }
    const Left = () => {
        ref.current.scrollLeft -= 100
    }
    const Right = () => {
        ref.current.scrollLeft += 100
    }

    return (
        <div className='Home'>

            <Slider />
            <div style={{
            height:'1.5px',
            width:'85%',
            marginTop:'25px',
            backgroundColor:'#D8D8D8',
            marginLeft:'7%',
            }}>
            </div>
            <div style={{ height: 20, width: '100%' }}></div>
            <div className='HomeContainer'>
                {
                    left ? (
                        <div className='IconButtonarrowLeft'>
                    <Button onClick={Left}>
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_181_2301)">
                                <rect width="39.9955" height="40" rx="19.9977" transform="matrix(-1 0 0 1 49.9977 7.44678)" fill="white" />
                            </g>
                            <path d="M33.5171 35.294C33.8206 35.0166 33.8482 34.5824 33.5999 34.2764L33.5171 34.1888L26.1411 27.4469L33.5171 20.7051C33.8206 20.4276 33.8482 19.9935 33.5999 19.6875L33.5171 19.5998C33.2135 19.3224 32.7384 19.2971 32.4037 19.5242L32.3078 19.5998L24.3268 26.8943C24.0232 27.1718 23.9956 27.606 24.244 27.9119L24.3268 27.9996L32.3078 35.294C32.6417 35.5993 33.1831 35.5993 33.5171 35.294Z" fill="black" />
                            <defs>
                                <filter id="filter0_d_181_2301" x="0.0022583" y="0.446777" width="59.9955" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="3" />
                                    <feGaussianBlur stdDeviation="5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_181_2301" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_181_2301" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </Button>
                </div>
                    ):(<></>)
                }
                {
                    right?(
                        <div className='IconButtonarrowRight'>
                <Button onClick={Right}>
                        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_132_519)">
                                <rect x="10.0022" y="7.83301" width="39.9955" height="40" rx="19.9977" fill="white" />
                            </g>
                            <path d="M26.4829 35.6803C26.1793 35.4028 26.1517 34.9686 26.4001 34.6626L26.4829 34.575L33.8588 27.8332L26.4829 21.0913C26.1793 20.8139 26.1517 20.3797 26.4001 20.0737L26.4829 19.9861C26.7865 19.7086 27.2615 19.6834 27.5963 19.9104L27.6922 19.9861L35.6732 27.2805C35.9768 27.558 36.0044 27.9922 35.756 28.2981L35.6732 28.3858L27.6922 35.6803C27.3582 35.9855 26.8168 35.9855 26.4829 35.6803Z" fill="black" />
                            <defs>
                                <filter id="filter0_d_132_519" x="0.00219727" y="0.833008" width="59.9955" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="3" />
                                    <feGaussianBlur stdDeviation="5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_132_519" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_132_519" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                    </Button>
                </div>
                    ):(<></>)
                }
                <div ref={ref} onScroll={scroll} id='scroll' className='HomeIconContainer'>

                    <div className='topBrandsDive'></div>
                    <IconButton link='/Hotel' img={Hotels} title='Hotels' />
                    <IconButton link='/Restaurant' img={Restaurant} title='Restaurant' />
                    <IconButton link='/Games' img={Games} title='Games' />
                    <IconButton link='/Shopping' img={Shopping} title='Shopping' />
                    <IconButton link='/Villas' img={Villas} title='Villas' />
                    <IconButton link='/Camping' img={Camping} title='Camping' />
                    <IconButton link='/Salon' img={Spa_Salons} title='Spa & Salons' />
                    <IconButton link='/Travel' img={Travel} title='Travel' />
                    <IconButton link='/Health' img={Health} title='Health' />
                    <IconButton link='/Services' img={Services} title='Services' />
                    <div className='topBrandsDive'></div>
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
            <div style={{ marginTop:'380px' }}></div>
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
