import React from 'react';
import './../Screens/css/Membership.css'
import Img from './Image/Capture.PNG'
import TopBrands from './../Components/TopBrands';
import PopularHotels from './../Components/PopularHotels';
import AppOverView from './../Cart/AppOverView';
import OptionLand from './../Components/OptionLand';

 
const Membership = () => {
    return (
        <div style={{
            width:'100%',
            padding:'0px'
        }}>
            <div className='containerX'>
                <img src={Img} className='MembershiphedImg' />
                <p className='membername'>SmiraClub Membership</p>
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
                    <div className='MemberCard'>
                        <div className='membercardfs'>
                            <p style={{ fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" ,margin:'0'}}>Silver Membership</p>
                        </div>
                        <div className='membercardfss'>
                            <p style={{  fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Hotel stays of up to 20 nights</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Valid on any  5 hotels</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>No family access</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Benefits worth of ₹50000</p>
                        </div>
                        <div className='membercardf'>
                            <div className='membertext' >
                            <p style={{ fontSize: 16,
                             fontFamily: "'Plus Jakarta Sans', sans-serif", 
                             fontWeight: 700,margin: '0px'}}>Become a Member</p></div>
                            <div className='membertext' ><p style={{ fontSize: 14,
                             fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 500,margin: '0px'}}>at ₹1499 for 1 year </p></div>
                        </div>
                    </div>
                    <div className='MemberCard'>
                        <div className='membercardfs'>
                            <p style={{ fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" ,margin:'0'}}>Silver Membership</p>
                        </div>
                        <div className='membercardfss'>
                            <p style={{  fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Hotel stays of up to 20 nights</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Valid on any  5 hotels</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>No family access</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Benefits worth of ₹50000</p>
                        </div>
                        <div className='membercardf'>
                            <div className='membertext' >
                            <p style={{ fontSize: 16,
                             fontFamily: "'Plus Jakarta Sans', sans-serif", 
                             fontWeight: 700,margin: '0px'}}>Become a Member</p></div>
                            <div className='membertext' ><p style={{ fontSize: 14,
                             fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 500,margin: '0px'}}>at ₹1499 for 1 year </p></div>
                        </div>
                    </div>
                    <div className='MemberCard'>
                        <div className='membercardfs'>
                            <p style={{ fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" ,margin:'0'}}>Silver Membership</p>
                        </div>
                        <div className='membercardfss'>
                            <p style={{  fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Hotel stays of up to 20 nights</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Valid on any  5 hotels</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>No family access</p>
                            <p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Benefits worth of ₹50000</p>
                        </div>
                        <div className='membercardf'>
                            <div className='membertext' >
                            <p style={{ fontSize: 16,
                             fontFamily: "'Plus Jakarta Sans', sans-serif", 
                             fontWeight: 700,margin: '0px'}}>Become a Member</p></div>
                            <div className='membertext' ><p style={{ fontSize: 14,
                             fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 500,margin: '0px'}}>at ₹1499 for 1 year </p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='membershipHave'>
                <p className='membershipfootee'>Have a family code?</p>
                <p className='membershipfoote'>Apply it here</p>
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

        </div>


    );
};

export default Membership; <p>Not match any route</p>