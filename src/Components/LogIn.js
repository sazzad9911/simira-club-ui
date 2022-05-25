import React from 'react';

import '../Components/css/login.css'
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { setUser, postData, url } from './../action';
import Alert from '../Content/Alert';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase'
import { Link } from 'react-router-dom';

const Login = (props) => {
    const dispatch = useDispatch()
    const [Email, setEmail] = React.useState()
    const [Password, setPassword] = React.useState()
    const [visibility, setVisibility] = React.useState(false)
    const [data, setData] = React.useState({ title: '', message: '' })
    const auth=getAuth(app)
    const [Message, setMessage] =React.useState(null)

    const Submit = () => {
        if (!Email || !Password) {
            setVisibility(true)
            setData({ title: 'Invalid', message: 'Email and Password cant be empty' })
            return
        }
        signInWithEmailAndPassword(auth,Email,Password).then(userCredentials => {
            let user=userCredentials.user
            postData(url+'/getData',{
                tableName:'user',
                condition: "uid="+"'"+user.uid+"'"
            }).then(data => {
                dispatch(setUser(data))
                window.location.href='/'
            })
            
        }).catch(err => {
            setMessage(err.code)
        })
        
    }

    return ( 

        <div style={{ justifyContent: 'center' }} className='loginbody'>

            <div className='loginbodyleft'>
                <img src="https://theupay.com/bank/Assets/login.jpg" className='leftImg1'></img>
            </div>
            <div className='loginbodyright'>
                <div className='loginbodyrightbody'>
                    <h1>Login into your existing <br></br> account</h1>
                    <div className='textinputview'>
                        <input onChange={(e) => setEmail(e.target.value)} className='textinput' type='email' placeholder='Email' />

                    </div>
                    <div className='textinputview'>
                        <input onChange={(e) => setPassword(e.target.value)} className='textinput' type='password' placeholder='Password' />
                    </div>
                    <p style={{ 
                        color:'red',
                        fontSize:'18px',
                    }}>{Message}</p>
                    <div className='forgotPlink'>
                        <Link style={{
                            textDecoration: 'none',
                            color:'#FC444B',
                        }} to="#">Forgot Password?</Link>
                    </div>
                    <Button style={{
                        marginTop: '20px',
                        width: '400px',
                        height: '55px',
                        borderRadius:'30px',
                        padding:'0px'
                    }} onClick={Submit}>
                        <div className='loginButton'>
                            <p className='submitText'>SUBMIT</p>
                        </div>
                    </Button>
                    <div className='underline'>
 
                    </div>
                    <Button style={{
                        width: '400px',
                        height: '50px',
                        borderRadius:'30px',
                        padding:'0px'
                    }}>
                        <div className='googleButton'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.2408 13.6111C25.2559 12.7518 25.1654 11.894 24.9714 11.056H13.002V15.6941H20.0279C19.7589 17.3374 18.8176 18.8019 17.4215 19.7489L17.397 19.9043L21.1818 22.7785L21.4438 22.8041C23.8518 20.6239 25.2403 17.4159 25.2403 13.6111" fill="#4285F4" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.998 25.8302C16.4412 25.8302 19.332 24.7194 21.4436 22.8035L17.4191 19.7489C16.3423 20.4849 14.8969 20.9987 12.998 20.9987C9.69043 20.9797 6.76705 18.8874 5.74269 15.8061L5.59322 15.8186L1.65649 18.8035L1.60503 18.9437C3.76741 23.1661 8.17682 25.8313 12.9985 25.8302" fill="#34A853" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.74066 15.804C5.46179 15.0082 5.31789 14.173 5.3147 13.3316C5.31984 12.4915 5.45842 11.6574 5.72547 10.8592L5.71836 10.6935L1.73454 7.65907L1.60422 7.71983C-0.208983 11.2497 -0.208983 15.4132 1.60422 18.9431L5.74066 15.804" fill="#FBBC05" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.9942 5.6654C14.8214 5.63759 16.5885 6.30447 17.9247 7.52607L21.5235 4.08251C19.2154 1.96047 16.1588 0.796139 12.9942 0.833431C8.17037 0.833431 3.76232 3.49975 1.60124 7.72294L5.72588 10.8584C6.76 7.77784 9.68516 5.68788 12.9942 5.66539" fill="#EB4335" />
                            </svg>

                            <p className='googleText'>Continue with Google</p>
                        </div>
                    </Button>
                    <p className='bt'>Don’t have a account? <Link underline="none" style={{
                        textDecoration: 'none',
                        color:"#FC444B"
                    }} to="/SignUp">Signup</Link></p>
                </div>
            </div>
            <Alert visible={visibility} close={() => setVisibility(!visibility)} title={data.title} message={data.message} />
        </div>

    );
};

export default Login;