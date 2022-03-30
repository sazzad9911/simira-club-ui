import React, { createRef, useState } from 'react';
import '../Components/css/topbrands.css';
import Brands from '../Content/Brands';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';

import { Oval } from "react-loader-spinner";
import { postData, url } from "../action";

const TopBrands = (props) => {
    const ref = createRef()

    const Left = () => {
        ref.current.scrollLeft -= 60;
    }
    const Right = () => {
        ref.current.scrollLeft += 60;
    }

    const [data, setData] = useState(null)
    React.useEffect(() => {
        postData(url + "/getData", {
            tableName: 'brands', orderColumn:'popularity'
        }).then(data => {
            if (data.message) {
                console.log(data.message)
                return
            }
            setData(data)
           // console.log(data)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])
    return (
        <div className='box'>
            <div className='arrowLeft1'>
                <Button onClick={Left}>
                    <ArrowBackIosNewIcon color="disabled" fontSize='medium'
                    ></ArrowBackIosNewIcon>
                </Button>
            </div>

            <div className='arrowRight1'>
                <Button onClick={Right}>
                    <ArrowForwardIosIcon
                        fontSize='medium'
                        color="disabled"></ArrowForwardIosIcon>
                </Button>
            </div>
            <h2>{props.headText}</h2>
            <div ref={ref} className='brandShow'>
                {
                    data ? (
                        data.map((db) => (
                        <Brands key={db.id} img={db.image}/> 
                        ))
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
        </div>
    );
};

export default TopBrands;