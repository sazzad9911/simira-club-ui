import React from 'react';
import HotelCart from '../Cart/HotelCart';
import '../Components/css/popularhotels.css';

const PopularHotels = () => {
    return (
        <div className='popularhotelsBody'>
            <div className='popularhotelsText'>
                <h2>Popular Hotels</h2>
            </div>
            <div className='popularhotelsCart'>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://www.berjayahotel.com/sites/default/files/BMH%20PremierRoom%20800x800.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://www.berjayahotel.com/sites/default/files/BMH%20PremierRoom%20800x800.jpg'/>
            <HotelCart thirdText='Free for Members' scendText='Shirdi, Maharashtra' text='Shradha Saburi Palace' img='https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/06/full/1614979411-2048.jpg'/>
            </div>

        </div>
    );
};

export default PopularHotels;