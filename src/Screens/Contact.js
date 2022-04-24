import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Screens/css/contact.css'

const Contact = () => {
    return (
        <div>
          
            <div className='loginbody2'  style={{justifyContent: 'center'}}>
 
                <div className='loginbodyleft2'>
                    <img src="https://theupay.com/bank/Assets/login.jpg" height={800} width={400}></img>
                </div>
                <div className='loginbodyright2'>
                    <div className='loginbodyrightbody2'>
                        <h1>We’re here to help and answer any question you might have.</h1>
                        <div className='textinputview2'>
                            <input className='textinput2' type='text' placeholder='Rajesh Chaudhari' />

                        </div>
                        <div className='textinputview2'>
                            <input className='textinput2' type='email' placeholder='Email' />

                        </div>
                        <div className='textinputviewMess2'>
                            <input className='textinputMess2' type='text' placeholder='Your message' />
                        </div>
                        
                        <Button style={{
                            height:'84px',
                            width:'400px',
                            borderRadius:'50px',
                            marginTop:'20px' 
                        }}>
                            <div className='loginButton2'>
                                <p className='submitText2'>SUBMIT</p>
                            </div>
                        </Button>
                        <div className='forgotPlink2'>
                            <p>Or call us on</p>
                        </div>
                        <Button style={{
                            display:'flex',
                            borderRadius:'50px'
                        }}>
                            <div className='googleButton2'>
                                <WhatsAppIcon ></WhatsAppIcon>
                                <p className='googleText2'>+91 98337 33477 / +91 98337 33977</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Contact;