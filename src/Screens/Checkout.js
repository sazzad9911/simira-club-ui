import React from "react";
import './css/Checkout.css'


function Checkout() {
    return (
        <div className="CheckoutBody">
            <div className="CheckoutLeftBOX">
                <h1>Start your 30-day trial now!</h1>
                <p>We won't charge you today. Your payment</p>
                <div style={{ display: 'flex', }}>
                    <p>day will be on</p>
                    <p className="CheckoutLeftP">April 5, 2022</p>
                </div>
                <h2 className="CheckoutLeftH2">Payment Method</h2>
                <div className="CheckoutLeftH2">
                    <div className="CheckoutLeftBDiv">
                        <button className="CheckoutLeftButton">
                            <div className="CheckoutLeftButtonDiv" />
                        </button>
                        <h2 className="CheckoutLeftBDivH2">Pay now with UPI, Netbanking & Wallet</h2>
                    </div>
                    <div style={{ display: 'flex', }}>
                        <button className="CheckoutLeftButton">
                            <div className="CheckoutLeftButtonDiv" />
                        </button>
                        <h2 className="CheckoutLeftBDivH2">Pay later with credit or debit card</h2>
                    </div>
                </div>
                <div className="CheckoutLeftIBox">
                    <div className="CheckoutLeftIDiv">
                        <p className="CheckoutLeftBDivH2">Card number</p>
                        <div className="CheckoutLeftInput">
                            <input className="CheckoutLeftInputBox" type='Text' placeholder='0000 &nbsp;&nbsp;&nbsp; 0000 &nbsp;&nbsp;&nbsp; 0000 &nbsp;&nbsp;&nbsp; 0000' />
                        </div>
                        <div style={{ display: 'flex', }}>
                            <div>
                                <p className="CheckoutLeftBDivH2">Expiry date</p>
                                <div className="CheckoutLeftInputDiv">
                                    <input className="CheckoutLeftInputD" type='Text' placeholder='MM/YY' />
                                </div>
                            </div>
                            <div style={{marginLeft:'20px'}}>
                                <p className="CheckoutLeftBDivH2">CVV</p>
                                <div className="CheckoutLeftInputLastDiv">
                                    <input className="CheckoutLeftInputLastD" type='Text' placeholder='...' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CheckoutRightBody">
                <h1>2999</h1>
                <p>/2 years</p>
            </div>
            <div className="CheckoutRightLine"/>
        </div>
    );
}

export default Checkout;