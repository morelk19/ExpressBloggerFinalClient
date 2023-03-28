import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;

function ShowBlogDetails(props){
    const [blog, setBlog] = useState({});
    const { id } = useParams()
    const navigate = useNavigate();

   
    useEffect(() => {

      axios
      .get(REACT_BACKEND +'/get-one/'+ id)
      .then(res => {
        console.log("Print-showBlogDetails-API-response: " + res.data.oneBlog);
        setBlog(res.data.oneBlog)
      })
      .catch(err => {
        console.log("Error from ShowBlogDetails");
      })

    }, [id])

    // on Delete Click Handler 
    const onDeleteClick = (id) => {

      axios
        .delete(REACT_BACKEND+'/delete-one/'+id)
        .then(res => {
          console.log(res);
          navigate("/");
        })
        .catch(err => {
         console.log(err);
        })
    };

   
    return (
      <div className="ShowBlogDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Blog List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Blog's Record</h1>
              <p className="lead text-center">
                  View Blog's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { <BlogItem blog={blog} /> }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeleteClick.bind(this, blog._id)}>Delete Blog</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-blog/${blog._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Blog
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
    

}


//simple component for table header / row display
function BlogItem(props){
  return (<div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ props.blog.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Text</td>
            <td>{ props.blog.text }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Author</td>
            <td>{ props.blog.author }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Year</td>
            <td>{ props.blog.year }</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Categories</td>
            <td>{ props.blog.categories }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>ID</td>
            <td>{ props.blog.id }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Created At</td>
            <td>{ props.blog.createdAt }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowBlogDetails;