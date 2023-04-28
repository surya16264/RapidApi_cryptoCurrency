import React, { useState, useEffect, useReducer } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import CoinsListComponent from "./CoinsList.component";
import { fetchApi } from '../../util/FetchApi';

const initialState = {
    currentPage: 0,
    isPreviousDisbale: false,
    isNextDisable: false
};

const reducerMethod = (state, action) => {
    switch (action.type) {
        case 'next':
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        
        case 'previous':
            return {
                ...state,
                currentPage: state.currentPage - 1
            };

        case 'changePageLink':
            return {
                ...state,
                currentPage: action.payload
            }
    
        default:
            break;
    }
}

const CoinsListContainer = () => {
    const [coins, setCoinsData] = useState(null);
    const [loader, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    
    const[state, dispatch] = useReducer(reducerMethod, initialState);

    useEffect(() => {
        const callApi = async() => {
            setIsLoading(true);
            let data = await fetchApi(state.currentPage);
            if (data) {
                 setCoinsData(data);
                 setIsLoading(false);
            }
        }
        
        callApi();
    }, [state.currentPage])

    const onClickPreviousAndNextBtn = (type) => {
        const { pathname } = location;
        dispatch({ type })  

        if (type === 'previous') {
            if (state.currentPage - 1 > 0){
                navigate({
                    pathname,
                    search: `?page=${state.currentPage - 1}`
                });
            } else {
                navigate({
                    pathname
                });
            }   
        } else {
            if (state.currentPage + 1 > 0){
                navigate({
                    pathname,
                    search: `?page=${state.currentPage + 1}`
                });
            } else {
                navigate({
                    pathname
                });
            } 
        }
        
    }

    const containerFunctions = {
        onClickPreviousAndNextBtn: (e) => onClickPreviousAndNextBtn(e)
    };

    const containerProps = () => {
        return {
            coins,
            loader,
            currentPage: state.currentPage
        };
    }

    return (
        <CoinsListComponent
            { ...containerProps() }
            { ...containerFunctions }
        />
    );
};

export default CoinsListContainer;