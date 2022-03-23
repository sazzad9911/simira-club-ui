import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './css/MyProfile.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const MyProfile = (props) => {

    return (
        <div className='MyProfileBody'>
            <div className='MyProfileDiv'>
                <div className='MyProfileText'>
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
                        <LocalPhoneIcon className='MyProfileIcon' />

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='number' placeholder='Phone' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIconEmail'>
                        <MailOutlineIcon className='MyProfileIcon' />

                    </div>
                    <div className='MyProfileInputBoxEmail'>
                        <input className='MyProfileInputEmail' type='Email' placeholder='Email' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <FemaleIcon className='MyProfileIcon' />

                    </div>
                    <div className='MyProfileInputBox'>
                        <select className='MyProfileSelect'>
                            <option value="saab">Male</option>
                            <option value="opel">Female</option>
                            <option value="audi">Other</option>
                        </select>
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <CalendarMonthIcon className='MyProfileIcon' />

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='text' placeholder='Calendar' />
                    </div>
                </div>

                <div className='MyProfileBox'>
                    <div className='MyProfileBoxIcon'>
                        <LocationOnIcon className='MyProfileIcon' />

                    </div>
                    <div className='MyProfileInputBox'>
                        <input className='MyProfileInput' type='text' placeholder='Location' />
                    </div>
                </div>
                <div className='MyProfileText'>
                    <button variant="text" className='MyProfileTextLeftButton'>Forgot password?</button>
                    <button variant="text" className='MyProfileTextRightButton'>Change password</button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;