import React, { useState } from "react";
import './css/slider.css'
import { postData, url } from "../action";
import { useSelector } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'
import { AiFillAccountBook } from "react-icons/ai";
import Loader from './../Content/Loader';

const Slider = () => {
   const data= useSelector(state => state.Banners)
    

    const style = {
        width: '98%',
        height: window.innerWidth < 500 ? 200 : window.innerWidth < 800 ? 300 : 450,
        marginLeft: '1%',
        borderRadius: '10px',
    }
    const properties = {
        
      };
    return (
        <Carousel fade>
         {
                data ? (
                    data.map((d) => (
                                <Carousel.Item  interval={3000} key={d.id}>
                                <img  src={d.image} className='slider' />
                                </Carousel.Item>
                            ))
                ) : (
                    <Loader/>
                )
            }
        </Carousel>
    );
};

export default Slider;