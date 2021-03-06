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
import FilterTowCart from '../Cart/FilterTowCart'
import Dealoffercart from '../Cart/DealOfferCart';
import DealList from './../Cart/DealList';
import Pagination from './../Content/Pagination';

const SearchDeal = (props) => {
    const [Data,setData]= React.useState(null)
    const {search} =useParams()
    const [Select,setSelect]= useState('SearchDeal')
    const [SearchData,setSearchData]=useState()
    const [width,setWidth]= React.useState('0px')
    const [Visibility,setVisibility]= useState(false)
    const [Low,setLow]= React.useState(0)
    const [High,setHigh]= React.useState(10)
    const [Brands,setBrands]= React.useState()
    
    React.useEffect(()=>{
        window.scrollTo(0, 0);
       if(search) {
        postData(url +'/searchData',{
            tableName:'deals',
            searchData: search,
            searchColumn:'brand',
            filterColumn: 'brand',
            filterValue: Brands,
        }).then(data =>{
            if(Array.isArray(data)){
                return setData(data)
            }
            console.log(data)
        })
       }else{
        setData([])
       }
    },[search+Brands])
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[Low])
    return (
        <div style={{width: '100%',marginTop:'30px',overflowX:'hidden'}}>
            <div style={{display: 'flex',width:'90%',height:'100%',marginLeft:'5%'}}>
               <div className='left-filter-bar' style={{height:'100%',
               overflowY:'scroll',
               paddingRight:'15px',
               }}>
              <FilterTowCart change={setBrands} value={Brands} />
               
               </div>
               <Modal open={Visibility} onClose={()=>setVisibility(!Visibility)}>
               <div className='left-filter-bar' style={{height:'100%',
               overflowY:'scroll',
               paddingRight:'15px',
               display:'inline-block',
               width:'250px'
               }}>
               <FilterTowCart change={setBrands} value={Brands} />
               
               </div>
               </Modal>
               <button onClick={() =>{
                setVisibility(!Visibility)
               }} className='right-menu'>
               <FilterListIcon style={{color:"#FC444B",marginRight:'5px'}}/>
                Filter
               </button>
                <div className='right-filter-bar' style={{borderLeft:'2px solid #D8D8D8',}}>
                        <div className='ScarchBox1'>
                            <div className='ScarchInputBox1'>
                                <input onChange={(e) =>setSearchData(e.target.value)} className='ScarchInput1' type='text'
                                    placeholder='Search by hotel,deal,restaurant' />
                                <select onChange={(e)=>setSelect(e.target.value)} className='ScarchSelect1'>
                                <option value="SearchDeal">Deals</option>
                                    <option value="SearchHotel">Hotel</option>
                                </select>
                                <Link style={{textDecoration: 'none'}} to={'/'+Select+'/'+SearchData}>
                                <div className='ScarchButton1' >
                                <p>Search</p>
                                </div>
                                   
                                </Link>
                                
                            </div>
                        </div> 
                        {
                            Data?(
                                Data.map((data,i) =>(
                                    i>=Low && i<High?(
                                        <DealList key={i} data={data} />
                                    ):(<></>)
                                ))
                            ):(<Loader/>)
                        }
                        
                    </div>
             </div>
             <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
             }}>
                {
                    Data && Data.length>0?(
                        <Pagination lowLevel={setLow} highLevel={setHigh} length={Data.length} perPage={10}/>
                    ):(<></>)
                }
            </div>
            <AppOverView />
            <OptionLand />
        </div>
    );
};

export default SearchDeal;
