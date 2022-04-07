import React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import NetworkWifi3BarIcon from '@mui/icons-material/NetworkWifi3Bar';
import TvIcon from '@mui/icons-material/Tv';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const SearchHotelCart = (props) => {
    return (
        <div >
            <div style={{
                display: 'flex',
            }}>
                <div >
                    <img style={{
                        height: '250px',
                        width: '350px',
                        borderRadius: '15px',
                    }} src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="img1" />
                    
                </div>
                <div style={{
                    height: '250px',
                    width: '210px',
                    marginLeft:'20px'
                }}>
                    <h3 style={{
                        marginBottom: '3px'
                    }}>Shradha Saburi  Palace</h3>
                    <p style={{
                        color: '#585858',
                        margin: '0px'
                    }}>Shirdi, Maharashtra</p>
                    <div style={{
                        width: '40px',
                        height: '20px',
                        backgroundColor: '#64B657',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '10px',
                        paddingLeft: '4px',
                        paddingRight: '5px',
                        marginTop: '15px',
                        marginBottom: '15px'

                    }}>
                        <StarIcon style={{ color: '#fff' }} fontSize='small' sx={{ fontSize: 15, }} />
                        <p style={{
                            color: 'white',
                            margin: '0px',
                            fontSize: '11.5px'
                        }}>
                            4.3
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '20px',
                            backgroundColor: '#ebe6e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '8px'
                        }}>
                            <NetworkWifi3BarIcon color="action" sx={{ fontSize: 20, }} />
                        </div>
                        <div style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '20px',
                            backgroundColor: '#ebe6e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '8px'
                        }}>
                            <TvIcon color="action" sx={{ fontSize: 20, }} />
                        </div>
                        <div style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '20px',
                            backgroundColor: '#ebe6e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '8px'
                        }}>
                            <LocalParkingIcon color="action" sx={{ fontSize: 20, }} />
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}>
                        <div>
                            <Button style={{
                                background: '#FC444B',
                                padding: '0px',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '30px',
                                width: '40px',
                                padding: '3px'
                            }}>
                                <p style={{
                                    color: 'white',
                                    fontSize: '12px'
                                }}>VIEW
                                </p>
                            </Button>
                        </div>
                        <div style={{
                          marginLeft:'5px',
                          marginRight:'5px'
                        }}>
                            <AutoFixHighIcon style={{ color: '#64B657' }} sx={{ fontSize: 20, }}/>
                        </div>
                        <div>
                            <p style={{
                                color:'#808080',
                                fontSize:'12px',
                                margin:'0px'
                            }}>Free for Members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                border: 'none',
                backgroundColor: '#D8D8D8',
                display: 'flex',
                height: '1.5px',
                width: '98%',
                marginTop: '20px',
                marginBottom: '20px'
            }}>

            </div>
        </div>
    );
};

export default SearchHotelCart;
