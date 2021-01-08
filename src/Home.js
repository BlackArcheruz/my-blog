import { useState } from 'react';

const Home = () => {
    // let name = 'Usmon';
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Muhammad Siddiq', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Others', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Muhammad Siddiq', id: 3 }
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
