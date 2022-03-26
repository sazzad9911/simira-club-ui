import React from "react";
import './css/JobDescription.css'
import Img from './Image/Careers.PNG'


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
                    <h2>Sale Associate</h2>
                    <div className="JobBoxDiv">
                        <button className="JobBoxFirstButton">Permanent</button>
                        <button className="JobBoxScendButton">Remote</button>
                        <button className="JobBoxThridButton">Sales</button>
                    </div>
                    <div className="JobTextBody">
                        <h2>About Crew</h2><br/>
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
                        <h2>What you will be doing:</h2><br/>
                        <p className="JobTextP"> 
                            As a business associate you will be the first Go-To-Market<br/>
                            person in the team. A strategic position at the heart of Crew<br/>
                            activity, and you'll have a great opportunity to work on very<br/>
                            various topics, such as:<br/><br/>
                            Help grow the beta waiting list<br/>
                            Contribute to the Go-To-Market strategy and its execution<br/>
                            (Lead generation, Sales, Content...)<br/>
                            Carrying out data analysis and reporting to fuel fast iterations<br/>
                            Onboard users on the App<br/>
                            Setting up internal tools and processes to improve teams'<br/>
                            efficiency (sales, product, care...)<br/>
                            This list is not exhaustive as it is an agile role where you will be<br/>
                            asked to take up responsibilities based on the company'<br/>
                            priorities.</p>
                    </div>
                </div>
                <div className="JobRightBox">sss</div>
            </div>
        </div>
    );
}

export default JobDescription;