import React from "react";
import './css/Checkout.css'


function Checkout() {
    return (
        <div className="CheckoutBody">
            <div className="CheckoutLeftBOX">
                <h1>Start your 30-day trial now!</h1>
                <p>We won't charge you today. Your payment</p>
                <p>day will be on<p className="CheckoutLeftP">April 5, 2022</p></p>
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
                        <p>Card number</p>
                        <input className="JobRightInputBox" type='Text' placeholder='Fiest name' />
                    </div>
                </div>
            </div>
            <div className="CheckoutRightBody">fgghg</div>
        </div>
    );
}

export default Checkout;