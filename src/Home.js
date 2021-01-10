import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Muhammad Siddiq', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Others', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Muhammad Siddiq', id: 3 }
    ]);

    const [name,setName] = useState('Muhammad Siddiq')

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log('use effect ran');
        console.log(name);
    },[name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={()=>setName('Usmon')}>change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;
