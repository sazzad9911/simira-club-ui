import React, { useState } from 'react';
import '../Screens/css/ShowCaseCategory.css'
import Dealoffercart from '../Cart/DealOfferCart';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
import { useSelector } from 'react-redux';
import Loader from './../Content/Loader';
import { postData, url } from '../action'
import SearchHotelCart from '../Cart/SearchHotelCart';
import {useParams} from 'react-router-dom';
import Games from './../File/icon/Games.svg';
import Hotels from './../File/icon/Hotels.svg';
import Restaurant from './../File/icon/Restaurant.svg';
import Shopping from './../File/icon/Shopping.svg';
import Villas from './../File/icon/Villas.svg';
import Health from './../File/icon/Health.svg';
import Services from './../File/icon/Services.svg';
import Camping from './../File/icon/Camping.svg';
import Spa_Salons from './../File/icon/Spa & Salons.svg';
import Travel from './../File/icon/Travel.svg';
  
const ShowCaseCategory = (props) => {
    const [data, setData] = useState(null)
    const {type}=useParams()
   
    React.useEffect(() => {
        console.log(type)
        window.scrollTo(0, 0);
        if(type=='all'){
            postData(url + '/getData',{
                tableName: 'brands',
            }).then(data =>{
                if(Array.isArray(data)){
                    setData(data)
                }
            })
            return
        }
        if(type){
            let sp=type.split(',');
            let condition=''
            sp.map((doc,i)=>{
                if(!condition){
                    condition="id='"+doc+"'";
                }
                condition=condition+" OR id='"+doc+"'"
            })
            postData(url + '/getData',{
                tableName: 'brands',
                condition: `${condition} OR type='${type}'`
            }).then(data =>{
                if(Array.isArray(data)){
                    setData(data)
                }
            })
        }else{
            setData([])
        }
    }, [type])
    return (
        <div>
            <div className='showcasebody1'>
                <div className='cartBottom41'>
                {type!='Restaurant' || type!='Hotel'||type!='Games'||type!='Health'||
                        type!='Villas'||type!='Shopping'||type!='Services'||
                        type!='Camping'||type!='Travel'?(
                            <></>
                        ):(
                            <div>
                            <div className='cartButtomLeft41'>
                        <img style={{
                            height: '175px',
                            width: '175px'
                        }} className="img41" src={type=='Restaurant'?Restaurant
                        :type=='Hotel'?Hotels:type=='Games'?Games:type=='Health'?Health:
                        type=='Villas'?Villas:type=='Shopping'?Shopping:type=='Services'?Services:
                        type=='Camping'?Camping:type=='Travel'?Travel:Spa_Salons} alt="img1" />
                    </div>
                    <div style={{marginTop:'-40px',marginLeft:'30px'}} className='cartButtomRight41'>
                        <p style={{fontSize:'32px',margin:'0px'}} className='headline1'>{type}</p>
                        <p style={{fontSize:'24px',margin:'0px'}} className='text21'>{data ? data.length : '0'} Options Available</p>
                    </div>
                            </div>
                        )}
                </div>
                <div style={{marginTop:'10px'}} className='hr6'></div>
                {
                     data ? (
                        data.length>0?(
                            data.map((d, i) => (
                            <Dealoffercart data={d} key={i} />
                        ))
                        ):(
                            <p>No {type} Available</p>
                        )
                    ) :(
                        <Loader/>
                    )
                }
            </div>
            <div style={{
               marginTop: '50px'
            }}>
                <AppOverView />
            </div>
            <div>
                <OptionLand />
            </div>
        </div>
    );
};

export default ShowCaseCategory;