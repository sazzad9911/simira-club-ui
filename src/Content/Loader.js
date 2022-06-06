import React from 'react';
import './css/loader.css'
const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <div className="loader-spinner"></div>
        </div>
    );
};

export default Loader;