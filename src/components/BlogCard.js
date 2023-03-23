import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BlogCard = (props) => {
    const  blog  = props.blog;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/show-blog/${blog._id}`}>
                        { blog.title }
                    </Link>
                </h2>
                <h3>{blog.author}</h3>
                <p>{blog.text}</p>
            </div>
        </div>
    )
};

export default BlogCard;
