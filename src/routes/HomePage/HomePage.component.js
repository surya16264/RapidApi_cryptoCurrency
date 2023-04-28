import React from "react";
import { Link } from 'react-router-dom';

import './HomePage.style.scss';

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>HomePage</h1>
            <div className="cryptoNote">
                <p>Track and Trade</p>
                <p>Crypro Currencies</p>
                <Link to={'/coinList'} >
                    Click to Trade
                </Link>
            </div>
        </div>
    );
};

export default HomePage;