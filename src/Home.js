import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const[isPending,setIsPending] = useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
        setTimeout(()=>(
            fetch('http://localhost:8000/blogs')
            .then(res=>{
                if(!res.ok){
                    throw Error('Could not to fetch the data for that resourse');
                }
                return res.json();
            })
            .then((data)=>{
                setBlogs(data);
                setIsPending(false)
            })
            .catch(e=>{
                setError(e.message);
                setIsPending(false)
            }
            )),1000)
    },[]);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;
