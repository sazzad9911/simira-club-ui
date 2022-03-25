import React from "react";
import './css/Careers.css'
import Img from './Image/Careers.PNG'

function Career() {
    return (
        <div className="CareerBody">
            <div className="CareerBodyDiv">
                <img src={Img} className='CareerImg' />
                <div className="CareerImgDiv">
                    <h1 className="CareerImgText">Careers</h1>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Career;