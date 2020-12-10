const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

// if process(express) eNV

app.use(express.static(__dirname + '/public'));
// if (process.env.NODE_ENV === 'production') {
//   app.use('/dist', express.static(path.join(__dirname, './dist')));
// }



app.listen(port, ()=> console.log('SERVER is running on port ', port))
