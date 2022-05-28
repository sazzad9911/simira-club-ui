import React from "react";
import './css/Checkout.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link,useParams } from 'react-router-dom';
import {postData, url} from '../action'
 
function Checkout() {
    const {id}=useParams()
    const [Data,setData]= React.useState(null)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        postData(url +'/getData',{
            tableName: 'membership',
            condition:'id='+id
        }).then(data=>{
            if(Array.isArray(data)){
                return setData(data[0])
            }
            console.log(data.message)
        })
    },[id])

    return (
        <div className="CheckoutBody">
        
            <div className="CheckoutLeftBOX">
                <h1 className="CheckoutText">Start your 30-day trial now!</h1>
                <p className="CheckoutTextP">We won't charge you today. Your payment</p>
                <div className="CheckoutTextPdiv">
                    <p className="CheckoutTextP">day will be on</p>
                    <p className="CheckoutLeftP">April 5, 2022</p>
                </div>
                <h2 className="CheckoutLeftH2">Payment Method</h2>
                <div className="CheckoutLeftH2">
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Pay now with UPI, Netbanking & Wallet" />
                            <FormControlLabel value="male" control={<Radio />} label="Pay later with credit or debit card" />
                        </RadioGroup>
                    </FormControl>
                    {/*<div className="CheckoutLeftBDiv">
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
                    </div>*/}
                </div>
                <div className="CheckoutLeftIBox">
                    <div className="CheckoutLeftIDiv">
                        <p className="CheckoutLeftBDivH2">Card number</p>
                        <div className="CheckoutLeftInput">
                            <input className="CheckoutLeftInputBox" type='number' placeholder='0000 &nbsp;&nbsp;&nbsp; 0000 &nbsp;&nbsp;&nbsp; 0000 &nbsp;&nbsp;&nbsp; 0000' />
                        </div>
                        <div className="CheckoutMeadiaBox">
                            <div className="CheckoutMeadiaRightDiv">
                                <p className="CheckoutLeftBDivH2">Expiry date</p>
                                <div className="CheckoutLeftInputDiv">
                                    <input className="CheckoutLeftInputD" type='Text' placeholder='MM/YY' />
                                </div>
                            </div>
                            <div className="CheckoutMeadiaLefttDiv">
                                <p className="CheckoutLeftBDivH2">CVV</p>
                                <div className="CheckoutLeftInputLastDiv">
                                    <input className="CheckoutLeftInputLastD" type='Text' placeholder='...' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="CheckoutLeftInputPromo">
                    <input className="CheckoutLeftInputBoxPromo" type='Text' placeholder='Promocode' />
                </div>
            </div>

            <div className="CheckoutRightBody">
                <div style={{ display: 'flex', }}>
                    <h1 className="CheckoutRightBodyText"> ₹{Data?Data.price:'0'}</h1>
                    <p className="CheckoutRightBodyTextP">/{Data?Data.time:''} years</p>
                </div>
                <div className="CheckoutRightLine" />
                <div style={{ width: '10px', height: '30px', }} />
                <div style={{ marginLeft: '50px', display: 'flex',}}>
                    <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.2905" cy="15.8652" r="15" fill={Data?Data.color:'#fff'} />
                        <path clipRule="evenodd" clipRule="evenodd" d="M13.5018 20.5752C13.2137 20.5752 12.9226 20.4651 12.7024 20.2434L9.12196 16.6644C8.68005 16.2225 8.68005 15.5076 9.12196 15.0657C9.56386 14.6238 10.2788 14.6238 10.7207 15.0657L13.5018 17.8438L19.8604 11.4867C20.3023 11.0448 21.0172 11.0448 21.4591 11.4867C21.901 11.9286 21.901 12.6435 21.4591 13.0854L14.3011 20.2434C14.0809 20.4651 13.7914 20.5752 13.5018 20.5752" fill="#FEF8EC" />
                    </svg>
                    <p className="CheckoutRightText">Stays upto {Data?Data.night:''} nights</p>
                </div>
                <div style={{ marginLeft: '50px', display: 'flex', }}>
                    <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.2905" cy="15.8652" r="15" fill={Data?Data.color:'#fff'} />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5018 20.5752C13.2137 20.5752 12.9226 20.4651 12.7024 20.2434L9.12196 16.6644C8.68005 16.2225 8.68005 15.5076 9.12196 15.0657C9.56386 14.6238 10.2788 14.6238 10.7207 15.0657L13.5018 17.8438L19.8604 11.4867C20.3023 11.0448 21.0172 11.0448 21.4591 11.4867C21.901 11.9286 21.901 12.6435 21.4591 13.0854L14.3011 20.2434C14.0809 20.4651 13.7914 20.5752 13.5018 20.5752" fill="#FEF8EC" />
                    </svg>
                    <p className="CheckoutRightText">Valid on any {Data?Data.hotel:''} hotels</p>
                </div>
                <div style={{ marginLeft: '50px', display: 'flex', }}>
                    <div style={{ height: '25px', width: '25px', }}>
                        <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15.2905" cy="15.8652" r="15" fill={Data?Data.color:'#fff'} />
                            <path clipRule="evenodd" clipRule="evenodd" d="M13.5018 20.5752C13.2137 20.5752 12.9226 20.4651 12.7024 20.2434L9.12196 16.6644C8.68005 16.2225 8.68005 15.5076 9.12196 15.0657C9.56386 14.6238 10.2788 14.6238 10.7207 15.0657L13.5018 17.8438L19.8604 11.4867C20.3023 11.0448 21.0172 11.0448 21.4591 11.4867C21.901 11.9286 21.901 12.6435 21.4591 13.0854L14.3011 20.2434C14.0809 20.4651 13.7914 20.5752 13.5018 20.5752" fill="#FEF8EC" />
                        </svg>
                    </div>
                    <p className="CheckoutRightText">Family access upto {Data?Data.account:''} accounts</p>
                </div>


                <div style={{ marginLeft: '50px', display: 'flex', }}>
                    <div style={{ height: '25px', width: '25px' }}>
                        <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15.2905" cy="15.8652" r="15" fill={Data?Data.color:'#fff'} />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5018 20.5752C13.2137 20.5752 12.9226 20.4651 12.7024 20.2434L9.12196 16.6644C8.68005 16.2225 8.68005 15.5076 9.12196 15.0657C9.56386 14.6238 10.2788 14.6238 10.7207 15.0657L13.5018 17.8438L19.8604 11.4867C20.3023 11.0448 21.0172 11.0448 21.4591 11.4867C21.901 11.9286 21.901 12.6435 21.4591 13.0854L14.3011 20.2434C14.0809 20.4651 13.7914 20.5752 13.5018 20.5752" fill="#FEF8EC" />
                        </svg>
                    </div>
                    <p className="CheckoutRightText">10 days prior to reservetion</p>
                </div>
                <div style={{ marginLeft: '50px', display: 'flex', }}>
                    <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.2905" cy="15.8652" r="15" fill={Data?Data.color:'#fff'} />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5018 20.5752C13.2137 20.5752 12.9226 20.4651 12.7024 20.2434L9.12196 16.6644C8.68005 16.2225 8.68005 15.5076 9.12196 15.0657C9.56386 14.6238 10.2788 14.6238 10.7207 15.0657L13.5018 17.8438L19.8604 11.4867C20.3023 11.0448 21.0172 11.0448 21.4591 11.4867C21.901 11.9286 21.901 12.6435 21.4591 13.0854L14.3011 20.2434C14.0809 20.4651 13.7914 20.5752 13.5018 20.5752" fill="#FEF8EC" />
                    </svg>
                    <p className="CheckoutRightText">Weekends booking</p>
                </div>
                <div style={{ marginLeft: '50px', display: 'flex', }}>
                    <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.2905" cy="15.8652" r="15" fill={Data?Data.color:'#fff'} />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5018 20.5752C13.2137 20.5752 12.9226 20.4651 12.7024 20.2434L9.12196 16.6644C8.68005 16.2225 8.68005 15.5076 9.12196 15.0657C9.56386 14.6238 10.2788 14.6238 10.7207 15.0657L13.5018 17.8438L19.8604 11.4867C20.3023 11.0448 21.0172 11.0448 21.4591 11.4867C21.901 11.9286 21.901 12.6435 21.4591 13.0854L14.3011 20.2434C14.0809 20.4651 13.7914 20.5752 13.5018 20.5752" fill="#FEF8EC" />
                    </svg>
                    <p className="CheckoutRightText">Peak days booking</p>
                </div>
                <div style={{
                    height: '35px',
                }} />
            </div>

        </div>
    );
}

export default Checkout;