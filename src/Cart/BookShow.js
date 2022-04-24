import React from 'react';
import Link from '@mui/material/Link';
import '../Cart/css/bookshow.css'

const BookShow = () => {
    return (

        <Link className='bookshowbody' href="#">
            <img className="bookshow" src={require(`../File/icon/Divider Poster.png`)} alt="bookshow" />

        </Link>
    );
};
 
export default BookShow; 