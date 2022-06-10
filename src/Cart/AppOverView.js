import React from 'react';
import './css/AppOverView.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Photo from './css/Mockup (Will be updated later).png'
import { Checkbox } from '@mui/material';
import { useState } from "react";
import { getAuth } from 'firebase/auth';
import app from './../firebase';
import {postData, url} from '../action'
import logo from './logo.svg'
import { Link } from 'react-router-dom';

const AppOverView = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [Email,setEmail]= React.useState()
    const auth = getAuth(app)
    const [Error,setError]=React.useState('')

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const sendEmail=() => {
        if(!Email) {
            setError('Type email first');
            return;
        }
        postData(url +'/sendEmail',{
            from:'info@smira.club',
            to:auth.currentUser.email,
            subject:'Play Store Link',
            text:"<p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
        }).then(data=>{
            console.log(data)
        })
    }
    return (
        <div className='AppOverViewBody'>
                <div className='AppOverViewLaftDiv'>
                    <img className='AppOverViewImg' src={logo} />
                </div> 
                <div className='AppOverViewRightDiv'>
                   <div>
                   <div>
                        <h2 className='AppOverViewBigText'>Get the SmiraClub App</h2>
                        {/* <div>
                            <p className='AppOverViewSamllText'>
                                We'll send you a link that you can open on your phone to<br/>
                                download the app.
                            </p>
                        </div> */}

                    </div>
                    {/* <div style={{ height: '20px', width: 'auto' }}></div> */}
                    {/* <div className='AppOverViewButtonDiv'>
                        <div className='AppOverViewButtonDiv'>

                            <input
                                type="radio"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                checked={isChecked}
                                onChange={handleOnChange}
                                className="topping"
                            />

                            {isChecked ? <h2 className='AppOverViewHtext'>Email</h2>
                                :
                                <h2>Email</h2>}
                        </div>
                        <div className='AppOverViewButtonLastDiv'>
                            <input
                                type="radio"
                                id="topping"
                                name="topping"
                                value="Paneer"
                                className="topping"
                            />
                            {isChecked ? <h2 >Phone</h2>
                                :
                                <h2 className='AppOverViewHtext'>Phone</h2>}
                        </div>
                    </div> */}
                    <p style={{color:'red'}}>{Error}</p>
                    {/* <div className='AppOverViewFromBox'>
                    
                        {isChecked ? <input onChange={e=>{
                            setEmail(e.target.value)
                        }} className='AppOverViewFrom' type='email' placeholder='Email' />
                            :
                            <input className='AppOverViewFrom' type='number' placeholder='Phone' />}

                        <button onClick={sendEmail} className='AppOverViewFromButton'>

                            <p className='AppOverViewFromButtonP'>Send</p>
                        </button>
                    </div> */}

                    <div >
                        <h5 className='AppOverViewh5'>Download app from</h5>
                        <div className='AppOverViewLink'>
                            <div className='Footerimg'>
                                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.scientistx.smira"><img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' /></a>
                            </div>
                            <div className='FooterimgEnd'>
                                <a href="#"><img  src='https://www.nysora.com/wp-content/uploads/2020/04/apple-store-badge.png' /></a>
                            </div>
                        </div>
                    </div>
                   </div>
                </div> 
                {/* <img style={{
                    width: '100%'
                }} src={require('./content.png')}/> */}

        </div>
    );
};

export default AppOverView;