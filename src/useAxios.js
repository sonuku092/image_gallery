import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


const useAxios = (param) => {

    const [responce, setResponce] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    axios.defaults.baseURL = 'https://api.unsplash.com';

    const fatchData = async (url) => {
        try {
            setIsLoading(true);
            const res = await axios(url);
            setResponce(res.data.results);
        } catch(err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() =>{
        fatchData(param);
    }, [param])

  return {
    responce,
    isLoading,
    error,
    fatchData: url => fatchData(url)
  }
}

export default useAxios
