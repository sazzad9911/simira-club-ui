import React from 'react';
import '../Screens/css/ShowCaseCategory.css'
import Dealoffercart from '../Cart/DealOfferCart';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';

const ShowCaseCategory = (props) => {
    return (
        <div>


            <div className='showcasebody1'>
                <div className='cartBottom41'>
                    <div className='cartButtomLeft41'>
                        <img className="img41" src="https://media.istockphoto.com/vectors/restaurant-food-drinks-logo-fork-knife-background-vector-image-vector-id981368726?k=20&m=981368726&s=612x612&w=0&h=Um4YOExWlUgOfpUs2spnN0NrrXs-M71OUuUMbStVFNQ=" alt="img1" />
                    </div>
                    <div className='cartButtomRight41'>
                        <p className='headline1'>Restuarants</p>
                        <p className='text21'>18 Options Available</p>
                    </div>
                </div>
                <Dealoffercart />
                <Dealoffercart />
                <Dealoffercart />
            </div>
            <div className='appoverview'>
                <AppOverView />
            </div>
            <div>
                <OptionLand/>
            </div>
        </div>
    );
};

export default ShowCaseCategory;