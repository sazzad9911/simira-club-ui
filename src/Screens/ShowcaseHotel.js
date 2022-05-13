import React from 'react';
import GoogleMapReact from 'google-map-react';
import Img from "./Image/hotel.PNG";
import a from "./Image/a.PNG";
import z from "./Image/z.PNG";
import s from "./Image/s.PNG";
import OptionLand from './../Components/OptionLand';
import PopularHotels from './../Components/PopularHotels';
import AppOverView from './../Cart/AppOverView'
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './css/ShowcaseHotel.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import SignalWifi3BarIcon from '@mui/icons-material/SignalWifi3Bar';
import ComputerIcon from '@mui/icons-material/Computer';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const ShowcaseHotel = (props) => {
    const data = props.data
    const conditions = props.data.conditions.split(',')
    const [height, setHeight] = React.useState('50px')

    return (
        <div>
            <img src={data.image} className='Hotelimg' />
            <div className='Showcase'>
                <div className='ShowcaseOne'>
                    <div className='ShowleftOne'>
                        <div style={{
                            width: '70%'
                        }}>
                            <h1 className='Showhed'>{data.name} </h1>
                            <p className='showttx'>{data.address}</p>
                        </div>
                        <div style={{
                            width: '25%'
                        }}>
                            <div className='showcasestar'>
                                <StarBorderIcon className='StarBorderIcon' /><p className='showiconpoint'>{data.ratings}</p>
                            </div>
                        </div>
                    </div>
                    <div className='showcaseicon'>
                        <div className='showcaseiconss'>
                            {
                                conditions ? (
                                    conditions.map((cond, i) => {
                                        if (cond == 'wifi') {
                                            return (
                                                <Button>
                                                    <div key={i} className='showcaseicons'>
                                                        <SignalWifi3BarIcon className='showicon' />
                                                    </div>
                                                </Button>
                                            )
                                        } else if (cond == 'tv') {
                                            return (
                                                <Button>
                                                    <div key={i} className='showcaseicons'>
                                                        <ComputerIcon className='showicon' />
                                                    </div>
                                                </Button>
                                            )
                                        } else {
                                            return (
                                                <Button>
                                                    <div key={i} className='showcaseicons'>
                                                        <LocalParkingIcon className='showicon' />
                                                    </div>
                                                </Button>
                                            )
                                        }
                                    })
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                    </div>
                    <div className='showDescription'>
                        <h3 style={{
                            fontWeight: '700px',
                            fontSize: '30px',
                            color: '#292929'
                        }}>Description </h3>
                        <h6 style={{
                            height: height,
                            overflow: 'hidden'
                        }} className='showcasetxt'>{data.description}</h6>
                        {
                            height == '50px' ? (
                                <button onClick={() => {
                                    setHeight('auto')
                                }} style={{
                                    border: 'none',
                                    outline: 'none',
                                    background: 'none',
                                    color: 'red',
                                    fontWeight: '700'
                                }}>Read More</button>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                    <div className='showcasecheck'>
                        <div className='showcasecheckin'>
                            Check-in
                            <h3>{data.check_in}</h3>
                        </div>
                        <div className='showcasebar'></div>
                        <div className='showcasecheckin'>
                            Check-out
                            <h3>{data.check_out}</h3>
                        </div>

                    </div>
                    <div className='showcasemap'>
                        <div className='showCaseMap'><GoogleMapReact /></div>
                        <h3 style={{ color: '#292929', fontSize: '30px', fontWeight: '700px' }}>What's nearby</h3>
                        <div className='showcasemaps'>
                            <div className='showcaseNearbys'>
                                <div className='showcaseNearby'></div>
                            </div>
                            <div className='showFont'>
                                <div><h2 style={{ color: '#585858', fontSize: '26px', fontWeight: '400px' }}>500m away from Sai Baba Mandir</h2></div>
                            </div>

                        </div>
                        <div className='showcasemaps'>
                            <div className='showcaseNearbys'>
                                <div className='showcaseNearby'></div>
                            </div>
                            <div className='showFont'>
                                <div><h2 style={{ color: '#585858', fontSize: '26px', fontWeight: '400px' }}>200m away from Shirdi Bus Stop</h2></div>
                            </div>

                        </div>
                        <div className='ShowleftOnefs'>
                            <div style={{
                                width: '70%'
                            }}>
                                <div className='Showhed'>
                                    <h3 style={{ color: '#292929', fontSize: '30px', fontWeight: '700px' }}> Reviews </h3>
                                </div>
                            </div>
                            <div className='Showstar'>
                                <div className='showcasestar'>
                                    <StarBorderIcon className='StarBorderIcon' /><p className='showiconpoint'>4.3</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Review />
                            <div style={{
                                width: '86%',
                                marginLeft: '1%',
                            }}>
                                <p style={{ color: '#808080', fontSize: '22px', fontWeight: '400px' }}>
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        height: '0px',
                        width: '84%',
                        border: '1px solid #D8D8D8',
                        marginTop: '25px',
                        background: 'black'
                    }}>

                    </div>
                    <div className='showconButton'>
                        <Button style={{
                            marginTop: '20px',
                            width: '160px',
                            height: '45px',
                            border: '1px solid #CACACA',
                            borderRadius: '15px'
                        }}>
                            <p style={{
                                fontWeight: '500px',
                                fontSize: '18px',
                                color: '#959595'
                            }}>Show more</p>

                        </Button>
                    </div>
                </div>





                <div className='ShowcaseRight'>
                    <div className='ShowcaseRightf'>
                        <h3>Booking Details</h3>
                        <h4 style={{
                            display: 'flex',
                            color: '#808080'
                        }}>Check-in<p className='showrightStar'>*</p></h4>
                        <div className='Showinputbox'>
                            <input className='Showrightinputs' placeholder='  23 March 2022' />
                        </div>

                    </div>
                    <div className='ShowcaseRightf'>
                        <h4 style={{
                            display: 'flex',
                            color: '#808080'
                        }}>Check-out<p className='showrightStar'>*</p></h4>
                        <div className='Showinputbox'>
                            <input className='Showrightinput' type='date' placeholder='  Date' />
                        </div>

                        <div style={{
                            display: 'flex',
                            width: '90%'
                        }} >
                            <div className='showAdults'>
                                <p className='showadu'>Adults</p>
                                <p className='showold'>Older 12 years</p>
                            </div>
                            <div className='showAdultss'>
                                <Button>
                                    <div className='showbutton'>
                                        <p className='showbuttonone'>-</p>
                                    </div>
                                </Button>
                                <p className='showbuttonTwon'>2</p>
                                <Button>
                                    <div className='showbuttont'>
                                        <p className='showbuttontwo'>+</p>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: '90%'
                        }} >
                            <div className='showAdults'>
                                <p className='showadu'>Children</p>
                                <p className='showold'>5 - 12 years old</p>
                            </div>
                            <div className='showAdultss'>
                                <Button>
                                    <div className='showbutton'>
                                        <p className='showbuttonone'>-</p>
                                    </div>
                                </Button>
                                <p className='showbuttonTwon'>2</p>
                                <Button>
                                    <div className='showbuttont'>
                                        <p className='showbuttontwo'>+</p>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            width: '90%'
                        }} >
                            <div className='showAdults'>
                                <p className='showadu'>Room</p>
                            </div>
                            <div className='showAdultss'>
                                <Button>
                                    <div className='showbutton'>
                                        <p className='showbuttonone'>-</p>
                                    </div>
                                </Button>
                                <p className='showbuttonTwo'>2</p>
                                <Button>
                                    <div className='showbuttont'>
                                        <p className='showbuttontwo'>+</p>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className='showconFButtons'>
                            <div className='showconFButton'>
                                <p className='ShowsubmitText'>CONFIRM BOOKING</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: 50, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ height: 20, width: '100%' }}></div>
            <AppOverView />
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
        </div>
    );
};

export default ShowcaseHotel;

const Review = () => {
    return (
        <div className='Showcardhed'>
            <div className='Showcardhedone'>
                <div><img src={s} className='Showcardimg' /></div>
                <div className='showcardname'>
                    <div><p className='showtxt'>Rahul Jadhav</p></div>
                    <div className='Showcardhedone'> <p className='Platinum'>Platinum</p> <p className='Member'> Member</p></div>
                </div>
            </div>
            <div style={{
                color: 'red',
                width: '50%'
            }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
        </div>
    )
}