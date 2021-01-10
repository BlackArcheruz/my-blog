import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // let name = 'Usmon';
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Muhammad Siddiq', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Others', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Muhammad Siddiq', id: 3 }
    ]);

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;
