import React from "react";
import './Loader.style.scss';

const Loader = (props) => {
    const { isLoading } = props;
    
    if(!isLoading) return null;

    return (
        <div className="Loader">
            <span className="loader"></span>
        </div>
    );  
};

export default Loader;