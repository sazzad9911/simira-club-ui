import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../Components/css/optionland.css'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import Loader from './../Content/Loader';
import {postData,url} from '../action'

 
const OptionLand = (props) => {
    const hotels=useSelector(state => state.Hotels)
    const brands =useSelector(state => state.Brands)
    const [Address,setAddress]= React.useState(null)

    React.useEffect(() => {
        postData(url +'/getData',{
            tableName: 'addresses',
        }).then((data) =>{
            if(Array.isArray(data)){
               return setAddress(data)
            }
            console.log(data.message)
        })
    },[])
    return (
        <div className='optionLandBody'>
            <h2 style={{
                marginTop:'50px',
                marginBottom:'40px',
            marginLeft:'5%',
            fontSize: '25px'
            }}>Loads of options for you to explore here</h2> 
           {/* <PopularDeals></PopularDeals>*/}
           <div>
            <h2 style={{ 
                color:'#585858',
                marginLeft:'5%',
                fontSize: '25px',
            }}>Popular Hotels</h2>
            <div className='popularDealsView1'>
            {
                hotels ? (
                    hotels.map((doc,i)=>(
                        i<30?(
                            <div key={i} className='PopularDealsNameCart1'>
                               <Link to={"/ShowcaseHotel/"+doc.id} style={{textDecoration: 'none'}}>
                               <h4>{doc.name}</h4>
                               </Link>
                              <h3 className='dot1'>.</h3> 
                            </div>
                        ):(<></>)
                    ))
                ):(<Loader/>)
            }
            </div>

        </div>
        <div>
            <h2 style={{ 
                color:'#585858',marginLeft:'5%',
                fontSize: '25px'
            }}>Top Brands With Us</h2>
            <div className='popularDealsView1'>
                {
                    brands ? (
                        brands.map((doc,i)=>(
                            i<30?(
                                <TopBrandsName key={i} id={doc.id} TBWU={doc.name}></TopBrandsName>
                            ):(<></>)
                        ))
                    ):(<Loader/>)
                }
               
            </div>

        </div>
        <div>
            <h2 style={{ 
                color:'#585858',
                marginLeft:'5%', 
                fontSize: '25px'
            }}>Cities We Offer</h2>
            <div className='popularDealsView1'>
            {
                Address ? (
                    Address.map((doc,i)=>(
                        <CitiesWeOfferName key={i} CWO={doc.city}></CitiesWeOfferName>
                    ))
                ):(<></>)
            }
            </div>

        </div>
        </div>
    );
}; 

export default OptionLand;

const PopularDeals = (props) => {
    return (
        <div>
            <h2 style={{ 
                color:'#585858',
                marginLeft:'5%',
                fontSize: '25px',
            }}>Popular Deals</h2>
            <div className='popularDealsView'>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>
                <PopularDealsName PDT='Deals near me'></PopularDealsName>

            </div>

        </div>
    );
};
const PopularDealsName = (props) => {
    return (
        <div className='PopularDealsNameCart'>
            <Link to={"#"} color="inherit" underline="none">
                <h4>{props.PDT}</h4>
            </Link>
            <h3 className='dot'>.</h3>
        </div>
    );
};



const TopBrandsName = (props) => {
    return (
        <div className='PopularDealsNameCart2'>
            <Link style={{textDecoration: 'none'}} className='link'
                to={"/ShowCaseDealBrand/"+props.id} color="inherit" underline="none">
                <h4>{props.TBWU}</h4>
            </Link>
        </div>
    );
};


const CitiesWeOfferName = (props) => {
    return (
        <div className='PopularDealsNameCart3'>
            <Link style={{textDecoration: 'none'}}
                to={"/HotelList/"+props.CWO} color="inherit" underline="none">
                <h4>{props.CWO}</h4>
            </Link>
        </div>
    );
};
