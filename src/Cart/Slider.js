import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import './css/slider.css'
import { Oval } from "react-loader-spinner";
import { postData, url } from "../action";
import { useSelector } from "react-redux";

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
        <div className="slider-container">

            {
                data ? (
                    <Slide {...properties} autoplay={true}>
                        {
                            data.map((d) => (
                                <img key={d.id} src={d.image} className='slider' />
                            ))
                        }
                    </Slide>
                ) : (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}>
                        <Oval color="#FC444B" height={80} width={80} />
                    </div>
                )
            }
        </div>
    );
};

export default Slider;