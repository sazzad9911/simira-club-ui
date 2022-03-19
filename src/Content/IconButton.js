import React from 'react';
import '../Content/css/IconButton.css';
import Link from '@mui/material/Link';

const IconButton = (props) => {
    return (
        <Link href="/">
        <button class='iconButtonbox'>
            <img src={props.img} />
            <h5>{props.title}</h5>
        </button>
    </Link>   
    );
};

export default IconButton;