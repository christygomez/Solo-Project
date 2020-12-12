import React, { Component } from 'react';


class Post extends Component {
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
        <h5>Single Post</h5>
        <button>Submit</button>
        <button>Edit</button>
        <button>Delete</button>

      </>
    );
  }
}

export default Post;
