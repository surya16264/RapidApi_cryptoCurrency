import { Link } from "react-router-dom";

import './Header.style.scss';

const Header = () => {
    return(
        <>
            <header className="header">
                <div className="Header-logo">
                    <h1>{('Crypto')}</h1>
                </div>
                <div className="Header navbar">
                    <ul className="nav-link">
                        <li><Link className='header-link' to={'/'}>{('Home')}</Link></li>
                        <li><Link className='header-link' to={'/coinList'}>{('Coins')}</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;