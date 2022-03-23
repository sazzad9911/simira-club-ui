import React from 'react';
import Icon from '../File/icon/icon.png'
import './css/Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';

const Header = () => {
    const width = window.innerWidth
    const user=useSelector(state=>state.User)

    return (
        <div className="header">
            <div className="header-top">
                <div>
                    <LocationOnIcon />
                    <p>Mumbai, Maharashtra</p>
                </div>
                <div style={{ marginRight: 50 }}>
                    <button style={{
                        borderRight: '1px solid #ffff'
                    }}>We are hiring!</button>
                    <button style={{
                        borderRight: '1px solid #ffff'
                    }}>How to use</button>
                    <button>Talk to us</button>
                </div>
            </div>
            <div className="header-bottom">
                <img src={Icon} />
                <div className='searchContainer' style={{ marginRight: 50 }}>
                    <input type="text" placeholder="Search" />
                    <SearchIcon />
                </div>
                <div style={{ marginRight: 50, }}>
                    <AddBoxIcon />
                    <div className='header-box'>
                        <h5>Became a Member</h5>
                        <p>Save more on Top Brands</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div style={{ marginRight: 50, }}>
                    <WorkOutlineIcon />
                    <div className='header-box'>
                        <h5>Business with us</h5>
                        <p>List your deal and property</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div style={{ marginRight: 50 }}>
                    {
                        user ?
                            (
                                <>
                                    <img src="http://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" />
                                    <div className='header-box'>
                                        <h5>Welcome, Bithi </h5>
                                        <p>Hope you are enjoying!</p>
                                    </div>
                                </>
                            ) : (
                                <Link href="/Login">
                                    <div style={{backgroundColor:'#ffff',width:120,height:60}}>
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