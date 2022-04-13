import React from 'react';
import '../Cart/css/dealcart.css';
import Link from '@mui/material/Link';
import { postData, url, setBrands} from '../action';
import { useDispatch, useSelector } from 'react-redux';
const DealCart = (props) => {
const [brand,setBrand]= React.useState(null)
const dispatch = useDispatch()
    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'brands',
        }).then(data => {
            if (Array.isArray(data)) {
                data.forEach(dataItem => {
                    if(dataItem.name==props.doc.brand){
                        setBrand(dataItem)
                        
                    }
                })
                
                return dispatch(setBrands(data));
            }
            console.log(data);
        }).catch(err => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className='body12'>
            <Link href="/ShowCaseDeal" underline='none' color={'black'}>
            
                <img className="img1" src={props.img1} alt="img1" />

                <div className='cartBottom'>
                     <div className='cartButtomLeft'>
                        <img className="img2" src={brand?brand.image:'https://lh3.googleusercontent.com/V3UUzurrfYRckyv8JQ6EqhB972GXgmFOCEJkDF884o_cOITGWAfPWqemkNIY8Wp3d7Y'}  alt="img1" />

                    </div>
                    <div className='cartButtomRight'>
                        <p>{props.text}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DealCart;