import React from "react";
import { useNavigate } from 'react-router-dom';
import Loader from "../../components/Loader";
import './CoinDetailsPage.style.scss';

function renderCoinDetails(coin, navigate) {
    const { '24hVolume': volume } = coin;
    
    return (
        <>
            <div className="leftBlock">
                <div className="coinImg">
                    <img className="coinImg" src={ coin.iconUrl } alt="coinImg" />
                </div>
                <div className="coinName">
                    <h2>{ coin.name }</h2>
                    <p className="coinRank">
                        Rank: #{ coin.rank }
                    </p>
                </div>
            </div>
            <div className="rightBlock">
                <div className="topContent">
                    <div className="coinPrice">
                        <p>Price(USD) : <span>{ parseFloat(coin.price).toFixed(2) }</span></p>
                    </div>
                    <div className="coinChange">
                        <p>
                            Change(%) : <span>{ coin.change >= 0 ? <div className="triangleUp"></div> : <div className="triangleDown"></div> }</span>
                            { coin.change }
                        </p>
                    </div>
                    <div className="coinVolume">
                        <p>24 Hour Volume : { volume }</p>
                    </div>
                    <div className="coinMarketCap">
                        <p>Market Cap : { coin.marketCap }</p>
                    </div>
                    <div className="coinSymbol">
                        <p>Symbol : <strong>{coin.symbol}</strong></p>
                    </div>
                </div>
                <div className="BottomContent">
                    <h3>Description:</h3>
                    <p>{ coin.description }</p>
                </div>
                <div className="backButton">
                    <button className="goBackBtn" onClick={ () => navigate(-1) }>Back to List</button>
                </div>
            </div>
        </>
    );
} 

const CoinDetailsComponent = (props) => {
    const { loader } = props;
    const navigate = useNavigate();


    if (loader) {
        return <Loader isLoading={ loader } />
    }

    const {
        coinDetail: {
            data: {
                coin
            } = {}
        } = {}
    } = props;

    return (
        <div className="DetailsPage">
            <h1>Coin Details Page</h1>
            <div className="DetailsBlock">
                { renderCoinDetails(coin, navigate) }
            </div>   
        </div>
    );
    
};

export default CoinDetailsComponent;