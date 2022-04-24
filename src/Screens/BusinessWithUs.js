import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Screens/css/BusinessWithUs.css'
 
const BusinessWithUs = () => {
    return (
        <div>
          
            <div className='loginbody3' style={{justifyContent: 'center'}}>

                <div className='loginbodyleft3'  >
                    <img src="https://theupay.com/bank/Assets/login.jpg" height={800} width={400}></img>
                </div>
                <div className='loginbodyright3'>
                    <div className='loginbodyrightbody3'>
                        <h1>We’re here to help you grow your business online.</h1>
                        <div className='textinputview3'>
                            <input className='textinput3' type='text' placeholder='Business Name' />

                        </div>
                        <div className='textinputview3'>
                            <input className='textinput3' type='email' placeholder='Email' />

                        </div>
                        <div className='textinputview3'>
                            <input className='textinput3' type='text' placeholder='Mobile No.' />
                        </div>

                        <Button style={{
                            height:'84px',
                            width:'400px',
                            borderRadius:'50px',
                            marginTop:'20px'
                        }}>
                            <div className='loginButton3'>
                                <p className='submitText3'>SUBMIT</p>
                            </div>
                        </Button>
                        <div className='forgotPlink3'>
                            <p>Or call us on</p>
                        </div>
                        <Button style={{
                
                            borderRadius:'50px'
                        }}>
                            <div className='googleButton3'>
                                <WhatsAppIcon color="#4CAF50"></WhatsAppIcon>
                                <p className='googleText3'>+91 98337 33477 / +91 98337 33977</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default BusinessWithUs;