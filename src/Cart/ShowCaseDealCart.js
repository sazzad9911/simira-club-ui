import React from 'react';
import Button from '@mui/material/Button';
import '../Cart/css/ShowCaseDealCart.css'
import {useSelector} from 'react-redux';
import {postData, url} from '../action'
import { Link,useParams } from 'react-router-dom';

const ShowCaseDealCart = () => {
    const brands =useSelector(state => state.Brands)
    const [Data,setData]= React.useState(null)
    const {id}=useParams()
    const [Height,setHeight]= React.useState('85px')

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
                <Button style={{
                    outline: false,
                    marginTop: '20px',
                    width: '300px',
                    height: '55px',
                    borderRadius: '30px',
                    padding: '0px'

                }}>
                    <div className='offercodebutton'>
                        <p className='offercodebuttonText'>{Data && Data.code!='null'?'BOOK APPOINTMENT':'COPY CODE'}</p>
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