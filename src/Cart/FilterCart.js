import React from 'react';
import '../Cart/css/FilterCart.css'
import StarIcon from '@mui/icons-material/Star';

const FilterCart = (props) => {
    return ( 
        <div className='filterBox'> 
            <div style={{ display: 'flex',justifyContent:'space-between' }}>
                <h2>Filters</h2>
                <button onClick={() =>{
                    props.setCategory('')
                }} className='FilterCartButton'>
                <p style={{margin:'0px'}}>Clear All</p></button>
            </div>
            <div className='FilterCartDivLine' />
            {/* <p style={{ marginLeft: '15px', marginTop: '30px' }}>Sort by</p>
            <div style={{ display: 'grid', marginTop: '20px'}}>
                <button style={{
                    height: 'auto',
                    width: 'auto',
                    padding: '5px'
                }} className='FilterCartButtonPopu'>   Popularity
                </button>
                <button style={{
                    height: 'auto',
                    width: 'auto',
                    padding: '5px'
                }}  className='FilterCartButtonRat'> Ratings
               </button>
                <button style={{
                    height: 'auto',
                    width: 'auto',
                    padding: '5px'
                }} className='FilterCartButtonRat'> Amenities
                </button>
            </div>
            <div style={{ marginTop: '30px' }} />
            <div className='FilterCartDivLine' />
            <p style={{ marginTop: '30px', marginLeft: '15px' }}>Ratings</p>
            <div style={{
                display: 'flex',
                marginLeft: '15px',
                marginTop: '10px',
            }}>
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
                <StarIcon style={{ color: '#64B657' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
                <StarIcon style={{ color: '#B2DBAC' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#D7FB73' }} />
                <StarIcon style={{ color: '#D7FB73' }} />
                <StarIcon style={{ color: '#D7FB73' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#FBDD73' }} />
                <StarIcon style={{ color: '#FBDD73' }} />
            </div>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                marginLeft: '15px'
            }}>
                <StarIcon style={{ color: '#E47768' }} />
            </div>
            <div style={{ marginTop: '30px' }} />
            <div className='FilterCartDivLine' /> */}
            <p style={{ marginTop: '30px', marginLeft: '15px' }}>Categories</p>
            <div style={{ display: 'flex' }}>
                <button onClick={()=>{
                    props.setCategory('deluxe')
                }} style={{
                    height: 'auto',
                    width: 'auto',
                    padding: '5px'
                }}  className={props.value=='deluxe' ? 'FilterCartButtonDel':'FilterCartButtonVil'}>Deluxe</button>
                <button onClick={()=>{
                    props.setCategory('villas')
                }} style={{
                    height: 'auto',
                    width: 'auto',
                    padding: '5px'
                }}  className={props.value=='villas' ? 'FilterCartButtonDel':'FilterCartButtonVil'}>Villas</button>
            </div>
            <button onClick={()=>{
                    props.setCategory('farm-house')
                }} style={{
                    height: 'auto',
                    width: 'auto',
                    padding: '5px'
                }} className={props.value=='farm-house' ? 'FilterCartButtonDel':'FilterCartButtonVil'}>Farm House</button>
        </div>
    );
};

export default FilterCart;
