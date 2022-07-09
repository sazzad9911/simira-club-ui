import React from 'react';
import '../Cart/css/dealcart.css';
import { postData, url, setBrands} from '../action';
import { useDispatch, useSelector } from 'react-redux';
import Img from './css/TopBrands (4).png'
import {Link} from 'react-router-dom'

const DealCart = (props) => {
const data = props.doc
const dispatch = useDispatch()
    
    return (
        <Link to={"/ShowCaseCategory/"+data.brands} style={{
            textDecoration: 'none'
        }}>
        <div style={{
            backgroundImage: `url('${data.image}')`,
            backgroundSize: 'cover',
        }} className='body12'>
            <div className='cartBottom'>
                     <div>
                     <p className='title'>
                     {data.name!='null'?data.name:''}
                     </p>
                     <p className='sub-title'>{data.details!='null'?data.details:''}</p>
                     </div>
            </div>
        </div>
        </Link>
        
    );
};

export default DealCart;