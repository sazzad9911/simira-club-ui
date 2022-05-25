import { React, } from 'react';
import {Link} from 'react-router-dom'
import '../Content/css/brand.css'

const Brands = (props) => {
    const data = props.data
    return (
        <Link style={{textDecoration: 'none'}} to={"/ShowCaseDealBrand/"+data.id}>
            <div className='body'>
                <img className="img" src={props.img} alt="img1" />
            </div>
        </Link>

    ); 
}; 

export default Brands; 