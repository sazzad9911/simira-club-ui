import { React, } from 'react';
import Link from '@mui/material/Link';
import '../Content/css/brand.css'

const Brands = (props) => {
    return (
        <Link href="#">
            <div className='body'>
                <img className="img" src={props.img} alt="img1" />
            </div>
        </Link>

    );
};

export default Brands; 