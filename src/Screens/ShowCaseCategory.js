import React, { useState } from 'react';
import '../Screens/css/ShowCaseCategory.css'
import Dealoffercart from '../Cart/DealOfferCart';
import AppOverView from '../Cart/AppOverView';
import OptionLand from '../Components/OptionLand';
import Hotels from './../File/icon/Hotels.png';
import Restaurant from './../File/icon/Restaurant.png';
import { useSelector } from 'react-redux';
import Loader from './../Content/Loader';
import { postData, url } from '../action'
import SearchHotelCart from '../Cart/SearchHotelCart';

const ShowCaseCategory = (props) => {
    const [data, setData] = useState(null)
    React.useEffect(() => {

        postData(url + "/getData", {
            tableName: props.name == 'restaurant' ? 'brands' : 'hotels',
            orderColumn: 'popularity'
        }).then(data => {
            if (data.message) {
                console.log(data.message)
                return
            }
            setData(data)
            //dispatch(setBrands(data))
            //console.log(data)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])
    return (
        <div>
            <div className='showcasebody1'>
                <div className='cartBottom41'>
                    <div className='cartButtomLeft41'>
                        <img className="img41" src={props.name == 'restaurant' ? 'https://i.pinimg.com/originals/4e/24/f5/4e24f523182e09376bfe8424d556610a.png' : 'https://static.vecteezy.com/system/resources/thumbnails/000/627/396/small/illust58-5847-01.jpg'} alt="img1" />
                    </div>
                    <div className='cartButtomRight41'>
                        <p className='headline1'>{props.name == 'restaurant' ? 'Restaurant' : 'Hotels'}</p>
                        <p className='text21'>{data ? data.length : '0'} Options Available</p>
                    </div>
                    
                </div>
                <div className='hr6'></div>
                {
                    props.name == 'restaurant' && data ? (
                        data.map((d, i) => (
                            <Dealoffercart data={d} key={i} />
                        ))
                    ) :
                        props.name == 'hotel' && data ? (
                            data.map((d, i) => (
                                <SearchHotelCart data={d} key={i} />
                            ))
                        ) : (
                            <Loader />
                        )
                }
            </div>
            <div className='appoverview'>
                <AppOverView />
            </div>
            <div>
                <OptionLand />
            </div>
        </div>
    );
};

export default ShowCaseCategory;