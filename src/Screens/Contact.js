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
          
            <div className='loginbody2'>

                <div className='loginbodyleft2'>
                    <img src="https://theupay.com/bank/Assets/login.jpg" height={650} width={400}></img>
                </div>
                <div className='loginbodyright2'>
                    <div className='loginbodyrightbody2'>
                        <h1>We’re here to help and answer  <br/>any question you might have.</h1>
                        <div className='textinputview2'>
                            <input className='textinput2' type='text' placeholder='Rajesh Chaudhari' />

                        </div>
                        <div className='textinputview2'>
                            <input className='textinput2' type='email' placeholder='Email' />

                        </div>
                        <div className='textinputviewMess2'>
                            <input className='textinputMess2' type='text' placeholder='Your message' />
                        </div>
                        
                        <Button >
                            <div className='loginButton2'>
                                <p className='submitText2'>SUBMIT</p>
                            </div>
                        </Button>
                        <div className='forgotPlink2'>
                            <p>Or call us on</p>
                        </div>
                        <Button >
                            <div className='googleButton2'>
                                <WhatsAppIcon color="#4CAF50"></WhatsAppIcon>
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