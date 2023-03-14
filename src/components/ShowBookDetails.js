import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;

function showBookDetails(props){
    const [book, setBook] = useState({});

    console.log(props);
    useEffect(() => {

      axios
      .get(REACT_BACKEND +'/'+ props.match.params.id)
      .then(res => {
        console.log("Print-showBookDetails-API-response: " + res.data);
        setBook(res.data)
      })
      .catch(err => {
        console.log("Error from ShowBookDetails");
      })

    }, [])

    // on Delete Click Handler 
    const onDeleteClick = (id) => {
      axios
        .delete(REACT_BACKEND+'/'+id)
        .then(res => {
          props.history.push("/");
        })
        .catch(err => {
          console.log("Error form ShowBookDetails_deleteClick");
        })
    };

   
    return (
      <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { <BookItem book={book} /> }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeleteClick.bind(this,book._id)}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
    

}


//simple component for table header / row display
function BookItem(props){
  return (<div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ props.book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ props.book.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ props.book.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ props.book.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ props.book.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ props.book.description }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default showBookDetails;
