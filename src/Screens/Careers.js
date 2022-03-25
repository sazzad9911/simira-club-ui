import React from "react";
import './css/Careers.css'
import Img from './Image/Careers.PNG'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';

function Career() {
    return (
        <div className="CareerBody">
            <div className="CareerBodyDiv">
                <img src={Img} className='CareerImg' />
                <div className="CareerImgDiv">
                    <h1 className="CareerImgText">Careers</h1>
                </div>
            </div>
            <Cart text='Sale Associate'
            button1='Permanent'
            button2='Remote'
            button3='Sales'
            ></Cart>
            <Cart text='Sale Associate'
            button1='Permanent'
            button2='Remote'
            button3='Sales'
            ></Cart>
            <Cart text='Sale Associate'
            button1='Permanent'
            button2='Remote'
            button3='Sales'
            ></Cart>
        </div>
    );
}

export default Career;

function Cart(props) {
    return (
        <div className="CareerBox">
            <div className="CareerBoxMainButton">
                <div className="CareerBoxDiv">
                    <div className="CareerBoxRightDiv">
                        <h2>{props.text}</h2>
                        <button className="CareerBoxFirstButton">{props.button1}</button>
                        <button className="CareerBoxScendButton">{props.button2}</button>
                        <button className="CareerBoxThridButton">{props.button3}</button>
                    </div>
                    <div className="CareerBoxLeftDiv">
                    <Link href="/"><ArrowForwardIosIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
