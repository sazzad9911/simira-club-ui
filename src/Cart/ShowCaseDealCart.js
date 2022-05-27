import React from 'react';
import Button from '@mui/material/Button';
import '../Cart/css/ShowCaseDealCart.css'
import {useSelector} from 'react-redux';
import { Link,useParams } from 'react-router-dom';
import app from './../firebase';
import { getAuth } from 'firebase/auth';
import {postData, url,convertDate} from '../action'
import { Oval } from 'react-loader-spinner';


const ShowCaseDealCart = () => {
    const brands =useSelector(state => state.Brands)
    const [Data,setData]= React.useState(null)
    const {id}=useParams()
    const [Height,setHeight]= React.useState('85px')
    const [Loading, setLoading]= React.useState(false)
    const [Error,setError]= React.useState()
    const auth = getAuth(app)

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
        if (Data && Data.code=='null') {
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

        } else {
            setError('Coupon code is copied.')
        }
    }
    return (
        <div>
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
                        <Oval/>
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
                <p style={{textAlign:'justify',height:Height,overflow:'hidden'}}>
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
    );
};

export default ShowCaseDealCart; 