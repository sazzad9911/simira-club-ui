import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Screens/css/contact.css'
import {postData,url} from '../action'
import { getAuth,sendPasswordResetEmail } from 'firebase/auth';
import app from './../firebase';
 
const ForgetPassword = () => {
    const auth = getAuth(app);
    const [Loader,setLoader]= React.useState(false)
    const [Name,setName]= React.useState()
    const [Error,setError]= React.useState()
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const send=()=>{
        setError('')
        if(!Name ) {
           setError('Opps! All field are required')
           return;
        }
        setLoader(true);
        setError('Loading...')
        sendPasswordResetEmail(auth, Name)
          .then(() => {
            setError('Password reset email sent successfully! Please check email. If did not get then check spam box')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setError(errorCode)
         });
    }
    return (     
            <div style={{marginTop:'100px', marginBottom:'100px' }} className='loginbody2'  style={{justifyContent: 'center'}}>
                {/* <div className='loginbodyleft2'>
                    <img src="https://theupay.com/bank/Assets/login.jpg" className='leftImg123'></img>
                </div> */}
                <div className='loginbodyright2'> 
                    
                    <div style={{display: 'block',}} className='loginbodyrightbody2'>
                        <h1 style={{
                            fontSize: '22px',
                            marginBottom: '30px',
                            textAlign: 'center'
                        }}>Forget password</h1>
                        <div className='textinputview2'>
                            <input value={Name} onChange={(e)=>{
                                setName(e.target.value)
                            }} className='textinput2' type='text' placeholder='Email' />

                        </div>
                        
                        {Error?(<p style={{color: 'red'}}>{Error}</p>):(<></>)}
                        <Button onClick={send} style={{
                            height:'50px',
                            width:'400px',
                            borderRadius:'50px',
                            marginTop:'20px' ,
                            padding: '0px'
                        }}>
                            <div className='loginButton2'>
                                <p className='submitText2'>{Loader?'DONE':'SUBMIT'}</p>
                            </div>
                        </Button>
                        <div className='forgotPlink2'>
                            <p style={{fontSize:'18px'}}>Or call us on</p>
                        </div>
                        <Button style={{
                            width: '400px',
                            height: '50px',
                            borderRadius: '30px',
                            padding: '0px',
                            marginBottom:'50px'
                        }}>
                            <div className='googleButton2'>
                            <div style={{marginRight:'10px'}}>
                            <svg width="30" height="30" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_610_2060)">
                            <path d="M20.2902 0.474609H20.2802C9.25268 0.474609 0.285182 9.44461 0.285182 20.4746C0.278335 24.6871 1.6118 28.7926 4.09268 32.1971L1.60018 39.6271L9.28768 37.1696C12.5486 39.333 16.3769 40.483 20.2902 40.4746C31.3177 40.4746 40.2852 31.5021 40.2852 20.4746C40.2852 9.44711 31.3177 0.474609 20.2902 0.474609Z" fill="#4CAF50"/>
                            <path d="M31.9266 28.7171C31.4441 30.0796 29.5291 31.2096 28.0016 31.5396C26.9566 31.7621 25.5916 31.9396 20.9966 30.0346C15.1191 27.5996 11.3341 21.6271 11.0391 21.2396C10.7566 20.8521 8.66406 18.0771 8.66406 15.2071C8.66406 12.3371 10.1216 10.9396 10.7091 10.3396C11.1916 9.84707 11.9891 9.62207 12.7541 9.62207C13.0016 9.62207 13.2241 9.63457 13.4241 9.64457C14.0116 9.66957 14.3066 9.70457 14.6941 10.6321C15.1766 11.7946 16.3516 14.6646 16.4916 14.9596C16.6341 15.2546 16.7766 15.6546 16.5766 16.0421C16.3891 16.4421 16.2241 16.6196 15.9291 16.9596C15.6341 17.2996 15.3541 17.5596 15.0591 17.9246C14.7891 18.2421 14.4841 18.5821 14.8241 19.1696C15.1641 19.7446 16.3391 21.6621 18.0691 23.2021C20.3016 25.1896 22.1116 25.8246 22.7591 26.0946C23.2416 26.2946 23.8166 26.2471 24.1691 25.8721C24.6166 25.3896 25.1691 24.5896 25.7316 23.8021C26.1316 23.2371 26.6366 23.1671 27.1666 23.3671C27.7066 23.5546 30.5641 24.9671 31.1516 25.2596C31.7391 25.5546 32.1266 25.6946 32.2691 25.9421C32.4091 26.1896 32.4091 27.3521 31.9266 28.7171Z" fill="#FAFAFA"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_610_2060">
                            <rect width="40" height="40" fill="white" transform="translate(0.285156 0.474609)"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </div>
                                <p className='googleText2'>+91 98337 33477 / +91 98337 33977</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </div> 
    );
};

export default ForgetPassword;