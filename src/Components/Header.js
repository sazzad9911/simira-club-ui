import React, { useRef } from 'react';
import Icon from '../File/icon/icon.png'
import './css/Header.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
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
import {Link} from 'react-router-dom'

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
                <div>
                    <Link to='/Career' underline='none'  color='inherit'>
                        <button style={{
                            borderRight: '1px solid #ffff'
                        }}>We are hiring!</button>
                    </Link>
                    <button style={{
                        borderRight: '1px solid #ffff'
                    }}>How to use</button>
                    <Link to='/Contact' underline='none' color='inherit'>
                        <button>Talk to us</button>
                    </Link>
                </div>
            </div>
            <div style={{ height: height }} className="header-bottom">
                <div className='header-content'>
                    <Link to='/' color={'inherit'} style={{marginLeft:'30px' }}  underline='none'>
                        <img src={Icon} />
                    </Link>
                    <Link to='/Search' underline='none' color="#585858">
                        <div className='searchContainer' style={{ marginRight: 50 }}>
                            <input type="text" placeholder="Search" />
                            <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Search">
                                    <path id="Ellipse_739 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M10.238 1.99855C5.84189 1.99855 2.27811 5.45434 2.27811 9.71727C2.27811 13.9802 5.84189 17.436 10.238 17.436C14.6342 17.436 18.198 13.9802 18.198 9.71727C18.198 5.45434 14.6342 1.99855 10.238 1.99855ZM0.339966 9.71727C0.339966 4.41637 4.77148 0.119141 10.238 0.119141C15.7046 0.119141 20.1361 4.41637 20.1361 9.71727C20.1361 15.0182 15.7046 19.3154 10.238 19.3154C4.77148 19.3154 0.339966 15.0182 0.339966 9.71727Z" fill="#585858" />
                                    <path id="Line_181 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M15.7621 15.5251C16.14 15.1577 16.7536 15.1569 17.1325 15.5234L20.6332 18.9092C21.0122 19.2757 21.0129 19.8707 20.635 20.2381C20.257 20.6056 19.6435 20.6063 19.2645 20.2398L15.7639 16.8541C15.3849 16.4876 15.3841 15.8926 15.7621 15.5251Z" fill="#585858" />
                                </g>
                            </svg>
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
                    <Link to='/SignUp' color="inherit" underline='none'>
                        <div className='header-box'>
                            <h5>Became a Member</h5>
                            <p>Save more on Top Brands</p>
                        </div>
                    </Link>
                </div>
                <div id='div' className='divider'></div>
                <Link to='/BusinessWithUs' underline='none' color='inherit'>
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
                <div className='header-content' style={{ marginRight: 100 }}>
                    {
                        user ?
                            (
                                <Link to="/Profile" underline='none'>
                                    <div style={{ display: 'flex' }}>
                                        <img src={user[0].image ? user[0].image : 'https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2-2.png'} />
                                        <div className='header-box'>
                                            <h5>Welcome, {name} </h5>
                                            <p>Hope you are enjoying!</p>
                                        </div>
                                    </div>
                                </Link>

                            ) : (
                                <Link underline="none" to="/Login" color="inherit">
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
                    width: '50px'
                }}>
                    <CloseFullscreenIcon style={{ color: '#ffff' }} />
                </button>
            </div>

            <div style={{
                opacity: props.option == 'Dashboard' ? .4 : 1
            }} onClick={() => props.setOption('Dashboard')} id="container">
                <DashboardIcon />
                {
                    drawer ? (
                        <p>Dashboard</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>

            <div style={{
                opacity: props.option == 'Page Settings' ? .4 : 1
            }} onClick={() => props.setOption('Page Settings')} id="container">
                <WebIcon />
                {
                    drawer ? (
                        <p>Page Settings</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div style={{
                opacity: props.option == 'Hotels' ? .4 : 1
            }} onClick={() => props.setOption('Hotels')} id="container">
                <HotelIcon />
                {
                    drawer ? (
                        <p>Hotels</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div style={{
                opacity: props.option == 'Brands' ? .4 : 1
            }} onClick={() => props.setOption('Brands')} id="container">
                <BookmarkBorderIcon />
                {
                    drawer ? (
                        <p>Brands</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div style={{
                opacity: props.option == 'Membership' ? .4 : 1
            }} onClick={() => props.setOption('Membership')} id="container">
                <AccountCircleIcon />
                {
                    drawer ? (
                        <p>Membership</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div style={{
                opacity: props.option == 'Notifications' ? .4 : 1
            }} onClick={() => props.setOption('Notifications')} id="container">
                <NotificationsIcon />
                {
                    drawer ? (
                        <p>Notifications</p>
                    ) : (
                        <p></p>
                    )
                }
            </div>
            <div style={{
                opacity: props.option == 'Customer Point' ? .4 : 1
            }} onClick={() => props.setOption('Customer Point')} id="container">
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
