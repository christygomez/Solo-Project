import React, { Component } from 'react';
import Post from './Post/Post'

class Posts extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
  // componentDidMount() {
  //   const images = imageLoader()
  //   this.setState({images})
  // }
  render() {
    return (
      <>
        <h5>POSTS</h5>
        <Post/>
      </>
    );
  }
}

export default Posts;
