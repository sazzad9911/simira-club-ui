import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './css/MyProfile.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const MyProfile = (props) => {

    return (
        <div className='MyProfileBody'>
            <Header />
            <div className='MyProfileDiv'>
                <div>
                    <h2>MyProfile</h2>
                </div>
                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <PermIdentityIcon className='MyProfileIcon' />

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='text' placeholder='Name' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <LocalPhoneIcon className='MyProfileIcon'/>

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='number' placeholder='Phone' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIconEmail'>
                        <MailOutlineIcon className='MyProfileIcon'/>

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInputEmail' type='Email' placeholder='Email' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <LocalPhoneIcon className='MyProfileIcon'/>

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='number' placeholder='Phone' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <LocalPhoneIcon className='MyProfileIcon'/>

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='number' placeholder='Phone' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <LocalPhoneIcon className='MyProfileIcon'/>

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='number' placeholder='Phone' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyProfile;