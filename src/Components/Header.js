import React, { useRef } from 'react';
import Icon from '../File/icon/icon.png'
import './css/Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import member from '../File/icon/member.png'
import business from '../File/icon/business.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WebIcon from '@mui/icons-material/Web';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HotelIcon from '@mui/icons-material/Hotel';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

const Header = () => {
    const width = window.innerWidth
    const user = useSelector(state => state.User)
    const [height, setHeight] = React.useState('66px')
    let name = ''
    if (user) {
        name = user[0].name.split(' ')
        name = name[0]
    }


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
            <div style={{ height: height }} className="header-bottom">
                <div className='header-content'>
                    <Link href='/' color={'inherit'} underline='none'>
                        <img src={Icon} />
                    </Link>
                    <Link href='/Search' underline='none' color="inherit">
                        <div className='searchContainer' style={{ marginRight: 50 }}>
                            <input type="text" placeholder="Search" />
                            <SearchIcon />
                        </div>
                    </Link>
                    <button onClick={(e) => {
                        setHeight(height == 'auto' ? '66px' : 'auto');
                    }} id='noDiv'>
                        <MenuIcon />
                    </button>
                </div>
                <div className='header-content' style={{ marginRight: 50, }}>
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
                <div id='div' className='divider'></div>
                <Link href='/BusinessWithUs' underline='none' color='inherit'>
                    <div className='header-content' style={{ marginRight: 50, cursor: 'pointer' }}>
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
                <div id='div' className='divider'></div>
                <div className='header-content' style={{ marginRight: 50 }}>
                    {
                        user ?
                            (
                                <Link href="/Profile" underline='none'>
                                    <div style={{ display: 'flex' }}>
                                        <img src={user[0].image ? user[0].image : 'https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2-2.png'} />
                                        <div className='header-box'>
                                            <h5>Welcome, {name} </h5>
                                            <p>Hope you are enjoying!</p>
                                        </div>
                                    </div>
                                </Link>

                            ) : (
                                <Link underline="none" href="/Login" color="inherit">
                                    <div style={{
                                        backgroundColor: '#ffff',
                                        width: 120,
                                        height: 60,
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginLeft: 10
                                    }}>
                                        <LogoutIcon />
                                        <h5 style={{
                                            marginLeft: 20
                                        }}>Log In</h5>
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

export const AdminHeader = (props) => {
    const drawer = props.drawer
    return (
        <div id='drawer' style={{
            minWidth: '50px',
            height: '100%',
            backgroundColor: '#FC444B',
            overflowY: 'scroll',
            padding: '10px',
            bottom: '0',
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <button onClick={() => {
                    props.setDrawer(!drawer)
                }} style={{
                    backgroundColor: '#FC444B',
                    outline: 'none',
                    border: 'none',
                    width:'50px'
                }}>
                    <CloseFullscreenIcon style={{ color: '#ffff' }} />
                </button>
            </div>

            <div onClick={()=>props.setOption('Dashboard')} id="container">
                <DashboardIcon />
                {
                    drawer ? (
                        <p>Dashboard</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>

            <div onClick={()=>props.setOption('Page Settings')} id="container">
                <WebIcon />
                {
                    drawer ? (
                        <p>Page Settings</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div onClick={()=>props.setOption('Hotels')} id="container">
                <HotelIcon />
                {
                    drawer ? (
                        <p>Hotels</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div onClick={()=>props.setOption('Brands')} id="container">
                <BookmarkBorderIcon />
                {
                    drawer ? (
                        <p>Brands</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div onClick={()=>props.setOption('Membership')} id="container">
                <AccountCircleIcon />
                {
                    drawer ? (
                        <p>Membership</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div onClick={()=>props.setOption('Notifications')} id="container">
                <NotificationsIcon />
                {
                    drawer ? (
                        <p>Notifications</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div onClick={()=>props.setOption('Customer Point')} id="container">
                <SupportAgentIcon />
                {
                    drawer ? (
                        <p>Customer Point</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
        </div>
    )
}
