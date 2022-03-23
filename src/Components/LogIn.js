import React from 'react';
import Link from '@mui/material/Link';
import '../Components/css/login.css'
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Header from './Header';
import Footer from './Footer';


const Login = (props) => {

    return (
        <div>
            <Header />
            <div className='loginbody'>

                <div className='loginbodyleft'>
                    <img src="https://theupay.com/bank/Assets/login.jpg" height={600} width={400}></img>
                </div>
                <div className='loginbodyright'>
                    <div className='loginbodyrightbody'>
                        <h1>Login into your existing <br></br> account</h1>
                        <div className='textinputview'>
                            <input className='textinput' type='email' placeholder='Email' />

                        </div>
                        <div className='textinputview'>
                            <input className='textinput' type='password' placeholder='Password' />
                        </div>
                        <div className='forgotPlink'>
                            <Link underline="none" color="black" href="#">Forgot Password?</Link>
                        </div>
                        <Button >
                            <div className='loginButton'>
                                <p className='submitText'>SUBMIT</p>
                            </div>
                        </Button>
                        <div className='underline'>

                        </div>
                        <Button >
                            <div className='googleButton'>
                                <GoogleIcon></GoogleIcon>
                                <p className='googleText'>Continue with Google</p>
                            </div>
                        </Button>
                        <p>Already have a account? <Link underline="none" color="red" href="#">Login</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;