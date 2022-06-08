import React from 'react';
import '../Cart/css/DealOfferCart.css'
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Dealoffercart = (props) => {
    const data=props.data
    const deals =useSelector(state => state.Deals)

    return (
        <div > 
            <div className='cartBottom6'>
                <div className='cartButtomLeft6'>
                   <img className="img6" src={data.image} alt={data.name}/>
                </div>
                <div className='cartButtomRight6'>
                    <div className='headlineLeft'>
                         <div>
                            <p className='headline6'>{data.name}</p>
                        </div>
                        {/* <div className='headlineReft'>
                            <Button>
                                <FavoriteBorderIcon sx={{ color: pink[500] }} />
                            </Button>
                        </div> */}
                    </div>
                    <p className='text2'>{deals?deals.filter(d=>d.brand_id==data.id).length+' Offers Available':'0'+' Offers Available'}</p>
                    <div className='buttonView6'>
                        <Link to={'/ShowCaseDealBrand/'+data.id} style={{textDecoration: 'none'}} >
                            <div className='button6'>
                                <p>VIEW</p>
                            </div>
                        </Link>
                        <div>
                    <svg className='DealCartIcon' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.1984 25.6846C12.2459 25.6846 11.2946 25.3229 10.5676 24.6008L9.66335 23.6966C9.31282 23.3473 8.84338 23.154 8.34545 23.1528H7.07337C5.01724 23.1528 3.34384 21.4794 3.34384 19.4233V18.15C3.3426 17.6533 3.14937 17.1838 2.79884 16.8308L1.9095 15.9427C0.452868 14.4947 0.446675 12.1277 1.89588 10.6698L2.80008 9.7644C3.14937 9.41387 3.3426 8.94443 3.34384 8.4465V7.17566C3.34384 5.11829 5.01724 3.44489 7.07337 3.44489H8.34668C8.84338 3.44489 9.31158 3.25167 9.66459 2.89865L10.5552 2.01055C12.0031 0.55392 14.3689 0.546488 15.828 1.99693L16.7322 2.90113C17.084 3.25167 17.5522 3.44489 18.0489 3.44489H19.3222C21.3784 3.44489 23.0517 5.11829 23.0517 7.17566V8.44774C23.053 8.94443 23.2462 9.41387 23.5967 9.76688L24.4861 10.6562C25.1909 11.3573 25.581 12.2912 25.5848 13.2883C25.5872 14.2792 25.2057 15.2119 24.5109 15.9167C24.4985 15.9291 24.4873 15.9427 24.4749 15.9539L23.5955 16.8333C23.2462 17.1838 23.053 17.6533 23.0517 18.1512V19.4233C23.0517 21.4794 21.3784 23.1528 19.3222 23.1528H18.0489C17.5522 23.154 17.0828 23.3473 16.731 23.6978L15.8404 24.5871C15.1146 25.3179 14.1559 25.6846 13.1984 25.6846Z" fill="#64B657" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.7744 10.8851C10.5701 11.0894 10.3052 11.1996 10.0117 11.1996C9.73685 11.1996 9.46693 11.0869 9.25026 10.8838C9.04473 10.6795 8.92834 10.3997 8.92834 10.1162C8.92834 9.84627 9.04225 9.56893 9.24283 9.35474C9.35302 9.2433 9.48427 9.15911 9.61551 9.11454C9.98943 8.94367 10.4859 9.04396 10.7806 9.3535C10.8858 9.45874 10.9663 9.57389 11.0196 9.69398C11.0777 9.82275 11.1075 9.96885 11.1075 10.1162C11.1075 10.4109 10.9898 10.6845 10.7744 10.8851ZM17.1513 9.34905C16.729 8.92792 16.0415 8.92792 15.6192 9.34905L9.25257 15.7156C8.8302 16.138 8.8302 16.8254 9.25257 17.2491C9.45819 17.4534 9.72945 17.5662 10.0193 17.5662C10.3091 17.5662 10.5804 17.4534 10.7848 17.2491L17.1513 10.8825C17.5737 10.4589 17.5737 9.77267 17.1513 9.34905ZM16.7982 15.4849C16.3971 15.3165 15.9216 15.4081 15.6046 15.7251C15.539 15.8018 15.4462 15.9207 15.383 16.0606C15.3162 16.2116 15.3075 16.3738 15.3075 16.4828C15.3075 16.5918 15.3162 16.7527 15.383 16.9038C15.4449 17.0424 15.5192 17.1551 15.617 17.2529C15.8411 17.4609 16.1011 17.5662 16.3909 17.5662C16.6657 17.5662 16.9356 17.4547 17.1573 17.248C17.3541 17.0511 17.4619 16.7787 17.4619 16.4828C17.4619 16.1856 17.3541 15.9145 17.156 15.7164C17.0471 15.6087 16.9158 15.5245 16.7982 15.4849Z" fill="white" />
                        </svg>
                        <p style={{marginLeft: '10px'}} className='bottomText'>Free for Members</p>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className='hr6'></div>
        </div>
    );
};

export default Dealoffercart;
