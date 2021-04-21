import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams()
    const { data:blog,error,isPending } = useFetch('https://api.npoint.io/60d7da8dd16ff43ca34e/blogs/' + id);
    const history = useHistory();
    const handleClick = ()=>{
        fetch(`https://api.npoint.io/60d7da8dd16ff43ca34e/blogs/${id}`,{
            method:'DELETE',
            headers: {
                'Content-type':'application/json'
            }
        }).then(
            history.push('/')
        )
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>✖ Delete Blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;
