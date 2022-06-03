import React,{ useState,useRef} from 'react';
import SearchHotelCart from '../Cart/SearchHotelCart';
import FilterCart from '../Cart/FilterCart';
import '../Screens/css/SearchHotel.css';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
import { Link,useParams } from 'react-router-dom';
import Loader from './../Content/Loader';
import {postData,url} from '../action'
import './css/Search.css'
import  Button  from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import Modal from '@mui/material/Modal';
import Pagination from './../Content/Pagination';

const HotelList = (props) => {
    const [Data,setData]= React.useState(null)
    const {search} =useParams()
    const [Select,setSelect]= useState('SearchHotel')
    const [SearchData,setSearchData]=useState()
    const [width,setWidth]= React.useState('0px')
    const [Visibility,setVisibility]= useState(false)
    const [Low,setLow]= React.useState(0)
    const [High,setHigh]= React.useState(10)
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[Low])
    React.useEffect(()=>{
        window.scrollTo(0, 0);
       if(search) {
        postData(url +'/searchData',{
            tableName:'hotels',
            searchData: search,
            searchColumn:'address',
        }).then(data =>{
            if(Array.isArray(data)){
                return setData(data)
            }
            console.log(data)
        })
       }else{
        setData([])
       }
    },[search])
    return (
        <div style={{width: '100%',marginTop:'30px',overflowX:'hidden'}}>
            <div style={{display: 'block',width:'90%',marginLeft:'5%'}}>
               
            {
                            Data?(
                                Data.map((data,i) =>(
                                    i>=Low && i<High?(
                                        <SearchHotelCart key={i} data={data} />
                                    ):(<div key={i}></div>)
                                ))
                            ):(<Loader/>)
                        }
             </div>
             <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
             }}>
                {
                    Data?(
                        <Pagination lowLevel={setLow} highLevel={setHigh} length={Data.length} perPage={10}/>
                    ):(<></>)
                }
                
            </div>
            <AppOverView />
            <OptionLand />
        </div>
    );
};

export default HotelList;
