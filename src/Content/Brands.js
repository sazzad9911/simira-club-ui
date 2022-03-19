import { React,  } from 'react';
import Link from '@mui/material/Link';
import '../Content/css/brand.css'

const Brands = (props) => {
    return (

        <div className='body'>
            <Link href="#">
                <img className="img" src={props.img} alt="img1" />
            </Link>
        </div>
    );
};

export default Brands;