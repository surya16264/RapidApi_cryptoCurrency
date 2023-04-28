import React from "react";
import Loader from "../../components/Loader";
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination';
// import { PER_PAGE } from './CoinsList.config';
// import { isMobile } from '../../util/Mobile';

import './CoinsList.style.scss';


const renderTableBody = (coin) => {
    const { symbol, name, price, change, uuid, iconUrl } = coin;

    function renderCoinContent(data, value) {

        if (value === 'name') {
            return (
                <Link
                    className="CoinsList"
                    key={uuid}
                    to={ `/coin/${uuid}` }
                >  
                    <div className="coinNameAndImg">
                        <div>
                            <img className="coinImg" src={ iconUrl } alt="coinImg" />
                        </div>
                        <p>{data}</p>
                    </div>
                </Link>
            );
        }

        if (value === 'priceChange') {
            return (
                <Link
                    className="CoinsList"
                    key={uuid}
                    to={ `/coin/${uuid}` }
                >  
                    <div className="priceChangeData">
                        { data >= 0 ? <div className="triangleUp"></div> : <div className="triangleDown"></div> }
                        <p>{data}</p>
                    </div>
                </Link>
            );
        }

        return (
            <Link
                className="CoinsList"
                key={uuid}
                to={ `/coin/${uuid}` }
            >  
                <div>
                    <p>{data}</p>
                </div>
            </Link>
        );
        
    }

    return (
        <tr>
            <td>{ renderCoinContent(name, 'name') }</td>
            <td>{ renderCoinContent(symbol) }</td>
            <td>{ renderCoinContent(parseFloat(price).toFixed(2)) }</td>
            <td>{ renderCoinContent(change, 'priceChange') }</td>
        </tr>   
    );
}

function renderPagination({
    onClickPreviousAndNextBtn, currentPage
}) {
    return (
        <Pagination
            onClickPreviousAndNextBtn={ onClickPreviousAndNextBtn }
            currentPage={ currentPage }
        />
    );
}

const CoinsListComponent = (props) => {
    const { loader } = props;

    if (loader) {
        return <Loader isLoading={ loader }/>;
    }

    const {
        coins: {
            data: {
                coins: coinsList
            }
        }
    } = props;

    const coins = coinsList?.map((coin) => {
        return (
            <>{ renderTableBody(coin) }</>          
        );
    });

    return (
        <div className="ListingPage">
            <h1>Price Listing</h1>
            <div className="ListingBlock">
                <table className="coinsTable">
                    <thead>
                        <tr>
                            <th>Coin Name</th>
                            <th>Symbol</th>
                            <th>Price(USD)</th>
                            <th>Change(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { coins }
                    </tbody>
                </table>
            </div> 
            { renderPagination(props) }   
        </div>
    );
};

export default CoinsListComponent;