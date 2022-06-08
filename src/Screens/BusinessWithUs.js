import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../Screens/css/BusinessWithUs.css'
import {postData, url,convertDate} from '../action'
import { getAuth } from 'firebase/auth';
import app from './../firebase';

const BusinessWithUs = () => {
    const [Name,setName]= React.useState()
    const [Email, setEmail]= React.useState()
    const [Phone, setPhone]= React.useState()
    const [Error, setError]= React.useState()
    const auth = getAuth(app)

    const send=()=>{
        setError('Loading...')
        if(!Name || !Phone || !Email){
            setError('All fields are required')
            return
        }
        postData(url + '/setData',{
            tableName: 'business_messages',
            auth: auth.currentUser,
            columns: ['name','email','phone'],
            values: [Name,Email,Phone]
        }).then(data => {
            if(data.insertId){
                setError('Successfully request sent. Please wait for confirmation.')
                return
            }
            setError(data.message)
        })
        let date=new Date()
        postData(url +'/sendEmail',{ 
            from:'info@smira.club',
            to:'app@smira.club',
            subject:'Some one sent a business request- Smira Club',
            text:"<p>cc: <strong>SOFTWARE GENERATE MESSAGE</strong></p><p>Someone sent a business request-</p><p><strong>Name: </strong"+Name+"</p><p><strong>Phone:</strong>"+Phone+"</p><p><strong>Email: </strong>"+Email+"</p><i>created at "+convertDate(new Date())+"</i>"
        }).then(data=>{
            console.log(data)
        })
        
    }
    return (
        <div>
 
            <div className='loginbody3' style={{ justifyContent: 'center',marginTop:'100px',marginBottom:'100px' }}>

                {/* <div className='loginbodyleft3'  >
                    <img src="https://theupay.com/bank/Assets/login.jpg" className='leftImg12'></img>
                </div> */}
                <div className='loginbodyright3'>
                    <div className='loginbodyrightbody3'>
                        <h1>We’re here to help you grow your business online.</h1>
                        <div className='textinputview3'>
                            <input value={Name} onChange={e=>{
                                setName(e.target.value)
                            }} className='textinput3' type='text' placeholder='Business Name' />

                        </div>
                        <div className='textinputview3'>
                            <input value={Email} onChange={e=>{
                                setEmail(e.target.value)
                            }} className='textinput3' type='email' placeholder='Email' />

                        </div>
                        <div className='textinputview3'>
                            <input value={Phone} onChange={e=>{
                                setPhone(e.target.value)
                            }} className='textinput3' type='text' placeholder='Mobile No.' />
                        </div>
                        {Error?(<p style={{color:'red'}}>{Error}</p>):(<></>)}
                        <Button onClick={send} style={{
                            marginTop: '20px',
                            width: '400px',
                            height: '55px',
                            borderRadius: '30px',
                            padding: '0px',
                        }}>
                            <div className='loginButton3'>
                                <p className='submitText3'>SUBMIT</p>
                            </div>
                        </Button>
                        <div className='forgotPlink3'>
                            <p>Or call us on</p> 
                        </div>
                        <Button  style={{
                            width: '400px',
                            height: '50px',
                            borderRadius: '30px',
                            padding: '0px'
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