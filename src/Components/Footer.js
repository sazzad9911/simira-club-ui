import React from 'react';
import './css/Footer.css';
import Link from '@mui/material/Link';


const Coloredline = ({ color }) => (
    <hr
        style={{
            color,
            backgroundColor: color,
            height: 1
        }}
    />
);
const Footer = () => {
    return (
        <div>
            <div className='Footerbodyf'>
                <div className='footerbox'>
                    <div className='Footertxt'><h5>COMPANY</h5>
                        <Link href="/" color="inherit" underline="none">Careers</Link><br></br>
                        <Link href="/" color="inherit" underline="none">Contact</Link><br></br>
                        <Link href="/" color="inherit" underline="none">Sitemap</Link>
                    </div>
                    <div className='Footertxt'><h4>For You</h4>
                        <Link href="/" color="inherit" underline="none">Membership</Link><br></br>
                        <Link href="/" color="inherit" underline="none">Privacy</Link><br></br>
                        <Link href="/" color="inherit" underline="none">Tems</Link><br></br>
                        <Link href="/" color="inherit" underline="none">Support</Link>
                    </div>
                    <div className='Footertxt'><h5>DISCOVER</h5>
                        <Link href="/"  color="inherit" underline="none">Popular Deals</Link><br></br>
                        <Link href="/" color="inherit" underline="none">Popular Hotels</Link><br></br>
                        <Link href="/" color="inherit" underline="none">SmiraClub Member</Link><br></br>
                        <Link href="/" color="inherit" underline="none">Business With Us</Link>
                    </div>
                </div>
                <div className='footervl'></div>
                <div className='footerbox2'>
                    <p className='FooterHed'>Get the SmiraClub App</p>
                    <div className='FooterSmiraClub'>
                        <div className='Footerbodytwoone'>
                            <Link href="/"><img className='Footerimg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' /></Link>
                        </div>
                        <div className='Footerbodytwoone'>
                            <Link href="/"><img className='Footerimg' src='https://www.nysora.com/wp-content/uploads/2020/04/apple-store-badge.png' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Footerbartwo'>
                <Coloredline color="#888" />
            </div>
            <div>
                <p>By continuing past this page,
                    you agree to our Terms of Service, Cookie Policy,
                    Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2018-2022 © SmiraClub All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;