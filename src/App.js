import React, { Component } from 'react';
//react router dom
import { Route, Routes } from 'react-router-dom';
import './App.css';


//importing four components 

import CreateBlog from "./components/CreateBlog";
import UpdateBlogInfo from './components/UpdateBlogInfo';
import ShowBlogList from './components/ShowBlogList';
import ShowBlogDetails from './components/ShowBlogDetails';


class App extends Component {
  render() {
    return (

      <Routes>
          <Route exact path='/' element={<ShowBlogList/>} />
          <Route path='/create-blog' element={<CreateBlog/>} />
          <Route path='/edit-blog/:id' element={<UpdateBlogInfo/>} />
          <Route path='/show-blog/:id' element={<ShowBlogDetails/>} />
      </Routes>
    );
  }
}

export default App;
