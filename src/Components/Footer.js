import React from 'react';
import './css/Footer.css';
import Link from '@mui/material/Link';
import styled from '@emotion/styled';


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
                    <div className='Footertxtt'>
                        <h5 className='Footerfont-style'>COMPANY</h5>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Careers</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Contact</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Sitemap</Link>
                        </div>
                    </div>
                    <div className='Footertxt'>
                        <h4 className='Footerfont-style'>For You</h4>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Membership</Link><br></br>
                        </div> 
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Privacy</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Tems</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Support</Link>
                        </div>
                    </div>
                    <div className='Footertxt'>
                        <h5 className='Footerfont-style'>DISCOVER</h5>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Popular Deals</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Popular Hotels</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">SmiraClub Member</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link href="#" color="#808080" underline="none" fontSize={18} fontWeight={400} letterSpacing="0.03em">Business With Us</Link>
                        </div>
                    </div>
                </div>
                <div className='footervl'></div>
                <div className='footerbox2'>
                    <p className='FooterHed'>Get the SmiraClub App</p>
                    <div className='FooterSmiraClub'>
                        <div className='Footerbodytwoone'>
                            <Link href="/"><img className='Footer-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' /></Link>
                        </div>
                        <div className='Footerbodytwoone'>
                            <Link href="/"><img className='Footer-img' src='https://www.nysora.com/wp-content/uploads/2020/04/apple-store-badge.png' /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Footerbartwo'>
                <Coloredline color="#888" />
            </div>
            <div>
                <p className='Footert'>By continuing past this page,
                    you agree to our Terms of Service, Cookie Policy,
                    Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2018-2022 © SmiraClub All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;