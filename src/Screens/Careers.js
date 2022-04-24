import React from "react";
import './css/Careers.css'
import Img from './Image/Careers.PNG'
import Link from '@mui/material/Link';
import AppOverView from '../Cart/AppOverView'

function Career() {
    return (
        <div className="CareerBody">
            <div className="CareerBodyDiv">
                <img src={Img} className='CareerImg' />
                <div className="CareerImgDiv">
                    <h1 className="CareerImgText">Careers</h1>
                </div>
            </div>
            <div className="CareerCartDiv">
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
                <div className="CareerEndDiv" />
            </div>
            <AppOverView/>
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
                        <p className="CareerBoxText">{props.text}</p>
                        <button className="CareerBoxFirstButton">{props.button1}</button>
                        <button className="CareerBoxScendButton">{props.button2}</button>
                        <button className="CareerBoxThridButton">{props.button3}</button>
                    </div>
                    <div className="CareerBoxLeftDiv">
                        <Link href="/JobDescription">
                            <svg width="25" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.451377 14.4138C0.183905 14.1693 0.15959 13.7868 0.37843 13.5172L0.451377 13.44L6.94998 7.50009L0.451377 1.5602C0.183905 1.31573 0.15959 0.93319 0.37843 0.663622L0.451377 0.586392C0.718848 0.341928 1.1374 0.319705 1.43234 0.51972L1.51684 0.586392L8.54851 7.01319C8.81598 7.25765 8.8403 7.6402 8.62146 7.90977L8.54851 7.987L1.51684 14.4138C1.22262 14.6827 0.745595 14.6827 0.451377 14.4138Z" fill="black" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
