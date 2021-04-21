import {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Muhammad Siddiq');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body,author}

        fetch('https://api.npoint.io/60d7da8dd16ff43ca34e/blogs', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(
            <p id="text">Blog Added !</p>,
            history.push('/')
        )   
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                required
                placeholder="Blog title..."
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Blog body..." 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={e=>setAuthor(e.target.value)}
                >
                    <option value="Muhammad Siddiq">Muhammad Siddiq</option>
                    <option value="Others">Others</option>
                </select>
                <button>Add Blog</button>
                <p id="text"></p>
            </form>
        </div>
    );
}
 
export default Create;
