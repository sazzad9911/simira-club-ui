import React from 'react';
import '../Cart/css/FilterTowCart.css'
import {postData, url} from '../action'

const FilterTowCart = (props) => {
    const [Brands,setBrands]= React.useState()

    React.useEffect(() => {
        postData(url +'/getData',{
            tableName: 'brands',
        }).then((data) => {
            if(Array.isArray(data) && data.length > 0){
               return setBrands(data)
            }
            console.log(data)
        })
    },[])
    return (
        <div className='FilterCartBody'> 
            <div style={{ display: 'flex' }}>
                <h2>Filters</h2>
                <button onClick={()=>{
                    props.change('')
                }} style={{
                    fontSize: '18px'
                }} className='FilterCartButton'>Clear All</button>
            </div>
            <div className='FilterCartDivLine' />
            {/* <p style={{ marginLeft: '15px', marginTop: '30px' }}>Sort by</p>
            <div style={{ display: 'grid', marginTop: '20px' }}>
                <button className='FilterCartButtonPopu'>Popularity</button>
                <button className='FilterCartButtonRat'>Discounts</button>
            </div>
            <div style={{ marginTop: '30px' }} /> */}
            <div className='FilterCartDivLine' />
            <p style={{ marginLeft: '15px', marginTop: '30px' }}>Brands</p>
            <div style={{ display: 'grid', marginTop: '20px' }}>
                {
                    Brands ? (
                        Brands.map((doc,i)=>(
                            <button onClick={()=>{
                                props.change(doc.name)
                            }} key={i} className={props.value==doc.name?'FilterCartButtonPopu':'FilterCartButtonRat'}>{doc.name}</button>
                        ))
                    ):(<></>)
                }
            </div>
            <div style={{ marginTop: '30px' }} />
            
        </div>
    );
};

export default FilterTowCart;
