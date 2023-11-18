import React,{useEffect,useState} from "react";
import { fetchDataFromApi } from "../utils/api";

 const useFetch = (url,param)=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading("Loading....");
        setData(null);
        setError(null);

        fetchDataFromApi(url,param)
        .then((res)=>{
          setLoading(false);
          setData(res);
        })
        .catch((error)=>{
          setLoading(false);
          setError("Something went wrong!");
        })
    },[url])

    return {data, loading,error};
}

export default useFetch;
