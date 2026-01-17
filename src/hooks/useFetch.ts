import {useEffect, useState} from "react";
import axios from "axios";

interface UseFetchProps<T> {
    data: T | null;
    loading : boolean;
    error : Error | null
}

export function useFetch <T> (url : string): UseFetchProps<T> {
    const [data, setData] = useState<T | null >(null);
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)

 useEffect( () => {
    let isMounted = true
  async function fetchData () : Promise<void> {
    
        try{
            setError(null)
            setLoading(true)

            const res = await axios.get<T>(url)

            if(isMounted){
                setData(res.data);
                console.log(res.data);
            }
        }catch(e : any) {
            if(isMounted){
                setError(e)
            }
        }finally{
            if(isMounted){
                setLoading(false)
            }
        }
     }
     fetchData()

     return () => {
        isMounted = false
     }
 }, [url])
    return {data, error, loading};
}