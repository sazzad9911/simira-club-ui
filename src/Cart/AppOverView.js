import React from 'react';
import './css/AppOverView.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from '@mui/material/Link';
import photo from './css/photo.jpeg';

const AppOverView = () => {

    return (
        <div className='AppOverViewBody'>
            <div className='AppOverViewLaftDiv'>
                <img className='AppOverViewImg' src={photo} />
            </div>
            <div className='AppOverViewRightDiv'>
                <div style={{ marginTop: '50px' }}>
                    <h2 className='AppOverViewBigText'>Get The SmiraClub App</h2>
                    <div>
                        <p>
                            We'll send you a link that you can open on your phone to<br></br>
                            download the app.
                        </p>
                    </div>

                </div>
                <div style={{ height: '20px', width: 'auto' }}></div>
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
                    <input className='AppOverViewFrom' type='text' placeholder='Email' />
                    <button className='AppOverViewFromButton'>Send</button>
                </div>

                <div style={{ margin: '50px', }}>
                    <h5 className='AppOverViewh5'>Download app from</h5>
                    <div className='AppOverViewLink'>
                        <div >
                            <Link href="/"><img className='Footerimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' /></Link>
                        </div>
                        <div >
                            <Link href="/"><img className='Footerimg' src='https://www.nysora.com/wp-content/uploads/2020/04/apple-store-badge.png' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppOverView;