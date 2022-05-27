import React from "react";
import './css/JobDescription.css'
import Img from './Image/Careers.PNG'
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';


function JobDescription() {
    return (
        <div className="JobBody"> 
            <div className="JobBodyDiv">
                <img src={Img} className='JobImg' />
                <div className="JobImgDiv">
                    <h1 className="JobImgText">Careers</h1>
                </div>
            </div>
            <div className="JobBox">
                <div className="JobLeftBox">
                    <h2 className="JobText">Sale Associate</h2>
                    <div className="JobBoxDiv">
                        <button className="JobBoxFirstButton">Permanent</button>
                        <button className="JobBoxScendButton">Remote</button>
                        <button className="JobBoxThridButton">Sales</button>
                    </div>
                    <div className="JobTextBody">
                        <p className="JobPText">About Crew</p><br />
                        <p className="JobTextP"> In short : Crew is Superhuman for recruiting <br /><br />
                            Recruiting used to be 100% inbound, almost exclusively done by
                            recruiters, and all ATSs (Lever, Greenhouse, etc.) were built for
                            that. Today recruiting is a team sport, and primarily outbound.<br /><br />
                            Our mission is to build the next generation of recruiting CRMs. A
                            super powerful and exceptionally delightful All-in-One
                            recruitment platform, that empowers these teams to source,
                            engage, and close best candidates.<br /><br />
                            And we are going fast! We started the project with the
                            founders startup studio, opened the beta to a handful of users
                            few months ago, went through Y Combinator (Stripe, Airbnb,
                            Dropbox...), and raised our seed round with top tier US &
                            European investors.</p>
                    </div>
                    <div className="JobTextBody">
                        <p className="JobPText">What you will be doing:</p><br />
                        <p className="JobTextP">
                            As a business associate you will be the first Go-To-Market
                            person in the team. A strategic position at the heart of Crew
                            activity, and you'll have a great opportunity to work on very
                            various topics, such as:<br /><br />
                            Help grow the beta waiting list
                            Contribute to the Go-To-Market strategy and its execution
                            (Lead generation, Sales, Content...)
                            Carrying out data analysis and reporting to fuel fast iterations
                            Onboard users on the App
                            Setting up internal tools and processes to improve teams'
                            efficiency (sales, product, care...)
                            This list is not exhaustive as it is an agile role where you will be
                            asked to take up responsibilities based on the company'
                            priorities.</p>
                    </div>
                    <div className="JobTextBody">
                        <p className="JobPText">This might be for you if..</p><br />
                        <p className="JobTextP">
                            Education: you have a higher education degree, from a top-tier
                            business or engineering school.<br />
                            Efficiency: you are analytical and rigorous, very focused on
                            details, and you are fond of productivity tools.
                            Adaptability: you have a strong ability to adapt, you are curious
                            and independent<br />
                            Mindset: you have an entrepreneurial spirit, you like challenges,
                            you welcome feedback and you are willing to get better
                            everyday to reach excellence. You like to learn and surpass
                            yourself<br />
                            Problem solver: you are pragmatic and know how to solve
                            problems quickly.<br />
                            Language: you have an excellent level of English, as everything
                            we do at Crew is in English and our clients are internationals.<br />
                        </p>
                    </div>
                    <div className="JobTextBody">
                        <p className="JobPText">At Crew, you'll enjoy:</p><br />
                        <p className="JobTextP">
                            💰Competitive salary + stock-options.<br />
                            🏀Strong technical culture, entrepreneurial and strong team
                            spirit<br />
                            🌐We are a distributed/remote team - Work wherever you want<br />
                            💻High-end Apple hardware and ergonomic accessories (Apple
                            AirPods Max🎧, Herman Miller chair💺, and a standing desk, for a
                            perfect remote office setup).<br />
                            ✈️Quarterly team gathering somewhere in the world - Once we
                            can move freely of course.<br />
                        </p>
                    </div>
                </div>
                <div className="JobRightBox">
                    <div className="JobRightTextDiv">
                        <h2 className="JobPText">Application</h2>
                        <div className="JobRightInput">
                            <div>
                                <div className="JobRightInputDiv">
                                    <p style={{ opacity: .7 }}>First Name.</p>
                                    <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }} />
                                </div>
                                <div className="JobRightInputBoxDiv">
                                    <input className="JobRightInputBox" type='Text' placeholder='Fiest name' />
                                </div>
                            </div>
                            <div>
                                <div className="JobRightInputDiv">
                                    <p style={{ opacity: .7 }}>Last Name.</p>
                                    <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }} />
                                </div>
                                <div className="JobRightInputBoxDiv">
                                    <input className="JobRightInputBox" type='Text' placeholder='Last name' />
                                </div>
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>Mobile No.</p>
                                <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }} />
                            </div>
                            <div className="JobMobileBoxDiv">
                                <input className="JobMobileBox" type='Number' placeholder='Mobile No.' />
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>Email</p>
                                <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }} />
                            </div>
                            <div className="JobMobileBoxDiv">
                                <input className="JobMobileBox" type='Email' placeholder='Email' />
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>LinkedIn</p>
                                <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }} />
                            </div>
                            <div className="JobMobileBoxDiv">
                                <input className="JobMobileBox" type='Text' placeholder='LinkedIn' />
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>Current Job</p>
                            </div>
                            <div className="JobMobileBoxDiv">
                                <input className="JobMobileBox" type='Text' placeholder='Sales Executive @Zomato' />
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>Tell us more about you</p>
                            </div>
                            <div className="JobMobileBoxDiv">
                                <input className="JobMobileBox" type='Text' placeholder='Answer...' />
                            </div>
                        </div>

                        <Button style={{
                            width: '94%',
                            padding: '0px',
                            height: '50px',
                            marginTop: '30px',
                            marginLeft: '3%',
                            borderRadius: '10px',
                        }}>
                            <div className="JobBoxButtonx">
                                <p className="JobBoxButtonP">Submit</p>
                            </div>

                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;