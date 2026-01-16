import {useEffect, useState} from "react";
import axios from "axios";

export function useFetch <T> (url : string) {
    const [data, setData] = useState<T | null >(null);

 useEffect( () => {
  async function fetchData () : Promise<void> {
        try{
            const res = await axios.get<T>(url);


            setData(res.data);
            console.log(data);
        }catch(e : any) {
            console.log(e);
        }
     }
     fetchData()
 }, [url])
    return data;
}