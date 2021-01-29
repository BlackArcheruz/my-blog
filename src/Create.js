import {useState} from 'react';

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Muhammad Siddiq');

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body,author}

        console.log(blog);
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
                <p></p>
            </form>
        </div>
    );
}
 
export default Create;