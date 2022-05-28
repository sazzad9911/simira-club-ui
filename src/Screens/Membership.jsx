import React from 'react';
import './../Screens/css/Membership.css'
import Img from './Image/Capture.PNG'
import TopBrands from './../Components/TopBrands';
import PopularHotels from './../Components/PopularHotels';
import AppOverView from './../Cart/AppOverView';
import OptionLand from './../Components/OptionLand';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {postData,url} from '../action.js'
import { useState } from 'react';
import Loader from './../Content/Loader';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


 
const Membership = () => {
    const [Data,setData]=React.useState(null)
    const [Open,setOpen]=React.useState(false)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        postData(url+'/getData',{
            tableName:'membership'
        }).then((data) => {
            if(Array.isArray(data)){
                return setData(data)
            }
            console.log(data.message)
        })
    },[])
    return (
        <div style={{
            width:'100%',
            padding:'0px'
        }}>
            <div className='containerX'>
                <img src={Img} className='MembershiphedImg' />
                <p className='membername'>SmiraClub <span>Membership</span></p>
            </div>
            <div className='Membershipcard'>
                <div className='Membershipcard-left'>
                    <div className='memberl'>
                        <p className='MemberLeftohed'>Worth of ₹ 1 lakh</p>
                        <div className='memberbar'></div>
                        <p className='MemberLeftohedo'> Unlimited enjoyment • Unlimited savings!</p>
                    </div>
            
                    <div className='MemberLeft'>
                        <p>Claim your free month</p>
                    </div>
                </div>
                <div className='Membershipcard-right'>
                {
                    Data?(
                        Data.map((doc, i)=>(
                            <div style={{width:'300px', height:'330px',margin:'5px'}}>
                            <Plans data={doc} key={i}/>
                            </div>
                        ))
                    ):(<Loader/>)
                   }
                </div>
            </div>
            <div className='membershipHave'>
                <p className='membershipfootee'>Have a family code?</p>
                <button onClick={()=>setOpen(true)} className='membershipfoote'>Apply it here</button>
                <div></div>
            </div>
            <div className='Home-topBrand'>
                <TopBrands headText='Top Brands For You' />
            </div>
            <div style={{ height: 50, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ height: 20, width: '100%',marginTop:'350PX' }}>

            </div>
            <AppOverView />
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
            <Modal open={Open} onClose={()=>setOpen(!Open)}>
            <div className="membershipFamily">
            <p>Membership Family Code</p>
            <input type="text" placeholder="XXXX - XXXX - XXXX - XXXX">
            </input>
            <button>ADD FAMILY CODE</button>
            </div>
            </Modal>
        </div>


    );
};

export default Membership;
const Plans=(props)=>{
    const data =props.data;
    return (
        <div className='MemberCard'>
            <div className='membercardfs'>
                <p style={{ fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" ,margin:'0'}}>
                <span style={{color: data.color}}>{data.name}</span> Membership</p>
            </div>
            <div className='membercardfss'>
                <p style={{  fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                 fontWeight: 500 }}>Hotel stays of up to {data.night} nights</p>
                <p style={{ fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontWeight: 500 }}>Valid on any  {data.hotel} hotels</p>
                <p style={{ fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontWeight: 500 }}>{data.account} family access</p>
                <p style={{ fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontWeight: 500 }}>Benefits worth of ₹{data.price}</p>
            </div>
            <Link to={"/Checkout/"+data.id} style={{backgroundColor:data.color,
            textDecoration:'none', color:'#ffff'}} className='membercardf'>
               <p id='txt' style={{ fontSize: 16,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", 
                 fontWeight: 700, margin: '0px'}}>Become a Member</p>
                <p id='txt' style={{ fontSize: 14,
                 fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500, margin: '0px'}}>at ₹{data.price} for {data.time} year </p>
            </Link>
    </div>
    )
}
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
        Left
      </Arrow>
    );
  }
const Arrow=({data})=>{
    const {
        isFirstItemVisible,
        scrollPrev,
        visibleItemsWithoutSeparators,
        initComplete,
        isLastItemVisible,
        scrollNext,
      } = React.useContext(VisibilityContext);
    return (
        <button disabled={isFirstItemVisible} onClick={()=>scrollPrev()} style={{
            height: '350px',
            minWidth: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
       {
        data=='left'?(
            <ArrowBackIosIcon/>
        ):(<></>)
       }
        </button>
    )
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  
    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }
  
    if (ev.deltaY < 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
    }
  }