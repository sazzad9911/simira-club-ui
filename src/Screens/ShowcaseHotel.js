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
import Button from '@mui/material/Button';
import { Link,useParams } from 'react-router-dom';
import {postData, url,convertDate} from '../action'
import CCTV from '../Asset/Font/CCTV.svg'
import Wifi from '../Asset/Font/Free Wifi.svg'
import Gym from '../Asset/Font/Gym.svg'
import Parking from '../Asset/Font/Parking.svg'
import Swimming from '../Asset/Font/Swimming Pool.svg'
import TV from '../Asset/Font/TV.svg'
import { ReactSVG } from 'react-svg'
import {useSelector} from 'react-redux'
import { getAuth } from 'firebase/auth';
import app from './../firebase';

const ShowcaseHotel = (props) => {
    const {id}=useParams()
    const [Data,setData]= React.useState(null)
    const [height, setHeight] = React.useState('78px')
    const [conditions,setConditions] = React.useState(null)
    const [Reviews,setReviews] = React.useState(null)
    const users =useSelector(state => state.Users)
    const [Adults,setAdults] = React.useState(0)
    const [Children,setChildren] = React.useState(0)
    const [Room,setRoom]= React.useState(0)
    const [CheckIn,setCheckIn] = React.useState()
    const [CheckOut,setCheckOut] = React.useState()
    const [Error,setError]= React.useState()
    const [Loader,setLoader] = React.useState(false)
    const auth = getAuth(app)
    const user=useSelector(state => state.User)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        postData(url +'/getData',{
            tableName:'hotels',
            condition:'id='+id
        }).then((data) => {
            if(Array.isArray(data)){
                setConditions(data[0].conditions.split(','))
                return setData(data[0])
            }
            console.log(data.message)
        })
        postData(url +'/getData',{
            tableName: 'hotel_reviews',
            condition:'hotel_id='+"'"+id+"'"
        }).then(data => {
            if(Array.isArray(data)){
                return setReviews(data)
            }
            console.log(data.message)
        })
    },[id])
    const Confirm = () => {
        if(Room<1){
            setError('Please select any room')
            return
        }
        if(user && user[0].membership_type){
            setLoader(true)
        postData(url + '/setData', {
            auth: auth.currentUser,
            tableName: 'hotel_booking',
            columns: ['check_in', 'check_out', 'adult', 'children', 'room', 'date', 'user_id', 'hotel_id','type'],
            values: [convertDate(new Date(CheckIn)), convertDate(new Date(CheckOut)), Adults, Children, Room, convertDate(new Date()), auth.currentUser.uid, id,'veg']
        }).then(data => {
            if (data.insertId) {
                setLoader(false)
                setError('Successful! We will sent you an email')
                return
            }
            setError(data.message)
            setLoader(false)
        }).catch(err => {
            setLoader(false)
        })
        postData(url +'/sendEmail',{ 
            from:'info@smira.club',
            to:auth.currentUser.email,
            subject:'Your Booking Request has been received - Smira Club',
            text:"<p>Dear <strong>"+user[0].name.split(' ')[0]+"</strong>,</p><p>We have received your request for a booking on <strong>"+convertDate(new Date(CheckIn))+"</strong> for <strong>"+Room+"</strong> room at the "+Data.name+".Please wait for a booking confirmation email to know about your booking status.If you have any inquiries, please do not hesitate to contact us.</p><p>Best Regards</p><p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
        }).then(data=>{
            console.log(data)
        })
        }else{
            window.location.href='/Membership'
        }
    }
    return (
        <div style={{
            width:'100%',
            overflowX: 'hidden',
        }}>
            <img style={{marginTop:'30px'}} src={Data?Data.image:''} className='Hotelimg' />
            <div className='Showcase'>
                <div className='ShowcaseOne'>
                    <div className='ShowleftOne'>
                        <div style={{
                            width: '70%'
                        }}>
                            <h1 className='Showhed'>{Data?Data.name:''} </h1>
                            <p className='showttx'>{Data?Data.address:''}</p>
                        </div>
                        <div style={{
                            width: '25%'
                        }}>
                            <div className='showcasestar'>
                                <StarBorderIcon className='StarBorderIcon' /><p className='showiconpoint'>{Data?Data.ratings:'0'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='showcaseicon'>
                        <div className='showcaseiconss'>
                            {
                                conditions ? (
                                    conditions.map((doc, i) => {
                                        if (doc == 'wifi') {
                                    return (
                                        <img key={i} src={Wifi} className='showicon' />
                                    )
                                } else if (doc == 'tv') {
                                    return (
                                        <img key={i} src={TV} className='showicon' />
                                    )
                                } else if(doc=='parking'){
                                    return (
                                        <img key={i} src={Parking} className='showicon'/>
                                    )
                                }else if (doc=='gym'){
                                    return (
                                           
                                        <img key={i} src={Gym} className='showicon'/>
                                       
                                    )
                                }else if (doc=='cctv'){
                                    return (
                                        <img key={i} src={CCTV} className='showicon'/>
                                    )
                                }else{
                                    return (
                                        <img key={i} src={Swimming} className='showicon'/>
                                    )
                                }
                                    })
                                ) : (
                                    <div>
                                   
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='showDescription'>
                        <h3 style={{
                            fontWeight: '700px',
                            fontSize: '22px',
                            color: '#292929',
                            marginTop: '30px'
                        }}>Description </h3>
                        <h6 style={{
                            height: height,
                            overflow: 'hidden',
                            fontWeight: 'normal'
                        }} className='showttx'>{Data?Data.description:''}</h6>
                        <button onClick={() => {
                                    if(height == '78px'){
                                        setHeight('auto')
                                    }else{
                                        setHeight('78px')
                                    }
                                }} style={{
                                    border: 'none',
                                    outline: 'none',
                                    background: 'none',
                                    color: 'red',
                                    fontWeight: '700',
                                    marginLeft: '-8px'
                                }}>Read {height == '78px'?'More':'Less'}</button>
                    </div>
                    <div className='showcasecheck'>
                        <div className='showcasecheckin'>
                            Check-in
                            <h3>{Data?Data.check_in:''}</h3>
                        </div>
                        <div className='showcasebar'></div>
                        <div className='showcasecheckin'>
                            Check-out
                            <h3>{Data?Data.check_out:''}</h3>
                        </div>

                    </div>
                    <div className='showcasemap'>
                        <div className='showCaseMap'><GoogleMapReact /></div>
                        <h3 style={{ color: '#292929', fontSize: '22px', fontWeight: '700px',marginBottom: '30px'}}>What's nearby</h3>
                        {
                            Data?(
                                <div className='showcasemaps'>
                            <div className='showcaseNearbys'>
                                <div className='showcaseNearby'></div>
                            </div>
                            <div className='showFont'>
                                <div><h2 style={{ color: '#585858', fontSize: '16px', fontWeight: '400px' }}>{Data.near_by.split(',')[0]}</h2></div>
                            </div>

                        </div>
                            ):(<></>)
                        } 
                        {
                            Data && Data.near_by.split(',').length > 1?(
                                <div className='showcasemaps'>
                            <div className='showcaseNearbys'>
                                <div className='showcaseNearby'></div>
                            </div>
                            <div className='showFont'>
                                <div><h2 style={{ color: '#585858', fontSize: '16px', fontWeight: '400px' }}>{Data.near_by.split(',')[1]}</h2></div>
                            </div>

                        </div>
                            ):(<></>)
                        }
                        {
                            Reviews && Reviews.length > 0 ?(
                                <div className='ShowleftOnefs'>
                            <div style={{
                                width: '70%'
                            }}>
                                <div className='Showhed'>
                                    <h3 style={{ color: '#292929', fontSize: '30px',
                                     fontWeight: '700px',marginTop:'30px',marginBottom:'30px' }}> Reviews </h3>
                                </div>
                            </div>
                            <div className='Showstar'>
                                <div className='showcasestar'>
                                    <StarBorderIcon className='StarBorderIcon' /><p className='showiconpoint'>4.3</p>
                                </div>
                            </div>
                        </div>
                            ):(<></>)
                        }
                        <div>
                            {
                                Reviews?(
                                    Reviews.map((doc,i)=>(
                                        <Review key={i} data={doc} />
                                    ))
                                ):(<></>)
                            }
                            
                        </div>
                    </div>
                    {
                        Reviews && Reviews.length > 5 ?(
                            
                    <div className='showconButton'>
                        <Button style={{
                            marginTop: '20px',
                            width: '160px',
                            height: '45px',
                            border: '1px solid #CACACA',
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <p style={{
                                fontWeight: '500px',
                                fontSize: '18px',
                                color: '#959595',
                                margin:'0px'
                            }}>Show more</p>

                        </Button>
                    </div>
                        ):(<></>)
                    }
                </div>
                <div className='ShowcaseRight'>
                    <div className='ShowcaseRightf'>
                        <h3 style={{fontSize:'22px'}}>Booking Details</h3>
                        <p style={{
                            display: 'flex',
                            color: '#808080',
                            fontSize: '18px',
                            margin:'0px',
                            marginTop: '30px',
                            marginBottom:'8px'
                        }}>Check-in *</p>
                        <div className='Showinputbox'>
                            <input className='Showrightinputs' onChange={e=>{
                                setCheckIn(e.target.value)
                            }} type='date' placeholder='23 March 2022' />
                        </div>

                    </div>
                    <div className='ShowcaseRightf'>
                        <p style={{
                            display: 'flex',
                            color: '#808080',
                            fontSize: '18px',
                            margin:'0px',
                            marginTop: '10px',
                            marginBottom:'8px'
                        }}>Check-out *</p>
                        <div className='Showinputbox'>
                            <input className='Showrightinputs' onChange={e=>{
                                setCheckOut(e.target.value)
                            }} type='date' placeholder='Date' />
                        </div>

                        <div style={{
                            display: 'flex',
                           marginLeft: '10px', 
                           marginRight: '10px',
                           marginTop: '5px'
                        }} >
                            <div style={{marginTop:'10px'}} className='showAdults'>
                                <p className='showadu'>Adults</p>
                                <p className='showold'>Older 12 years</p>
                            </div>
                            <div className='showAdultss'>
                                <Button onClick={()=>{
                                    if(Adults>0){
                                        setAdults(Adults-1)
                                    }
                                }}>
                                    <div className='showbutton'>
                                        <p className='showbuttonone'>-</p>
                                    </div>
                                </Button>
                                <p className='showbuttonTwon'>{Adults}</p>
                                <Button onClick={() =>{
                                    setAdults(Adults+1)
                                }}>
                                    <div className='showbuttont'>
                                        <p className='showbuttontwo'>+</p>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div style={{
                           display: 'flex',
                           marginLeft: '10px',
                           marginRight: '10px',
                           marginTop: '5px'
                        }} >
                            <div className='showAdults'>
                                <p className='showadu'>Children</p>
                                <p className='showold'>5 - 12 years old</p>
                            </div>
                            <div className='showAdultss'>
                                <Button onClick={() =>{
                                    if(Children>0){
                                        setChildren(Children-1)
                                    }
                                }}>
                                    <div className='showbutton'>
                                        <p className='showbuttonone'>-</p>
                                    </div>
                                </Button>
                                <p className='showbuttonTwon'>{Children}</p>
                                <Button onClick={() =>{
                                    setChildren(Children+1)
                                }}>
                                    <div className='showbuttont'>
                                        <p className='showbuttontwo'>+</p>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div style={{
                           display: 'flex',
                           marginLeft: '10px',
                           marginRight: '10px',
                           marginTop: '5px'
                        }} >
                            <div className='showAdults'>
                                <p className='showadu'>Room</p>
                            </div>
                            <div className='showAdultss'>
                                <Button onClick={() =>{
                                    if(Room>0){
                                        setRoom(Room-1);
                                    }
                                }}>
                                    <div className='showbutton'>
                                        <p className='showbuttonone'>-</p>
                                    </div>
                                </Button>
                                <p className='showbuttonTwo'>{Room}</p>
                                <Button onClick={() =>{
                                    setRoom(Room+1)
                                }}>
                                    <div className='showbuttont'>
                                        <p className='showbuttontwo'>+</p>
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',width: '100%'}}>
                        <p style={{color: 'red'}}>{Error}</p>
                        </div>
                        <Button onClick={Confirm} style={{
                            border: '1px solid #FC444B',
                            borderRadius: '30px',
                            marginTop: '10px',
                        }} className='showconFButton'>
                        <p className='ShowsubmitText'>CONFIRM BOOKING</p>
                        </Button>
                    </div>
                </div>
            </div>
            <div style={{ height: 50, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ marginTop:'400px' }}>
            <AppOverView />
            </div>
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
        </div>
    );
};

export default ShowcaseHotel;

const Review = () => {
    return (
        <div>
        <div className='Showcardhed'>
            <div className='Showcardhedone'>
                <div><img src={s} className='Showcardimg' /></div>
                <div className='showcardname'>
                    <div><p className='showtxt'>Rahul Jadhav</p></div>
                    <div className='Showcardhedone'> 
                    <p className='Platinum'>Platinum</p> 
                    <p className='Member'> Member</p>
                    </div>
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
        <div style={{
                    width: '86%',
                    marginLeft: '1%',
                    marginTop: '10px'
                }}>
                </div>
                <p style={{ color: '#808080', fontSize: '20px', fontWeight: '200' }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
                 Exercitation veniam consequat sunt nostrud amet                       </p>
                 <div style={{
                        height: '0px',
                        width: '100%',
                        border: '.1px solid #D8D8D8',
                        marginTop: '25px',
                        background: 'black',
                    }}>

                    </div>
        </div>
    )
}