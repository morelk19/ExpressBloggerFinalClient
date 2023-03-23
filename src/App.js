import React, { Component } from 'react';
//react router dom
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


//importing four components 

import CreateBlog from "./components/CreateBlog";
import UpdateBlogInfo from './components/UpdateBlogInfo';
import ShowBlogList from './components/ShowBlogList';
import ShowBlogDetails from './components/ShowBlogDetails';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowBlogList} />
          <Route path='create-blog' component={CreateBlog} />
          <Route path='/edit-blog/:id' component={UpdateBlogInfo} />
          <Route path='/show-blog/:id' component={ShowBlogDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
