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

const SearchHotel = (props) => {
    const [Data,setData]= React.useState(null)
    const {search} =useParams()
    const [Select,setSelect]= useState('SearchHotel')
    const [SearchData,setSearchData]=useState()
    const [width,setWidth]= React.useState('0px')
    const [Visibility,setVisibility]= useState(false)
    const [Low,setLow]= React.useState(0)
    const [High,setHigh]= React.useState(10)
    const [Category,setCategory]= React.useState()
    
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
            filterColumn: 'categories',
            filterValue: Category,
        }).then(data =>{
            if(Array.isArray(data)){
                return setData(data)
            }
            console.log(data)
        })
       }else{
        setData([])
       }
    },[search+Category])
    return (
        <div style={{width: '100%',marginTop:'30px',overflowX:'hidden'}}>
            <div style={{display: 'flex',width:'90%',height:'100%',marginLeft:'5%'}}>
               <div className='left-filter-bar' style={{height:'100%',
               overflowY:'scroll',
               paddingRight:'15px',
               }}>
               <FilterCart value={Category} setCategory={setCategory} />
               
               </div>
               <Modal open={Visibility} onClose={()=>setVisibility(!Visibility)}>
               <div className='left-filter-bar' style={{height:'100%',
               overflowY:'scroll',
               paddingRight:'15px',
               display:'inline-block',
               width:'250px'
               }}>
               <FilterCart value={Category} setCategory={setCategory} />
               
               </div>
               </Modal>
               <button  onClick={() =>{
                setVisibility(!Visibility)
               }} className='right-menu'>
               <FilterListIcon style={{color:"#FC444B",marginRight:'5px'}}/>
                Filter
               </button>
                <div className='right-filter-bar' style={{borderLeft:'2px solid #D8D8D8',}}>
                        <div className='ScarchBox1'>
                            <div className='ScarchInputBox1'>
                                <input onChange={(e) =>setSearchData(e.target.value)} className='ScarchInput1' type='text'
                                    placeholder='Search' />
                                <select onChange={(e)=>setSelect(e.target.value)} className='ScarchSelect1'>
                                    <option value="SearchHotel">Hotel</option>
                                    <option value="SearchDeal">Deals</option>
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
                                        <SearchHotelCart key={i} data={data} />
                                    ):(<div key={i}></div>)
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

export default SearchHotel;
