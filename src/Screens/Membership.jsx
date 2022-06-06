import React from 'react';
import './../Screens/css/Membership.css'
import Img from './Image/Capture.PNG'
import TopBrands from './../Components/TopBrands';
import PopularHotels from './../Components/PopularHotels';
import AppOverView from './../Cart/AppOverView';
import OptionLand from './../Components/OptionLand';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {postData,url} from '../action.js'
import { useState } from 'react';
import Loader from './../Content/Loader';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getAuth } from 'firebase/auth';
import app from './../firebase';


 
const Membership = () => {
    const [Data,setData]=React.useState(null)
    const [Open,setOpen]=React.useState(false)
    const [MembershipFamilyCode, setMembershipFamilyCode] = useState("")
    const [MemberShipFamilyCodeError, setMemberShipFamilyCodeError] = useState()
    const auth=getAuth(app)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        postData(url+'/getData',{
            tableName:'membership'
        }).then((data) => {
            if(Array.isArray(data)){
                return setData(data)
            }
            console.log(data.message)
        })
    },[])
    const addCode=() =>{
        setMemberShipFamilyCodeError('Loading...')
        let code=MembershipFamilyCode.replace(/\s|-/gi,"")    
        postData(url + '/getData',{
          tableName: 'family_code',
          condition:"code="+ "'" +code+"'"
        }).then(data=>{
          if(Array.isArray(data) && data.length>0){
            if(!data[0].user_id){
              setMemberShipFamilyCodeError('')
              postData(url + '/updateData',{
                "tableName":"user",
                "columns":["link"],
                "values":[data[0].buyer_id],
                "condition":"uid="+ "'" +auth.currentUser.uid+"'"
              }).then(data => {
                if(data.affectedRows){
                    setMemberShipFamilyCodeError('Loading...')
                  confirm(code)
                }else{
                  setMemberShipFamilyCodeError(data.message)
                }
              })
            }else{
              setMemberShipFamilyCodeError('Your code has already been used.')
              return
            }
          }else{
            setMemberShipFamilyCodeError('Incorrect code')
          }
        })
      }
      const confirm=(code)=>{
        postData(url + '/updateData', {
          tableName: 'family_code',
          columns: ['user_id'],
          values: [auth.currentUser.uid],
          condition:"code=" + "'" + code+ "'"
        }).then(data=>{
          console.log(data)
          setMemberShipFamilyCodeError('Your family access granted!!')
          setTimeout(()=>{
            window.location.reload()
          },400)
        })
        
    }
    return (
        <div style={{
            width:'100%',
            padding:'0px'
        }}>
            <div className='containerX'>
                <img src={Img} className='MembershiphedImg' />
                <p className='membername'>SmiraClub <span>Membership</span></p>
            </div>
            <div className='Membershipcard'>
                <div className='Membershipcard-left'>
                    <div className='memberl'>
                        <p className='MemberLeftohed'>Worth of ₹ 1 lakh</p>
                        <div className='memberbar'></div>
                        <p className='MemberLeftohedo'> Unlimited enjoyment • Unlimited savings!</p>
                    </div>
            
                    <div className='MemberLeft'>
                        <p>Claim your free month</p>
                    </div>
                </div>
                <div className='Membershipcard-right'>
                {
                    Data?(
                        Data.map((doc, i)=>(
                            <div key={i} style={{width:'300px', height:'330px',margin:'5px'}}>
                            <Plans data={doc} />
                            </div>
                        ))
                    ):(<Loader/>)
                   }
                </div>
            </div>
            <div className='membershipHave'>
                <p className='membershipfootee'>Have a family code?</p>
                <button onClick={()=>setOpen(true)} className='membershipfoote'>Apply it here</button>
                <div></div>
            </div>
            <div className='Home-topBrand'>
                <TopBrands headText='Top Brands For You' />
            </div>
            <div style={{ height: 50, width: '100%' }}></div>
            <PopularHotels />
            <div style={{ height: 20, width: '100%',marginTop:'350PX' }}>

            </div>
            <AppOverView />
            <div style={{ height: 20, width: '100%' }}></div>
            <OptionLand />
            <Modal open={Open} onClose={()=>setOpen(!Open)}>
            <div className="membershipFamily">
            <p>Membership Family Code</p>
            <input value={MembershipFamilyCode} onChange={e=>{
                let text=e.target.value;
                if(text.length==4 || text.length==11 || text.length==18){
                  setMembershipFamilyCode(text+' - ');
                }else if(text.length<=25){
                  setMembershipFamilyCode(text)
                }
            }} type="text" placeholder="XXXX - XXXX - XXXX - XXXX">
            </input>
            {MemberShipFamilyCodeError?(<p style={{color:'red'}}>{MemberShipFamilyCodeError}</p>):(<></>)}
            <button onClick={addCode}>ADD FAMILY CODE</button>
            </div>
            </Modal>
        </div>


    );
};

export default Membership;
const Plans=(props)=>{
    const data =props.data;
    return (
        <div className='MemberCard'>
            <div className='membercardfs'>
                <p style={{ fontSize: 22, fontFamily: "'Plus Jakarta Sans', sans-serif" ,margin:'0'}}>
                <span style={{color: data.color}}>{data.name}</span> Membership</p>
            </div>
            <div className='membercardfss'>
                <p style={{  fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                 fontWeight: 500 }}>Hotel stays of up to {data.night} nights</p>
                <p style={{ fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontWeight: 500 }}>Valid on any  {data.hotel} hotels</p>
                <p style={{ fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontWeight: 500 }}>{data.account} family access</p>
                <p style={{ fontSize: 14, 
                fontFamily: "'Plus Jakarta Sans', sans-serif", 
                fontWeight: 500 }}>Benefits worth of ₹{data.price}</p>
            </div>
            <Link to={"/Checkout/"+data.id} style={{backgroundColor:data.color,
            textDecoration:'none', color:'#ffff'}} className='membercardf'>
               <p id='txt' style={{ fontSize: 16,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", 
                 fontWeight: 700, margin: '0px'}}>Become a Member</p>
                <p id='txt' style={{ fontSize: 14,
                 fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500, margin: '0px'}}>at ₹{data.price} for {data.time} year </p>
            </Link>
    </div>
    )
}
