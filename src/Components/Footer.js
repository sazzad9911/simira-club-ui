import React from 'react';
import './css/Footer.css';
import {Link} from 'react-router-dom'
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
                    <div className='Footertxt'>
                        <h5 className='Footerfont-style'>COMPANY</h5>
                        {/* <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color: '#808080'}} to="/Career" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Careers</Link><br></br>
                        </div> */}
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="/Contact" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Contact</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Sitemap</Link>
                        </div>
                    </div> 
                    <div className='Footertxt'>
                        <h4 className='Footerfont-style'>For You</h4>
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="/Membership" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Membership</Link><br></br>
                        </div> 
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="/PrivacyPolicy" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Privacy</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="/TermsAndConditions" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Terms & Conditions</Link><br></br>
                        </div>
                        {/* <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Support</Link>
                        </div> */}
                    </div>
                    <div className='Footertxt'>
                        <h5 className='Footerfont-style'>DISCOVER</h5>
                        {/* <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Popular Deals</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">Popular Hotels</Link><br></br>
                        </div> */}
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="#" color="#808080" underline="none" fontSize={18} letterSpacing="0.03em">SmiraClub Member</Link><br></br>
                        </div>
                        <div className='Footerlink'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="/BusinessWithUs" color="#808080" underline="none" fontSize={18} fontWeight={400} letterSpacing="0.03em">Business With Us</Link>
                        </div>
                    </div>
                </div>
                <div className='footervl'></div>
                <div className='footerbox2'>
                    <p className='FooterHed'>Get the SmiraClub App</p>
                    <div className='FooterSmiraClub'>
                        <div className='Footerbodytwoone'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="/"><img className='Footer-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png' /></Link>
                        </div>
                        <div className='Footerbodytwoone'>
                            <Link style={{textDecoration: 'none',color:'#808080'}} to="/"><img className='Footer-img' src='https://www.nysora.com/wp-content/uploads/2020/04/apple-store-badge.png' /></Link>
                        </div>
                    </div>
                </div>
               {
                /*
                 <div  className='Footerbartwo'>
                <Coloredline color="#888" />
            </div>
                */
               }
               {/* <hr style={{
                height: '1px',
                width: '100%',
                backgroundColor: '#888'
               }}/>
            <div style={{width:'100%'}}>
                <p className='Footert'>By continuing past this page,
                    you agree to our Terms of Service, Cookie Policy,
                    Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2018-2022 © SmiraClub All rights reserved.
                </p>
            </div> */}
            </div>

            
        </div>
    );
};

export default Footer;