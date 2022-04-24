import React from "react";
import './css/JobDescription.css'
import Img from './Image/Careers.PNG'
import StarIcon from '@mui/icons-material/Star';


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
                            Recruiting used to be 100% inbound, almost exclusively done by<br />
                            recruiters, and all ATSs (Lever, Greenhouse, etc.) were built for<br />
                            that. Today recruiting is a team sport, and primarily outbound.<br /><br />
                            Our mission is to build the next generation of recruiting CRMs. A<br />
                            super powerful and exceptionally delightful All-in-One<br />
                            recruitment platform, that empowers these teams to source,<br />
                            engage, and close best candidates.<br /><br />
                            And we are going fast! We started the project with the<br />
                            founders startup studio, opened the beta to a handful of users<br />
                            few months ago, went through Y Combinator (Stripe, Airbnb,<br />
                            Dropbox...), and raised our seed round with top tier US &<br />
                            European investors.</p>
                    </div>
                    <div className="JobTextBody">
                        <p className="JobPText">What you will be doing:</p><br />
                        <p className="JobTextP">
                            As a business associate you will be the first Go-To-Market<br />
                            person in the team. A strategic position at the heart of Crew<br />
                            activity, and you'll have a great opportunity to work on very<br />
                            various topics, such as:<br /><br />
                            Help grow the beta waiting list<br />
                            Contribute to the Go-To-Market strategy and its execution<br />
                            (Lead generation, Sales, Content...)<br />
                            Carrying out data analysis and reporting to fuel fast iterations<br />
                            Onboard users on the App<br />
                            Setting up internal tools and processes to improve teams'<br />
                            efficiency (sales, product, care...)<br />
                            This list is not exhaustive as it is an agile role where you will be<br />
                            asked to take up responsibilities based on the company'<br />
                            priorities.</p>
                    </div>
                    <div className="JobTextBody">
                        <p className="JobPText">This might be for you if..</p><br />
                        <p className="JobTextP">
                            Education: you have a higher education degree, from a top-tier<br />
                            business or engineering school.<br />
                            Efficiency: you are analytical and rigorous, very focused on<br />
                            details, and you are fond of productivity tools.<br />
                            Adaptability: you have a strong ability to adapt, you are curious<br />
                            and independent<br />
                            Mindset: you have an entrepreneurial spirit, you like challenges,<br />
                            you welcome feedback and you are willing to get better<br />
                            everyday to reach excellence. You like to learn and surpass<br />
                            yourself<br />
                            Problem solver: you are pragmatic and know how to solve<br />
                            problems quickly.<br />
                            Language: you have an excellent level of English, as everything<br />
                            we do at Crew is in English and our clients are internationals.<br />
                        </p>
                    </div>
                    <div className="JobTextBody">
                        <p className="JobPText">At Crew, you'll enjoy:</p><br />
                        <p className="JobTextP">
                            💰Competitive salary + stock-options.<br />
                            🏀Strong technical culture, entrepreneurial and strong team<br />
                            spirit<br />
                            🌐We are a distributed/remote team - Work wherever you want<br />
                            💻High-end Apple hardware and ergonomic accessories (Apple<br />
                            AirPods Max🎧, Herman Miller chair💺, and a standing desk, for a<br />
                            perfect remote office setup).<br />
                            ✈️Quarterly team gathering somewhere in the world - Once we<br />
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
                                    <p style={{ opacity: .7  }}>First Name.</p>
                                    <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }}/>
                                </div>
                                <div className="JobRightInputBoxDiv">
                                    <input className="JobRightInputBox" type='Text' placeholder='Fiest name' />
                                </div>
                            </div>
                            <div className="JobRightInputLeftDiv">
                                <div className="JobRightInputDiv">
                                    <p style={{ opacity: .7 }}>Last Name.</p>
                                    <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }}/>
                                </div>
                                <div className="JobRightInputBoxDiv">
                                    <input className="JobRightInputBox" type='Text' placeholder='Last name' />
                                </div>
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>Mobile No.</p>
                                <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }}/>
                            </div>
                            <div className="JobMobileBoxDiv">
                                <input className="JobMobileBox" type='Number' placeholder='Mobile No.' />
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>Email</p>
                                <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }}/>
                            </div>
                            <div className="JobMobileBoxDiv">
                                <input className="JobMobileBox" type='Email' placeholder='Email' />
                            </div>
                        </div>
                        <div className="JobInputMobileDiv">
                            <div className="JobInputMobileIconDiv">
                                <p style={{ opacity: .7 }}>LinkedIn</p>
                                <StarIcon className="JobRightInputIcon" sx={{ fontSize: 10 }}/>
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

                        <button className="JobBoxButtonx">
                            <p className="JobBoxButtonP">Submit</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDescription;