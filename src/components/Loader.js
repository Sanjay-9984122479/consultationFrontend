import React from 'react';
import imgApi from '../assets/loader.gif';

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center  b z-50">
            <img src={imgApi} alt="Loading..." className="w-50 h-50" />
        </div>
    );
};
export default Loader;