import React, { createRef } from 'react';
import DealCart from '../Cart/DealCart';
import '../Components/css/topbrands.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import { postData, url, setDeals } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const PopularDeal = () => {
    const ref = createRef()
    const dispatch = useDispatch()
    const deals = useSelector(state => state.Deals)

    const Left = () => {
        ref.current.scrollLeft -= 100
    }
    const Right = () => {
        ref.current.scrollLeft += 100
    }
    React.useEffect(() => {
        postData(url + '/getData', {
            tableName: 'deals',
            orderColumn: 'date'
        }).then(data => {
            if (Array.isArray(data)) {
                return dispatch(setDeals(data));
            }
            console.log(data);
        }).catch(err => {
            console.log(err.message);
        })
    }, [])
    return (
        <div style={{ background: 'none' }} className='box'>

            <div className='arrowLeft'>
                <Button onClick={Left}>
                    <ArrowBackIosNewIcon color="disabled" fontSize='medium'
                    ></ArrowBackIosNewIcon>
                </Button>
            </div>

            <div className='arrowRight'>
                <Button onClick={Right}>
                    <ArrowForwardIosIcon
                        fontSize='medium'
                        color="disabled"></ArrowForwardIosIcon>
                </Button>
            </div>
            <h2> Popular Deals</h2>
            <div ref={ref} className='brandShow'>
                {
                    deals ? (
                        deals.map((d, i) => (
                            <DealCart key={i} doc={d} img1={d.image}
                                text={d.name}>

                            </DealCart>
                        ))
                    ) : (
                        <CircularProgress />
                    )
                }


            </div>
        </div>
    );
};

export default PopularDeal;