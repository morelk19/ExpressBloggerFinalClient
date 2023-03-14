import React from 'react';
import '../App.css';
import axios from 'axios'; //library for making requests (easier to use than fetch)
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { useState, useEffect } from 'react';


const REACT_BACKEND = process.env.REACT_ENDPOINT;


function ShowBookList(props){

  // setup hook
  const [books, setBooks] = useState([]);  

  // after component is rendered , get books from endpoint
  console.log();
  useEffect(() => {
    axios
    .get(REACT_BACKEND)
    .then(res => {
      setBooks(res.data);
    })
    .catch(err =>{
      console.log('Error from ShowBookList');
    })
  }, [])

  return (

    <div className="ShowBookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
          </div>

          <div className="col-md-11">
            <Link to="/create-book" className="btn btn-outline-warning float-right">
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>

        </div>

        <div className="list">
              {books.map((book, k) =>
      <BookCard book={book} key={k} />
    )}
        </div>
      </div>
    </div> );

}

export default ShowBookList;
