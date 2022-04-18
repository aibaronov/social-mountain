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
    this.createSearch = this.createSearch.bind(this);
  }
  
  componentDidMount() {
    console.log("Component Did Mount");
    axios.get('https://practiceapi.devmountain.com/api/posts')
    .then(res => {
      const posts = res.data;
      this.setState({posts})
    })

    
  }

  updatePost(id, text) {
    axios.put(`https://practiceapi.devmountain.com/api/posts?id=${id}`, {text})
    .then(res => {this.setState({posts: res.data})})
  }

  deletePost(id) {
    axios.delete(`https://practiceapi.devmountain.com/api/posts?id=${id}`).then(res => {
      this.setState({posts: res.data})
    })
  }

  createPost(text) {
    axios.post('https://practiceapi.devmountain.com/api/posts', {text}).then( res => {
      this.setState({posts: res.data});
    })
  }

  createSearch(textVal){
    console.log("Create search in App.js");
    console.log(`Text Value: ${textVal}`)
    axios.get(`https://practiceapi.devmountain.com/api/posts/filter?text=${textVal}`).then(res => {
      console.log(textVal);
      console.log(res.data);
      const posts = res.data
      this.setState({posts})
    })
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header searchBarFn={this.createSearch}/>

        <section className="App__content">

          <Compose createPostFn={this.createPost}/>
          {posts.map((post) => {
            return(
              <Post 
                key={post.id} 
                text={post.text} 
                date={post.date} 
                id={post.id} 
                updatePostFn={this.updatePost}
                deletePostFn={this.deletePost}
                />
            )
          })}
          
        </section>
      </div>
    );
  }
}

export default App;
