import React from 'react';

const Pagination = (props) => {
    const length = props.length;
    const perPage = props.perPage;
    const [i,setI]= React.useState([])
    const [Active,setActive]= React.useState(0)
    //from and to function goes
    React.useEffect(() => {
        let floatPage=length/perPage;
        let intPage=parseInt(length/perPage);
        let arr=[]
        for(var j=0;j<intPage;j++){
            arr.push(8)
        }
        if(floatPage>intPage){
            arr.push(7)
        }
        setI(arr)
    },[])

    return (
        <div style={{
            width: '100%',
            minHeight: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
       {
        i.map((d,i)=>(
            <button onClick={()=>{
                props.lowLevel(i*perPage)
                props.highLevel((i*perPage) +perPage)
                setActive(i)
            }} style={{
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                margin: '10px',
                color:Active==i?'#FC444B':'#000000',
                fontSize: '18px',
                fontWeight: 'bold'
            }} key={i}>{i+1}</button>
        ))
       }
        </div>
    )
};

export default Pagination;