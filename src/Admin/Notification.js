import React from 'react';
import afaga from '../Asset/Font/afaga.png'
import './css/Notification.css'
import Button from '@mui/material/Button';

const Notification = () => {
    return (
        <div className='page-settings'>
            <h3 style={{ textAlign: 'center' }}>Notifications</h3>
            <div className='page-add'>
                <h4>Hotel Booking Request</h4>
                <div className='notification-up-area'>
                    <img src={afaga} />
                    <div>
                        <p>MD. Sazzad Hossain</p>
                        <p><b>Gold </b>Membership</p>
                    </div>
                </div>
                <div className='notification-up-area'>
                    <p><b>Check In Date: </b>12 Jan 2022</p>
                    <p><b>Check Out Date: </b>12 Jan 2022</p>
                </div>
                <div className='notification-up-area'>
                    <p><b>Adult: </b>2</p>
                    <p><b>Children: </b>0</p>
                    <p><b>Room: </b>1</p>
                </div>
                <h4>Hotel Information</h4>
                <div className='notification-up-area'>
                    <p>Hotel North View</p>
                    <p>Rangpur, Dhaka, Bangladesh</p>
                    <p><b>Hotel ID: </b>1</p>
                </div>
                <div className="notification-bottom">
                    <Button color='secondary' style={{
                        marginBottom: '20px',
                        margin: '10px'
                    }} variant='contained'>Accept</Button>
                    <Button style={{
                        marginBottom: '20px',
                        margin: '10px'
                    }} variant='contained'>Reject</Button>
                </div>
            </div>
        </div>
    );
};

export default Notification;