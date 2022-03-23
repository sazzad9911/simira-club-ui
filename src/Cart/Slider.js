import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Slider = () => {
  const [data,setData] =useState([
      {
          img:"https://api.dominos.com.bd/olo-bg-prod-api/images/cheese_burst_20210629.jpg"
      },
      {
          img:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-voucher-gift-card-design-template-83c6be30559cb58371db182ab0cd0bb7_screen.jpg?ts=1596265409"
      },
      {
          img:"https://www.daily-sun.com/assets/news_images/2019/09/23/Dailysun-2019-04-22-14.jpg"
      }
  ])

  const style = {
    width:'98%',
    height:window.innerWidth<500?200:window.innerWidth<800?300:450,
    marginLeft: '1%',
    borderRadius: '10px',
  }

  return (
    <div>
      <div>
        <Slide autoplay={true}>
        {
            data.map(({img})=>(
                <img src={img} style={style}/>
            ))
        }
        </Slide>
      </div>
    </div>
  );
};

export default Slider;