// import React, { Component } from 'react';
// import Posts from '../../components/Posts/Posts';

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   // componentDidMount() {
//   //   const images = imageLoader()
//   //   this.setState({images})
//   // }
//   render() {
//     return (
//       <>
//       <h5>Sibling 1</h5>
//       <h6>Sibling 2</h6>
//         <div>
//           <button>inside Form</button>
//         </div>
//         <div>
//           <Posts/>
//         </div>
//       </>
//     );
//   }
// }

// export default Form;

////DO NOT CHANGE ABOVE

import React, { Component, useState, useEffect} from 'react';

import {
  TextField,
  Button,
  Typography,
  Paper,
  Rating,
} from '@material-ui/core';
import FileBase from 'react-file-base64';
import Posts from '../../components/Posts/Posts';
import Stars from './Stars'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // const [value, setValue] = React.useState(2);

  // componentDidMount() {
  //   const images = imageLoader()
  //   this.setState({images})
  // }
  render() {
    return (
      <Paper>
        <form
          autoComplete='off'
          noValidate
          // className={`${classes.root} ${classes.form}`}
          // onSubmit={handleSubmit}
        >
          <Posts />
          <Typography variant='h6'>
            {/* {currentId ? `Editing "${post.title}"` : 'Post Here'} */}
          </Typography>
          <TextField
            name='creator'
            variant='outlined'
            label='Item Name'
            // value={postData.creator}
            // onChange={(e) =>
            //   setPostData({ ...postData, creator: e.target.value })
            // }
          />
          <Stars></Stars>

          <TextField
            name='message'
            variant='outlined'
            label='Review'
            fullWidth
            multiline
            rows={4}
            // value={postData.message}
            // onChange={(e) =>
            //   setPostData({ ...postData, message: e.target.value })
            // }
          />

          <div>
            <FileBase
              type='file'
              multiple={false}
              // onDone={({ base64 }) =>
              //   setPostData({ ...postData, selectedFile: base64 })
              // }
            />
          </div>

          <Button
            // className={classes.buttonSubmit}
            variant='contained'
            color='primary'
            size='large'
            type='submit'
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size='small'
            // onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    );
  }
}

export default Form;
