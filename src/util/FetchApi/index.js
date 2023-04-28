import axios from "axios";
import { X_RAPID_API_HOST } from './config';

const X_RAPID_API_KEY = process.env.REACT_APP_X_RAPID_API_KEY;

export const fetchApi = async(page = 0) => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '10',
        offset: page
      },
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': X_RAPID_API_KEY,
        'X-RapidAPI-Host': X_RAPID_API_HOST
      }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};



export const fetchCoinDetailsApi = async(id) => {
    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': X_RAPID_API_KEY,
          'X-RapidAPI-Host': X_RAPID_API_HOST
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data;
      } catch (error) {
          console.error(error);
      }
}
