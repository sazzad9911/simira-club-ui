import React from 'react';
import ShowCaseDealCart from '../Cart/ShowCaseDealCart';
import TopBrands from '../Components/TopBrands';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
import {useSelector} from 'react-redux'
import { Link,useParams } from 'react-router-dom';
import app from './../firebase';
import { getAuth } from 'firebase/auth';
import {postData, url,convertDate,dateDifference} from '../action'
import '../Cart/css/ShowCaseDealCart.css'
import Button from '@mui/material/Button';
import Loader from './../Content/Loader';


const ShowCaseDeal = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    const brands =useSelector(state => state.Brands)
    const [Data,setData]= React.useState(null)
    const {id}=useParams()
    const [Height,setHeight]= React.useState('85px')
    const [Loading, setLoading]= React.useState(false)
    const [Error,setError]= React.useState()
    const auth = getAuth(app)
    const user= useSelector(state => state.User)

    React.useEffect(() => {
        postData(url +'/getData',{
            tableName: 'deals',
            condition: 'id='+id
        }).then((data) => {
            if(Array.isArray(data)){
                return setData(data[0])
            }
            console.log(data.message)
        })
    },[id])
    const book=()=>{
        if(!user){
            window.location.href='/LogIn'
            return
        }
        setError('')
        if(!user|| !user[0].membership_type || dateDifference(new Date(),user[0].ending_date && !user[0].link)<0){
            setError('Please buy membership plan first.')
            return
        }
        if (Data && Data.code=='null' && user) {
            setLoading(true);
            postData(url + '/setData', {
                auth: auth.currentUser,
                tableName: 'book_appointment',
                columns: ['uid', 'deal_id', 'date'],
                values: [auth.currentUser.uid, Data.id, convertDate(new Date())]
            }).then(data => {
                if (data && data.insertId) {
                    setLoading(false);
                    setError('Appointment booked successfully')
                    return
                }
                setLoading(false);
                console.log(data.message)
            }).catch(err => {
                setLoading(false);
                console.log(err.message)
            })
            postData(url +'/sendEmail',{
                from:'info@smira.club',
                to:auth.currentUser.email,
                subject:'Your Appointment Request has been received - Smira Club',
                text:"<p>Dear <strong>"+user[0].name.split(' ')[0]+"</strong>,</p><p>We have received your request for a appointment on <strong>"+convertDate(new Date())+"</strong> for "+Data.name+"<p>Smira Club</p><p>Ranjit Studio Compound,</p><p> Ground & 1st Floor, </p><p>C-Block, Plot No. 115, </p><p>Dada Saheb Phalke Marg, </p><p>Opp. Bharatkshetra, Hindmata, </p><p>Dadar East, Mumbai, </p><p>Maharashtra 400014 </p><p>Contact No. </p><p>9819812456</p><p>9833733477</p><p>9820342389</p><p> Email - support@smira.club</p>"
            }).then(data=>{
                console.log(data)
            })
        } else {
            setError('Coupon code is copied.')
        }
    }
    return (
        <div>
            <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                width: '100%',
               
            }}>
               <div className='mainbody'> 
                <div>
                    <img className="img61" src={brands && Data?brands.
                    filter(data=>data.id==Data.brand_id)[0].image:''} alt="img1" />
                </div>
                <div>
                    <p className='headText'>{Data?Data.name:''}</p>
                </div>
                <div className='offercode'>
                    <p>{Data && Data.code!='null'?Data.code:'NO PROMOCODE'}</p>
                </div>
                <p style={{color: 'red',margin:'0px'}}>{Error}</p>
                {
                    Loading?(
                        <Loader/>
                    ):(<></>)
                }
                <Button onClick={() =>{
                    book()
                }} style={{
                    outline: false,
                    marginTop: '20px',
                    width: '300px',
                    height: '55px',
                    borderRadius: '30px',
                    padding: '0px'

                }}>
                    <div className='offercodebutton'>
                        <p className='offercodebuttonText'>{Data && Data.code=='null'?'BOOK APPOINTMENT':'COPY CODE'}</p>
                    </div>
                </Button>
            </div>
            <div style={{ marginLeft: '5%',marginRight: '5%'}} className={'condition'}>
                <h4 >Terms and Conditions</h4>
                <p style={{textAlign:'justify',maxHeight:Height,overflow:'hidden'}}>
                   {Data?Data.conditions:''}
                </p>
                <Button onClick={()=>{
                    if(Height=='auto'){
                        setHeight('85px')
                    }else{
                        setHeight('auto')
                    }
                }} underline='false'>
                    <p style={{ color: '#FC444B',margin:'0px' }}>Read {Height=='auto'?'Less':'More'}</p>
                </Button>

            </div>
            </div>
            <TopBrands headText='Top Brands For You' />
            <div style={{
                marginTop: '50px',
                
            }}>
                <AppOverView />
            </div>
            <div style={{marginTop: '50px'}}>
            <OptionLand />
            </div>
        </div>
    );
};

export default ShowCaseDeal; 