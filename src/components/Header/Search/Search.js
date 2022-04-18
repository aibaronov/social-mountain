import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props){
    super(props);

    this.state = { 
      text: ''
    }
    this.getSearchVal = this.getSearchVal.bind(this);
    this.searchPosts = this.searchPosts.bind(this);
  }
  getSearchVal(event){
    this.setState({text: event.target.value})
    console.log(this.state.text);
  }
  searchPosts(event){
    event.preventDefault();
    const {searchFn} = this.props;
    const searchValue = this.state.text;
    console.log(`Searching in Search.js: ${searchValue}`)
    searchFn(this.state.text);
  }
  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input onChange={this.getSearchVal} placeholder="Search Your Feed" />

          <SearchIcon onClick={this.searchPosts}id="Search__icon" />
        </div>
        
      </section>
    )
  }
}