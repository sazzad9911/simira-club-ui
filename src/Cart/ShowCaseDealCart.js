import React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import '../Cart/css/ShowCaseDealCart.css'

const ShowCaseDealCart = () => {
    return (
        <div>
            <div className='mainbody'>
                <div>
                    <img className="img61" src="https://etimg.etb2bimg.com/thumb/msid-83333101,imgsize-289635,width-1200,height-900,overlay-etbrandequity/ovenstory-pizza-s-new-campaign-highlights-real-issues-of-mainstream-pizza.jpg" alt="img1" />
                </div>
                <div>
                    <p className='headText'>Flat 35 % OFF On All Orders</p>
                </div>
                <div className='offercode'>
                    <p>SMP275</p>
                </div>
                <Button >
                    <div className='offercodebutton'>
                        <p style={{ color: 'red' }}>COPY CODE</p>
                    </div>
                </Button>
            </div>
            <div style={{marginLeft:'20px'}}>
                <h4>Terms and Conditions</h4>
                <p>
                    We are happy to serve you special offers with the following terms and conditions:<br></br>
                    • It is the responsibility of a customer to read, understand and remain knowledgeable of the terms and conditions.<br></br>
                    • This offer cannot be combined with any other offer, promotion or discount applicable to the participating partners.<br></br>
                    • This offer booklet cannot be encashed, refunded or extended.<br></br>
                    • Customer has to use this offer within the mentioned validity period.<br></br>
                    • This voucher is valid on all days.<br></br>
                </p>
                <Button underline='false'>
                    <p style={{ color: 'red' }}>Read more</p>
                </Button>

            </div>
        </div>
    );
};

export default ShowCaseDealCart; 