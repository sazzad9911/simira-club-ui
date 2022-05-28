import React from 'react';
import '../Content/css/IconButton.css';
import {Link} from 'react-router-dom'
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Button from '@mui/material/Button';

const IconButton = (props) => {
    return (

        <Link style={{textDecoration: 'none'}} to={"/ShowCaseCategory"+props.link}>
            <button className='iconButtonbox'>
                <img src={props.img} />
                <h5>{props.title}</h5>
            </button>
        </Link>
    );
};

export default IconButton; 