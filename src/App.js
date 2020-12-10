import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
// const unirest = require('unirest');

// const path = require('path');
// const express = require('express');

// const path = require("path");
// import picture from '../solo-project-images/cows/images-1.jpg'
import { render } from 'react-dom';

const apiKey = '0a7511d5b55d41808d35f7f3afc68940';

// fetch ('link', {method:'POST', headers:{'Content-Type':'application/json'}},body:JSON.stringify(ITEMS TO SEND?)).then(res=>res.json()).then(data=>console.log(data))

// fetch ('link').then(res=>res.json()).then(data=>console.log(data)).catch(error=>console.log('Christy: Error in fetching api: ', error))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   const images = imageLoader()
  //   this.setState({images})
  // }
  render() {
    const boxes = [1, 2, 3, 4];
    // const cows
    return (
      <div className='App'>
        <h1 align='center'> Hello </h1>
        <div className='header'>header box</div>
        <div className='main'>main box</div>
        <img
          src='https://ih1.redbubble.net/image.528681854.9548/flat,750x,075,f-pad,750x1000,f8f8f8.u8.jpg'
          height='80'
          alt='Picture not loading'
          className='img-responsive'
        />
        <div>
          {/* {' '}
          <Grid item xs={12} sm={4}> */}
            {/* <Form /> */}
          {/* </Grid> */}
        </div>
        {/* <div>{Form}</div> */}
        <h1> {boxes} </h1>
        {/* <img src={cow1} /> */}
      </div>
    );
  }
}

export default App;
