import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs,isPending,error} = useFetch('https://api.npoint.io/60d7da8dd16ff43ca34e/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;
