import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const REACT_BACKEND = process.env.REACT_APP_ENDPOINT + '/create-one';

function CreateBlog(props){

  console.log("Hello");

  const [formData, setFormData] = useState({})
  
  const onChange = e => {
    const {name, value} = e.target;

    //update the form data on change 
    setFormData({
      ...formData, [name]:value
    })
    
  }

  const onSubmit = e => {
    e.preventDefault();

    //pass formData to post
    axios
      .post(REACT_BACKEND, formData)
      .then(res => {
        setFormData(res.data.blogs)
        props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBlog!");
      })
  }  

  return (
    <div className="CreateBlog">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
                Show Blog List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add </h1>
            <p className="lead text-center">
                Create new blog
            </p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Title of the Book'
                  name='title'
                  className='form-control'
                  value={formData.title}
                  onChange={onChange}
                />
              </div>
              <br />

            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Blog'
                name='title'
                className='form-control'
                value={formData.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="formText">Text</label>
              <input
                type='text'
                placeholder='text'
                name='formText'
                className='form-control'
                value={formData.text}
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={formData.author}
                onChange={onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="year">Year</label>
              <input
                type='text'
                placeholder='Year of the Blog'
                name='year'
                className='form-control'
                value={formData.year}
                onChange={onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="categories">Categories</label>
              <input
                type='categories'
                placeholder='Categories of Blog'
                name='categories'
                className='form-control'
                value={formData.categories}
                onChange={onChange}
              />
            </div>

              <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
        </div>
        </div>
      </div>
    </div>

  );

}

export default CreateBlog;
