// const http = require('http');
// const url = require('url');
// const fs = require('fs');

/* changed to express */
const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile('./index.html', { root: __dirname});
});
app.get('/about', function(req, res) {
    res.sendFile('./about.html', { root: __dirname});
});
app.get('/contact-me', function(req, res) {
    res.sendFile('./contact-me.html', { root: __dirname});
});
app.get('*', function(req, res) {
    res.sendFile('./404.html', { root: __dirname});
});

app.listen(3000, function() {
    console.log("is it working?");
});

/* prior node version */

// http.createServer(function(req, res) {
//     let q = url.parse(req.url, true);
//     let filename 
//         if (q.pathname === '/') {
//             filename = './index.html';
//         } else {
//             filename = '.' + q.pathname;
//         }
//     fs.readFile(filename, function(err, data) {
//         if (err) {
//             console.log("help")
//             const newPath = './404.html';
//             fs.readFile(newPath, function(err, data) {
//                 res.writeHead(404, {'Content-type': 'text/html'});
//                 res.write(data);
//                 return res.end();
//             })
//         } else {
//         res.writeHead(200, {'Content-type': 'text/html'});
//         res.write(data);
//         return res.end();
//         }
//     });
// }).listen(8080)