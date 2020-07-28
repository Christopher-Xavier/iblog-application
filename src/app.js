const server = require('dotenv').config();
const express = require('express');
const morgan = require('morgan');git 
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const http = require('http');
const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';
 

const id 

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

let app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
});
app.listen(8000, '127.0.0.1');
console.log('Node server running on port 8000');

app.get('/login', (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}
  `;
  res.send(responseText);
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});
module.exports = app;
