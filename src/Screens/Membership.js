import React from 'react';
import './../Screens/css/Membership.css'


const Membership = () => {
    return (
        <div>
            <div className='container'>
                <p className='membername'>SmiraClub Membership</p>
                <img className='Membershiphed' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGv8P0QGVsvRvc2hl66PMqdokQTI3g41moQ&usqp=CAU" />
            </div>
            <div className='Membershipcard'>
                <div className='Membershipcard-left'>
                    <div className='memberl'>
                        <p className='MemberLeftohed'>Worth of ₹ 1 lakh</p>
                        <div className='memberbar'></div>
                        <p className='MemberLeftohedo'> Unlimited enjoyment • Unlimited savings!</p>
                    </div>
                    <div className='MemberLeft'>
                        <p className='MemberLeft'>Claim your free month</p>
                    </div>
                </div>



                <div className='Membershipcard-right'>
                    <div className='MemberCard'>
                        <div className='membercardfs'>
                            <p style={{ marginTop: 38, fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Silver Membership</p>
                        </div>
                        <div className='membercardfss'>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Hotel stays of up to 20 nights</p>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Valid on any  5 hotels</p>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>No family access</p>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Benefits worth of ₹50000</p>
                        </div>
                        <div className='membercardf'>
                            <div className='membertext' ><p style={{ fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Become a Member</p></div>
                            <div className='membertext' ><p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>at ₹1499 for 1 year </p></div>
                        </div>
                    </div>
                    <div className='MemberCard'>
                        <div className='membercardfs'>
                            <p style={{ color: '#F3B038', marginTop: 38, fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Gold</p>
                            <p style={{ marginLeft: -3, marginTop: 38, fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Membership</p>
                        </div>
                        <div className='membercardfss'>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Hotel stays of up to 40 nights</p>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Valid on any  10 hotels</p>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Family access upto 3 accounts</p>
                            <p style={{ marginTop: 18, fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>Benefits worth of ₹75000</p>
                        </div>
                        <div className='membercardft'>
                            <div className='membertext' ><p style={{ fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Become a Member</p></div>
                            <div className='membertext' ><p style={{ fontSize: 14, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>at ₹2999 for 2 years</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <p className='membershipfootee'>Have a family code?</p>
                <p className='membershipfoote'>Apply it here</p>
            </div>
        </div>


    );
};

export default Membership; <p>Not match any route</p>