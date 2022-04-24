import React from 'react';
import './css/AppOverView.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from '@mui/material/Link';
import Photo from './css/Mockup (Will be updated later).png'
import { Checkbox } from '@mui/material';
import { useState } from "react";



const AppOverView = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='AppOverViewBody'>
            <div className='AppOverViewLaftDiv'>
                <img className='AppOverViewImg' src={Photo} />
            </div>
            <div className='AppOverViewRightDiv'>
                <div>
                    <h2 className='AppOverViewBigText'>Get The SmiraClub App</h2>
                    <div>
                        <p className='AppOverViewSamllText'>
                            We'll send you a link that you can open on your phone to<br></br>
                            download the app.
                        </p>
                    </div>

                </div>
                <div style={{ height: '20px', width: 'auto' }}></div>
                <div className='AppOverViewButtonDiv'>
                    <div className='AppOverViewButtonDiv'>

                        <input
                            type="checkbox"
                            id="topping"
                            name="topping"
                            value="Paneer"
                            checked={isChecked}
                            onChange={handleOnChange}
                            className="topping"
                        />
                        
                        {isChecked ? <h2 className='AppOverViewHtext'>Email</h2>
                        :
                        <h2>Email</h2>}
                    </div>
                    <div className='AppOverViewButtonLastDiv'>
                        <input
                            type="checkbox"
                            id="topping"
                            name="topping"
                            value="Paneer"
                            className="topping"
                        />
                        {isChecked ? <h2 >Phone</h2>
                        :
                        <h2 className='AppOverViewHtext'>Phone</h2>}
                    </div>
                </div>
                <div className='AppOverViewFromBox'>
                    {isChecked ? <input className='AppOverViewFrom' type='email' placeholder='Email' />
                        :
                        <input className='AppOverViewFrom' type='number' placeholder='Phone' />}

                    <button className='AppOverViewFromButton'>

                        <p className='AppOverViewFromButtonP'>Send</p>
                    </button>
                </div>

                <div >
                    <h5 className='AppOverViewh5'>Download app from</h5>
                    <div className='AppOverViewLink'>
                        <div >
                            <Link href="/"><img className='Footerimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' /></Link>
                        </div>
                        <div >
                            <Link href="/"><img className='FooterimgEnd' src='https://www.nysora.com/wp-content/uploads/2020/04/apple-store-badge.png' /></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AppOverView;