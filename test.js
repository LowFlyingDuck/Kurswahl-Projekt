// javascript test app

// consider a more efficient app using express package
// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.get('*', (req, res) => {
//   res.send(__dirname + '/public/404.html');
// });

const http = require('http');
const fs = require('fs');
const pub = __dirname + '/public/';
const path = require('path');

const server = http.createServer((req, res) => {
  req.url = path.normalize(req.url);
  req.url = (req.url === '/' ? 'index.html' : req.url);
  fs.stat(pub + req.url, err => {
    if (err) {
      res.write('ACCESS DENIED');
      res.end();
      return;
    }
    fs.createReadStream(pub + req.url).pipe(res);
  });
});

server.listen(80);