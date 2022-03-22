import React from 'react';
import './css/AppOverView.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const AppOverView = () => {
    
    return (
        <div className='AppOverViewBody'>
            <div className='AppOverViewLaftDiv'>

            </div>
            <div className='AppOverViewRightDiv'>
                <div style={{marginTop:'50px'}}>
                    <text className='AppOverViewBigText'>Get The SmiraClub App</text>
                    <div>
                        <p>
                            We'll send you a link that you can open on your phone to<br></br>
                            download the app.
                        </p>
                    </div>

                </div>
                <div style={{height: '20px',width: 'auto'}}></div>
                <div className='AppOverViewButtonDiv'>
                    <div className='AppOverViewButtonDiv'>
                        <button className='AppOverViewButton'>
                            <CheckCircleIcon className='AppOverViewIcon' />
                        </button>
                        <h2 className='AppOverViewHtext'>Email</h2>
                    </div>
                    <div className='AppOverViewButtonLastDiv'>
                        <button className='AppOverViewButton'></button>
                        <h2>Phone</h2>
                    </div>
                </div>
                <div className='AppOverViewFromBox'>
                    <input className='AppOverViewFrom' type='text' placeholder='Email'/>
                    <button className='AppOverViewFromButton'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default AppOverView;