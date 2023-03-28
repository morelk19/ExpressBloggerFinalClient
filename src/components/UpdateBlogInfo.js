import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;

class UpdateBlogInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '', 
      author: '',
      year: '',
      categories: [''],
      id: '',
      createdAt: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(REACT_BACKEND+'/get-one/'+this.props.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          text:  res.data.text,
          author: res.data.author,
          year:  res.data.year,
          categories: res.data.categories,
          id: res.data.id,
          createdAt: res.data.createdAt
        })
      })
      .catch(err => {
        console.log("Error from UpdateBlogInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      text: this.state.text,
      author: this.state.author,
      year: this.state.year,
      categories: this.state.categories,
      id: this.state.categories,
      createdAt: this.state.createdAt
    };

    axios
      .put(REACT_BACKEND+'/update-one/'+this.props.id, data)
      .then(res => {
        this.props.history.push('/show-blog/'+this.props.id);
      })
      .catch(err => {
        console.log("Error in UpdateBlogInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBlogInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Blog List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Blog</h1>
              <p className="lead text-center">
                  Update Blog's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Blog'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
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
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="year">Year</label>
              <input
                type='text'
                placeholder='Year of the Blog'
                name='year'
                className='form-control'
                value={this.state.year}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="categories">Categories</label>
              <input
                type='categories'
                placeholder='Categories of Blog'
                name='categories'
                className='form-control'
                value={this.state.categories}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBlogInfo;

