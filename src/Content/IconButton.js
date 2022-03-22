import React from 'react';
import '../Content/css/IconButton.css';
import Link from '@mui/material/Link';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Button from '@mui/material/Button';

const IconButton = (props) => {
    return (

        <Link href="/">
            <button className='iconButtonbox'>
                <img src={props.img} />
                <h5>{props.title}</h5>
            </button>
        </Link>
    );
};

export default IconButton;