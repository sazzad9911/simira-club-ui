import React from 'react';
import '../Content/css/IconButton.css';
import Link from '@mui/material/Link';

const IconButton = (props) => {
    return (
    <div className='iconboxOne'>
            <Link href="/">
                <button className='iconbox'>
                    <img src={props.img} />
                    <h5>{props.title}</h5>
                </button>
            </Link>
            
        </div>

    );
};

export default IconButton;