import { useState,useEffect } from 'react';

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const[isPending,setIsPending] = useState(true);
    const[error,setError] = useState(null);
    useEffect(()=>{
        const abortCont = new AbortController();

        setTimeout(()=>(
            fetch(url, {signal: abortCont.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error('Could not to fetch the data for that resourse');
                }
                return res.json();
            })
            .then((data)=>{
                setData(data);
                setIsPending(false)
            })
            .catch(e=>{
                if(e.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setError(e.message);
                    setIsPending(false)
                }
            }
            )),0)

            return ()=> abortCont.abort();
    },[url]);

    return {data,isPending,error};
}

export default useFetch;