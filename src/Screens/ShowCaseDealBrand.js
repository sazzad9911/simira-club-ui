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

const ShowCaseDealBrand = (props) => {
    const {id}=useParams()
    const [Data,setData]=React.useState(null)
    const brands=useSelector(state => state.Brands)

    React.useEffect(() => {
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
                                <DealList key={i} data={doc}/>
                            ))
                        ):(<p>No Deals Found</p>)
                    ):(<Loader/>)
                   }
                </div>
                <div className='pageSlide'>
                    <Button variant="text" ><p className='text'>1</p></Button>
                    <Button variant="text" ><p className='text'>2</p></Button>
                    <Button variant="text" ><p className='text'>3</p></Button>
                    <Button variant="text" ><p className='text'>4</p></Button>
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
