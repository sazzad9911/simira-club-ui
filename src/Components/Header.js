import React from 'react';
import Icon from '../File/icon/icon.png'
import './css/Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import member from '../File/icon/member.png'
import business from '../File/icon/business.png'

const Header = () => {
    const width = window.innerWidth
    const user = useSelector(state => state.User)

    return (
        <div className="header">
            <div className="header-top">
                <div>
                    <LocationOnIcon />
                    <p>Mumbai, Maharashtra</p>
                </div>
                <div style={{ marginRight: 50 }}>
                    <Link href='/Career' underline='none' color='inherit'>
                        <button style={{
                            borderRight: '1px solid #ffff'
                        }}>We are hiring!</button>
                    </Link>
                    <button style={{
                        borderRight: '1px solid #ffff'
                    }}>How to use</button>
                    <Link href='/Contact' underline='none' color='inherit'>
                        <button>Talk to us</button>
                    </Link>
                </div>
            </div>
            <div className="header-bottom">
                <Link href='/' color={'inherit'} underline='none'>
                    <img src={Icon} />
                </Link>
                <Link href='/Search' underline='none' color="inherit">
                    <div className='searchContainer' style={{ marginRight: 50 }}>
                        <input type="text" placeholder="Search" />
                        <SearchIcon />
                    </div>
                </Link>
                <div style={{ marginRight: 50, }}>
                    <img style={{
                        width: 35,
                        height: 35
                    }} src={member} />
                    <Link href='/SignUp' color="inherit" underline='none'>
                        <div className='header-box'>
                            <h5>Became a Member</h5>
                            <p>Save more on Top Brands</p>
                        </div>
                    </Link>
                </div>
                <div className='divider'></div>
                <Link href='/BusinessWithUs' underline='none' color='inherit'>
                    <div style={{ marginRight: 50, cursor: 'pointer' }}>
                        <img style={{
                            width: 35,
                            height: 35
                        }} src={business} />
                        <div className='header-box'>
                            <h5>Business with us</h5>
                            <p>List your deal and property</p>
                        </div>
                    </div>
                </Link>
                <div className='divider'></div>
                <div style={{ marginRight: 50 }}>
                    {
                        user ?
                            (
                                <Link href="/Profile" underline='none'>
                                    <div style={{ display: 'flex' }}>
                                        <img src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" />
                                        <div className='header-box'>
                                            <h5>Welcome, Bithi </h5>
                                            <p>Hope you are enjoying!</p>
                                        </div>
                                    </div>
                                </Link>

                            ) : (
                                <Link underline="none" href="/Login">
                                    <div style={{ backgroundColor: '#ffff', width: 120, height: 60 }}>
                                        <LogoutIcon />
                                        <h5>Log In</h5>
                                    </div>
                                </Link>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;