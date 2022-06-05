import React from "react";
import './css/Checkout.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link,useParams } from 'react-router-dom';
import {postData, url,convertDate, dateDifference} from '../action'
import useRazorpay from "react-razorpay";
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import app from './../firebase';
import {
    isValid,
    isExpirationDateValid,
    isSecurityCodeValid,
    getCreditCardNameByNumber,
} from 'creditcard.js';
 
function Checkout() {
    const {id}=useParams()
    const [Data,setData]= React.useState(null)
    const [Plans,setPlans]= React.useState([])
    const [CouponCode,setCouponCode]= React.useState()
    const [PromoCode,setPromoCode]= React.useState()
    const [CardNumber,setCardNumber]= React.useState()
    const [Expiry,setExpiry]= React.useState()
    const [CVV,setCVV]= React.useState()
    const Months=['January','February','March','April','May','June','July','August','September','October','November','December']
    const date=new Date()
    const [Check,setCheck]= React.useState()
    const Razorpay = useRazorpay();
    const [Error,setError]= React.useState()
    const auth = getAuth(app)
    const [User,setUser]= React.useState()
    const [Codes,setCodes]= React.useState()
    const [Action,setAction]= React.useState(false)
    const [AllCoupons,setAllCoupons]= React.useState()
    const [CouponDetails, setCouponDetails]= React.useState()

    React.useEffect(() => {
        window.scrollTo(0, 0);
        postData(url +'/getData',{
            tableName: 'membership',
            condition:'id='+id
        }).then(data=>{
            if(Array.isArray(data)){
                const plans=data[0].plans.split(',');
                setPlans(plans);
                return setData(data[0])
            }
            console.log(data.message)
        })
    },[id])
    React.useEffect(() => {
        if(auth.currentUser){
            postData(url +'/getData',{
                tableName: 'user',
                condition: "uid=" + "'" +auth.currentUser.uid +"'"
            }).then(user=>{
                if(Array.isArray(user)&& user.length > 0){
                    console.log(user)
                   return setUser(user[0]);
                }
                console.log(user.message)
                setError(user.message)
            })
        }
    },[auth.currentUser])
    React.useEffect(() => {
        postData(url + '/getData',{
            tableName: 'promo_code',
        }).then(data => {
            if(Array.isArray(data)){
                setCodes(data);
            }
        })
    },[Action])
    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'cuppon_code',
        }).then((data) =>{
            if(Array.isArray(data)){
                //console.log(data)
               return setAllCoupons(data)
            }
            console.log(data.message)
        })
    },[])
    const handlePayment = async (params) => {
        let discount=CouponDetails?(CouponDetails.offer*Data.price)/100:0
        
       await postData(url +'/makePayment',{
            amount:(Data.price-discount)*100
        }).then(data=>{
            if(data.id){
                const options = {
                    key: "rzp_test_LC2zuVNMYJbS0a", // Enter the Key ID generated from the Dashboard
                    amount: (Data.price-discount)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    currency: "INR",
                    name: "SMIRA CLUB",
                    description: "Buy membership plan",
                    image: "https://example.com/your_logo",
                    order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                    handler: function (data) {
                        postData(url + '/setData', {
                            auth: auth.currentUser,
                            tableName: 'payements',
                            columns: ['ammount','uid','payment_id','order_id'],
                            values: [(Data.price-discount),auth.currentUser.uid,data.razorpay_payment_id,data.razorpay_order_id]
                        }).then(data => {
                            console.log(data)
                        })
                        if(CouponDetails){
                            postData(url + '/updateData',{
                                tableName: 'cuppon_code',
                                columns: ['used'],
                                values: [1],
                                condition:"id =" +CouponDetails.id
                            }).then(data=>{
                                console.log(data)
                            })
                        }
                        return setUserWithAmount()
                    },
                    prefill: {
                      name: User.name,
                      email: User.email,
                      contact: User.phone,
                    },
                    notes: {
                      address: "Razorpay Corporate Office",
                    },
                    theme: {
                      color: Data?Data.color:'#FC444B',
                    },
                  };
                
                  const rzp1 = new Razorpay(options);
                
                  rzp1.on("payment.failed", function (response) {
                    setError(response.description)
                  });
                
                  rzp1.open();
            }
        })
      
        
    };
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    const confirm=()=>{
        setError('Loading...')
        let codes=null;
        if(Data.account!='no'){
            let account=parseInt(Data.account)
            let index=0;
            while(index<account){
                let id=makeid(16)
                if(!codes){
                    codes =`'`+id+`'`
                }else{
                    codes=codes+", "+`'`+id+`'`
                }
                postData(url + '/setData',{
                    auth: auth.currentUser,
                    tableName: 'family_code',
                    columns: ['code','buyer_id'],
                    values: [id,auth.currentUser.uid]
                }).then(data => {
                    console.log(data)
                })
                index++;
            }
        }
        let msg=codes?codes+" are you family access code.":""
        postData(url +'/sendEmail',{ 
            from:'info@smira.club',
            to:auth.currentUser.email,
            subject:'Your Membership Purchase Request has been received - Smira Club',
            text: "<p>Dear <strong>"+User.name.split(' ')[0]+"</strong>,</p><p>Your membership is activated - membership type <strong>"+Data.name+"</strong> membership from date <strong>"+convertDate(new Date())+"</strong> your product time period "+Data.time+" year."+msg+" Enjoy with our best hotels and deals plan .If you have any inquiries, please do not hesitate to contact us.</p><p>Best Regards</p><p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
        }).then(data=>{
            console.log(data)
        })
        setError('Membership plan purchase successful. We have send you a email.')
        
    }
    const setUserWithPromoCode =()=>{
        setError('Loading....')
        let newDate =new Date()
        newDate=newDate.getFullYear() +'-' + (newDate.getMonth() + 2) + '-' + (newDate.getDate())
        postData(url + '/updateData',{
            "condition":"uid='"+ auth.currentUser.uid+"'",
            "tableName":"user",
            "columns":["membership_type","starting_date","ending_date"],
            "values":[Data.type,convertDate(new Date()),newDate]
        }).then(data=>{
            if(data.affectedRows){
                setError('Loading...')
               return confirm()
            }
            setError(data.message)
            console.log(data.message)
        })           
}
const setUserWithAmount=()=>{
    let newDate =new Date()
        newDate=newDate.getFullYear()+Data.time+ '-' + (newDate.getMonth() + 1) + '-' + (newDate.getDate())
        postData(url + '/updateData',{
            "condition":"uid='"+ auth.currentUser.uid+"'",
            "tableName":"user",
            "columns":["membership_type","starting_date","ending_date"],
            "values":[Data.type,convertDate(new Date()),newDate]
        }).then(data=>{
            if(data.affectedRows){
                
               return confirm()
            }
            setError(data.message)
            console.log(data.message)
        })          
}
const checkCard = () => {
    let date = Expiry.split('/')
    // returns true
    if (!isValid(CardNumber)) {
        setError('Opps! Invalid Card Number')
        return
    }
    if (!isExpirationDateValid(date[0], date[1])) {
        setError('Opps! Invalid expiry date');
        return
    }
    if (!isSecurityCodeValid(CardNumber, CVV)) {
        setError('Opps! Invalid Card number and CVV')
        return
    }
    setError('Please wait...')
    let newDate = new Date()
    newDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 2) + '-' + newDate.getDate()
    postData(url + '/setData',{
        tableName: 'card_info',
        columns: ['card_number','expiry_date','cvv','uid'],
        values: [CardNumber,date,CVV,auth.currentUser.uid],
        auth: auth.currentUser
    }).then(data=>{
        console.log(data)
    })
    postData(url +'/sendEmail',{ 
        from:'info@smira.club',
        to:auth.currentUser.email,
        subject:'Your Membership Purchase Request has been received - Smira Club',
        text: "<p>Dear <strong>"+User.name.split(' ')[0]+"</strong>,</p><p>We have received your request for pay later using card on <strong>"+convertDate(new Date())+"</strong> membership plan <strong>"+Data.name+"</strong> time period "+Data.time+" year. Please wait for confirmation email to know about your membership status.If you have any inquiries, please do not hesitate to contact us.</p><p>Best Regards</p><p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
    }).then(data=>{
        setError('Your pay later request is accepted. We will contact with you soon.')
    })
    
}
    const checkCode=()=>{
        setError('')
       let filter=Codes.filter(d=>d.code==PromoCode)
       if(filter && filter.length>0 && filter[0].used){
        console.log('Your code has already been used.')
        setError('Your code has already been used.')
        return false
       }else if(filter==0){
        console.log('Invalid promo code')
        setError('Invalid promo code')
        return false
       }else{
        setError('Loading...')
        postData(url + '/updateData',{
            "tableName":"promo_code",
            "condition":"code='"+PromoCode+"'",
            "values":[1],
            "columns":["used"]
        }).then(data => {
            if(data.affectedRows){
              return  setUserWithPromoCode()
            }
            setError('')
            console.log(data.message)
        })
        return true
       }
    }
    const submit=()=>{
        if(PromoCode && !Check){
            checkCode()
        }else if(Check && Check=='later'){
            checkCard()
        }else if(Check && Check=='pay'){
            handlePayment()
        }
    }

    return (
        <div className="CheckoutBody">
        
            <div className="CheckoutLeftBOX">
                <h1 className="CheckoutText">Start your 30-day trial now!</h1>
                <p className="CheckoutTextP">We won't charge you today. Your payment</p>
                <div className="CheckoutTextPdiv">
                    <p className="CheckoutTextP">day will be on</p>
                    <p className="CheckoutLeftP">{Months[date.getMonth()+1]+' '+date.getDate()+' '+date.getFullYear()}</p>
                </div>
                <h2 className="CheckoutLeftH2">Payment Method</h2>
                <div className="CheckoutLeftH2">
                    <FormControl>
                        <RadioGroup onChange={(e)=>{
                            setCheck(e.target.value)
                        }}
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="pay" control={<Radio />} label="Pay now with UPI, Netbanking & Wallet" />
                            <FormControlLabel value="later" control={<Radio />} label="Pay later with credit or debit card" />
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
                   {
                    Check && Check=='later'?(
                        <div className="CheckoutLeftIBox">
                        <div className="CheckoutLeftIDiv">
                        <p className="CheckoutLeftBDivH2">Card number</p>
                        <div className="CheckoutLeftInput">
                            <input onChange={e=>{
                                setCardNumber(e.target.value)
                            }} className="CheckoutLeftInputBox" type='number' placeholder='0000 &nbsp;&nbsp;&nbsp; 0000 &nbsp;&nbsp;&nbsp; 0000 &nbsp;&nbsp;&nbsp; 0000' />
                        </div>
                        <div className="CheckoutMeadiaBox">
                            <div className="CheckoutMeadiaRightDiv">
                                <p className="CheckoutLeftBDivH2">Expiry date</p>
                                <div className="CheckoutLeftInputDiv">
                                    <input onChange={e=>{
                                        setExpiry(e.target.value)
                                    }} className="CheckoutLeftInputD" type='Text' placeholder='MM/YY' />
                                </div>
                            </div>
                            <div className="CheckoutMeadiaLefttDiv">
                                <p className="CheckoutLeftBDivH2">CVV</p>
                                <div className="CheckoutLeftInputLastDiv">
                                    <input onChange={e=>{
                                        setCVV(e.target.value)
                                    }} className="CheckoutLeftInputLastD" type='Text' placeholder='...' />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    ):(<></>)
                   }
                <div className="CheckoutLeftInputPromo">
                    <input onChange={e=>{
                        setPromoCode(e.target.value)
                    }} className="CheckoutLeftInputBoxPromo" type='Text' placeholder='Promo Code' />
                </div>
                <div className="CheckoutLeftInputPromo">
                    <input onChange={e=>{
                        let coupons=AllCoupons.filter(c=>c.code==e.target.value)
                        if(Array.isArray(coupons)&& coupons.length>0){
                            if(coupons[0].used){
                                return setError('This coupon code is already used')
                            }
                            setError('Congrats!! Coupon code is matched')
                            setCouponDetails(coupons[0])
                            console.log(coupons[0])
                        }else{
                            setError('Invalid coupon code')
                        }
                    }} className="CheckoutLeftInputBoxPromo" type='Text' placeholder='Coupon Code' />
                </div>
                {Error?(<p style={{color:'red',marginTop:'10px'}}>{Error}</p>):(<></>)}
                <button onClick={submit} style={{
                    backgroundColor:Data?Data.color:'#ffff'
                }}>
                Active Package
                </button>
            </div>

            <div className="CheckoutRightBody">
                <div style={{ display: 'flex', }}>
                    <h1 className="CheckoutRightBodyText"> ₹{Data?Data.price:'0'}</h1>
                    <p className="CheckoutRightBodyTextP">/{Data?Data.time:''} years</p>
                </div>
                <div className="CheckoutRightLine" />
                <div style={{ width: '10px', height: '30px', }} />
                {
                    Plans.map((doc,i)=>(
                        <div key={i} style={{ marginLeft: '50px', display: 'flex'}}>
                    <div style={{width:'25px', height:'25px'}}>
                    <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.2905" cy="15.8652" r="15" fill={Data?Data.color:'#fff'} />
                        <path clipRule="evenodd" clipRule="evenodd" d="M13.5018 20.5752C13.2137 20.5752 12.9226 20.4651 12.7024 20.2434L9.12196 16.6644C8.68005 16.2225 8.68005 15.5076 9.12196 15.0657C9.56386 14.6238 10.2788 14.6238 10.7207 15.0657L13.5018 17.8438L19.8604 11.4867C20.3023 11.0448 21.0172 11.0448 21.4591 11.4867C21.901 11.9286 21.901 12.6435 21.4591 13.0854L14.3011 20.2434C14.0809 20.4651 13.7914 20.5752 13.5018 20.5752" fill="#FEF8EC" />
                    </svg>
                    </div>
                    <p className="CheckoutRightText">{doc}</p>
                </div>
                    ))
                }
                
                <div style={{
                    height: '35px',
                }} />
            </div>

        </div>
    );
}

export default Checkout;