import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import CoinDetailsComponent from "./CoinDetailsPage.component";
import { fetchCoinDetailsApi } from '../../util/FetchApi';

const CoinDetailsContainer = () => {
    const[coinDetail, setDetails] = useState(null);
    const [loader, setIsLoading] = useState(true);
    const{ uuid } = useParams();

    const isMounted = useRef();

    useEffect(() => {
        const getCoinDetails = async() => {
            let data = await fetchCoinDetailsApi(uuid);
            if (data) {
                setDetails(data);
                setIsLoading(false);
            }
        }

        if (isMounted.current) return;
        getCoinDetails();
        isMounted.current = true;
    }, [uuid]);

    const containerProps = () => {
        return {
            coinDetail,
            loader
        };
    }

    return (
        <CoinDetailsComponent
            { ...containerProps() }
        />
    );
};

export default CoinDetailsContainer;