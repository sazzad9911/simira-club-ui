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
                    <div>
                        <h2>Sale Associate</h2>
                        <div className="JobBoxDiv">
                            <button className="JobBoxFirstButton">Permanent</button>
                            <button className="JobBoxScendButton">Remote</button>
                            <button className="JobBoxThridButton">Sales</button>
                        </div>
                    </div>
                </div>
                <div className="JobRightBox">sss</div>
            </div>
        </div>
    );
}

export default JobDescription;