import React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import NetworkWifi3BarIcon from '@mui/icons-material/NetworkWifi3Bar';
import TvIcon from '@mui/icons-material/Tv';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Link,useParams } from 'react-router-dom';
import CCTV from '../Asset/Font/CCTV.svg'
import Wifi from '../Asset/Font/Free Wifi.svg'
import Gym from '../Asset/Font/Gym.svg'
import Parking from '../Asset/Font/Parking.svg'
import Swimming from '../Asset/Font/Swimming Pool.svg'
import TV from '../Asset/Font/TV.svg'
import free from './free.svg'

const SearchHotelCart = (props) => {
    const conditions = props.data.conditions.split(',')
    return (
        <div >
            <div style={{
                display: 'flex',
                width: '100%',
            }}>
                <img style={{
                        height: '250px',
                        width: '40%',
                        borderRadius: '15px',
                    }} src={props.data.image} alt="img1" />
                <div style={{
                    height: '250px',
                    width: '60%',
                    marginLeft: '20px'
                }}>
                    <h3 style={{
                        marginBottom: '3px' 
                    }}>{props.data.name}</h3>
                    <p style={{
                        color: '#585858',
                        margin: '0px'
                    }}>{props.data.address}</p>
                    <div style={{
                        width: '40px',
                        height: '20px',
                        backgroundColor: '#64B657',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:'10px',
                        marginBottom:'10px'

                    }}>
                        <StarIcon style={{ color: '#fff' }} fontSize='small' sx={{ fontSize: 15, }} />
                        <p style={{
                            color: 'white',
                            margin: '0px',
                            fontSize: '11.5px',
                            marginLeft:'2px'
                        }}>
                            {props.data.ratings}
                        </p>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center', 
                    }}>
                        {
                            conditions ? (
                                conditions.map((cond, i) => {
                                    if (cond == 'wifi') {
                                        return (
                                            <div key={i} style={{
                                                height: '40px',
                                                width: '40px',
                                                borderRadius: '20px',
                                                backgroundColor: '#F5F5F5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '8px'
                                            }}>
                                                <img src={Wifi} />
                                            </div>
                                        )
                                    } else if (cond == 'tv') {
                                        return (
                                            <div key={i} style={{
                                                height: '40px',
                                                width: '40px',
                                                borderRadius: '20px',
                                                backgroundColor: '#f5f5f5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '8px'
                                            }}>
                                                <img src={TV} />
                                            </div>
                                        )
                                    } else if(cond=='parking') {
                                        return (
                                            <div key={i} style={{
                                                height: '40px',
                                                width: '40px',
                                                borderRadius: '20px',
                                                backgroundColor: '#f5f5f5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '8px'
                                            }}>
                                                <img src={Parking} />
                                            </div>
                                        )
                                    }else if (cond == 'cctv'){
                                        return (
                                            <div key={i} style={{
                                                height: '40px',
                                                width: '40px',
                                                borderRadius: '20px',
                                                backgroundColor: '#f5f5f5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '8px'
                                            }}>
                                                <img src={CCTV} />
                                            </div>
                                        )
                                    }else if(cond=='gym'){
                                        return (
                                            <div key={i} style={{
                                                height: '40px',
                                                width: '40px',
                                                borderRadius: '20px',
                                                backgroundColor: '#f5f5f5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '8px'
                                            }}>
                                                <img src={Gym} />
                                            </div>
                                        )
                                    }
                                    else{
                                        return (
                                            <div key={i} style={{
                                                height: '40px',
                                                width: '40px',
                                                borderRadius: '20px',
                                                backgroundColor: '#f5f5f5',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '8px'
                                            }}>
                                                <img src={Swimming} />
                                            </div>
                                        )
                                    }
                                })
                            ):(
                                <div></div>
                            )
                    }
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}>
                        <div>
                            <Link style={{
                                textDecoration: 'none'
                            }} to={'/ShowcaseHotel'+'/'+props.data.id} underline='none' color='inherit'>
                                <Button style={{
                                    background: '#FC444B',
                                    padding: '0px',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '35px',
                                    width: '40px',
                                    padding: '3px'
                                }}>
                                    <p style={{
                                        color: 'white',
                                        fontSize: '12px',
                                        margin: '0px'
                                    }}>VIEW
                                    </p>
                                </Button>
                            </Link>

                        </div>
                        <div style={{
                            marginLeft: '5px',
                            marginRight: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img src={free}/>
                        </div>
                        <div>
                            <p style={{
                                color: '#808080',
                                fontSize: '12px',
                                margin: '0px'
                            }}>{props.data.type}</p>
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
