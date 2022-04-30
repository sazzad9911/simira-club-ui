import React from 'react';
import afaga from '../Asset/Font/afaga.png'
import './css/Notification.css'
import Button from '@mui/material/Button';
const Customer = () => {
    return (
        <div className='page-settings'>
            <h3 style={{ textAlign: 'center' }}>Customer Point</h3>
            <div className='page-add'>
                <div className='notification-up-area'>
                    <div>
                        <b>From:</b>
                        <p>MD. Sazzad Hossain</p>
                        <p>+8809232823231</p>
                        <p>sazzad@gmail.com</p>
                    </div>
                </div>
                <div className='notification-up-area'>
                    <div>
                        <b>Message</b>
                        <p>Date pickers and Time pickers allow selecting a single value from a pre-determined set.</p>
                        <p>12 Jan 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;