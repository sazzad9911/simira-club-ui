import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import '../Screens/css/signup.css'

const SignUp = () => {
    return (
        <div>
   
            <div className='loginbody1'>

                <div className='loginbodyleft1'>
                    <img src="https://theupay.com/bank/Assets/login.jpg" height={600} width={400}></img>
                </div>
                <div className='loginbodyright1'>
                    <div className='loginbodyrightbody1'>
                        <h1>Create account and become <br/>a membe</h1>
                        <div className='textinputview1'>
                            <input className='textinput1' type='text' placeholder='Full Name' />

                        </div>
                        <div className='textinputview1'>
                            <input className='textinput1' type='email' placeholder='Email' />

                        </div>
                        <div className='textinputview1'>
                            <input className='textinput1' type='password' placeholder='Password' />
                        </div>
                        <div className='forgotPlink1'>
                            <Link underline="none" color="black" href="#">Forgot Password?</Link>
                        </div>
                        <Button >
                            <div className='loginButton1'>
                                <p className='submitText1'>SUBMIT</p>
                            </div>
                        </Button>
                        <div className='underline1'>

                        </div>
                        <Button >
                            <div className='googleButton1'>
                                <GoogleIcon></GoogleIcon>
                                <p className='googleText1'>Continue with Google</p>
                            </div>
                        </Button>
                        <p>Don’t have a account? <Link underline="none" color="red" href="#">Signup</Link></p>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default SignUp;