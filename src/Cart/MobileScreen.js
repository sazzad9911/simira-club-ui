import React from 'react';
import './css/mobileScreen.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Photo from './css/Mockup (Will be updated later).png'
import { Checkbox } from '@mui/material';
import { useState } from "react";
import { getAuth } from 'firebase/auth';
import app from './../firebase';
import {postData, url} from '../action'
import logo from './logo.svg'
import { Link } from 'react-router-dom';

const MobileScreen = () => {

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
        <div className='mobileScreen-body'>
                <img className='AppOverViewImg' src={logo} />
                <h2 className='AppOverViewBigText'>SmiraClub App</h2>
                <h5 className='AppOverViewh5'>Download app from</h5>
                <div className='Footerimg2'>
                        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.scientistx.smira"><img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' /></a>
                    </div>
                    <div style={{
                        marginBottom: '50px'
                    }} className='Footerimg2'>
                         <a href="#"><img  src='https://www.nysora.com/wp-content/uploads/2020/04/apple-store-badge.png' /></a>
                </div>
        </div>
    );
};

export default MobileScreen;