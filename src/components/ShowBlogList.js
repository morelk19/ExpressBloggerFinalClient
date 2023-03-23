import React from 'react';
import '../App.css';
import axios from 'axios'; //library for making requests (easier to use than fetch)
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { useState, useEffect } from 'react';


const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;

function ShowBlogList(props){

  // setup hook
  const [blogs, setBlogs] = useState([]);  

  // after component is rendered , get blogss from endpoint
  console.log();
  useEffect(() => {
    axios
    .get(REACT_BACKEND+ "/all")
    .then(res => {
      setBlogs(res.data.blogs);
    })
    .catch(err =>{
      console.log('Error from ShowBlogList');
    })
  }, [])

  return (

    <div className="ShowBlogList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Blog List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create-book" className="btn btn-outline-warning float-right">
              + Add New Blog
            </Link>
            <br />
            <br />
            <hr />
          </div>

        </div>

        <div className="list">
              {blogs.map((blog, k) =>
      <BlogCard blog={blog} key={k} />
    )}
        </div>
      </div>
    </div> );

}

export default ShowBlogList;