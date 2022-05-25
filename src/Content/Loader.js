import React from 'react';
import './css/loader.css'
import { Oval } from "react-loader-spinner";
const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <Oval color="#FC444B" height={80} width={80} />
        </div>
    );
};

export default Loader;