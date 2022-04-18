import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post/Post.js'
import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
axios.defaults.baseURL = 'practiceapi.devmountain.com/api'
class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };

    this.updatePost = this.updatePost.bind( this );
    this.deletePost = this.deletePost.bind( this );
    this.createPost = this.createPost.bind( this );
  }
  
  componentDidMount() {
    console.log("Component Did Mount");
    axios.get('https://practiceapi.devmountain.com/api/posts')
    .then(res => {
      const posts = res.data;
      this.setState({posts})
      console.log(posts);
    })

    
  }

  updatePost() {
  
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {posts.map((post) => {
            return(
              <Post key={post.id}/>
            )
          })}
          
        </section>
      </div>
    );
  }
}

export default App;
