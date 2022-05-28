import React from 'react';
import '../Screens/css/showcasedealbrand.css'
import Button from '@mui/material/Button';
import Dealoffercart from '../Cart/DealOfferCart';
import TopBrands from '../Components/TopBrands';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
import {useParams} from 'react-router-dom'
import {postData, url} from '../action'
import {useSelector} from 'react-redux'
import DealList from './../Cart/DealList';
import Loader from './../Content/Loader';
import Pagination from './../Content/Pagination';

const ShowCaseDealBrand = (props) => {
    const {id}=useParams()
    const [Data,setData]=React.useState(null)
    const brands=useSelector(state => state.Brands)
    const [Low,setLow]=React.useState(0)
    const [High,setHigh]=React.useState(10)

    React.useEffect(() => {
        window.scrollTo(0, 0);
        postData(url +'/getData',{
            tableName:'deals',
            orderColumn: 'date',
            condition:'brand_id='+"'"+id+"'"
        }).then(data =>{
            if(Array.isArray(data)){
               return setData(data)
            }
            console.log(data.message)
        })
    },[id])
    React.useEffect(() => {
        window.scrollTo(0, 0);
    },[Low])
    return (
        <div>
            <div className='showcasebody'>
                <div className='cartBottom4'>
                    <div className='cartButtomLeft4'>
                        <img className="img4" src={brands?brands.filter(d=>d.id ==id)[0].image:''} alt="img1" />
                    </div>
                    <div className='cartButtomRight4'>
                        <div style={{
                            marginTop: '7px'
                        }}>
                            <p className='headline'>{brands?brands.filter(d=>d.id ==id)[0].name:''}</p>
                            <p className='text2'>{Data?Data.length:'0'} Offers Available</p>
                            <div style={{
                                marginTop:'20px'
                            }}>
                                <Button variant="text" style={{
                                    width: '130px',
                                    height: '35px',
                                    borderRadius: '30px',
                                    padding: '0px'
                                }}>
                                    <div className='buttonView'>
                                        <p className='buttonViewTxt'> VISIT STORE</p>
                                    </div>
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '40px',marginBottom: '40px'}} className='hr6'></div>
                <div>
                   {
                    Data ? (
                        Data.length >0?(
                            Data.map((doc,i)=>(
                                i>=Low && i<High?(
                                    <DealList key={i} data={doc}/>
                                ):(<></>)
                            ))
                        ):(<p>No Deals Found</p>)
                    ):(<Loader/>)
                   }
                </div>
                <div className='pageSlide'>
                {
                    Data ? (
                        <Pagination lowLevel={setLow} highLevel={setHigh} length={Data.length} perPage={10}/>
                    ):(<></>)
                }
                </div>
                <div className='hr'></div>


            </div>
           <div style={{

           }}>
            <TopBrands headText='Try other top brands' />
           </div>
            <div style={{
                marginTop:'40px'
            }}>
                <AppOverView />
            </div>
            <div>
                <OptionLand />
            </div>
        </div>
    );
};

export default ShowCaseDealBrand;
