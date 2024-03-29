// javascript test app

// consider a more efficient app using express package
// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.get('*', (req, res) => {
//   res.send(__dirname + '/public/404.html');
// });

const http = require('http');
const https = require('https');
const fs = require('fs');
const pub = __dirname + '/public/';
const path = require('path');

const server = https.createServer({
  cert: fs.readFileSync(__dirname  + '/fullchain.pem'),
  key: fs.readFileSync(__dirname + '/privkey.pem')
} , (req, res) => {
  req.url = path.normalize(req.url);

  switch(req.url) {
    case '/login':
      console.log(req)
      break;
    default:
      // assuming it's a public file
      req.url = (req.url === '/' ? 'index.html' : req.url);
      fs.stat(pub + req.url, err => {
        if (err) {
          res.write('ACCESS DENIED');
          res.end();
          return;
        }
        fs.createReadStream(pub + req.url).pipe(res);
      });
      break;
  }
});


server.listen(443);

http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'https://www.eva-kurswahl.de/'
  });
  res.end();
}).listen(80);