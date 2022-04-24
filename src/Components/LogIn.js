import React from 'react';
import Link from '@mui/material/Link';
import '../Components/css/login.css'
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { setUser, postData } from './../action';
import Alert from '../Content/Alert';
import api from '../api'


const Login = (props) => {
    const dispatch = useDispatch()
    const [Email, setEmail] = React.useState()
    const [Password, setPassword] = React.useState()
    const [visibility, setVisibility] = React.useState(false)
    const [data, setData]=React.useState({title:'',message:''})

    const Submit = () => {
        if(!Email || !Password) {
            setVisibility(true)
            setData({title:'Invalid',message:'Email and Password cant be empty'})
            return
        }
        postData(api()+'/login',{email:Email,password:Password}).then(res=>{
            //console.log(res)
            if(res.uid){
                dispatch(setUser(res))
                setVisibility(true)
                setData({title:'Success!',message:"Successfully log into your account"})
                window.location.href='/'
                return
            }
            setVisibility(true)
            setData({title:'Faild!',message:res.message})
            
        }).catch(err=>{
            setVisibility(true)
            setData({title:'Faild!',message:err.message})
        })
    }

    return (
        
            <div style={{justifyContent: 'center'}} className='loginbody'>

                <div className='loginbodyleft'>
                    <img src="https://theupay.com/bank/Assets/login.jpg" height={600} width={400}></img>
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
                        <div className='forgotPlink'>
                            <Link underline="none" color="black" href="#">Forgot Password?</Link>
                        </div>
                        <Button onClick={Submit}>
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
                <Alert visible={visibility} close={()=>setVisibility(!visibility)} title={data.title} message={data.message} />
            </div>
            
    );
};

export default Login;