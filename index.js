const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer(function(req, res) {
    let q = url.parse(req.url, true);
    let filename 
        if (q.pathname === '/') {
            filename = './index.html';
        } else {
            filename = '.' + q.pathname;
        }
    fs.readFile(filename, function(err, data) {
        if (err) {
            console.log("help")
            const newPath = './404.html';
            fs.readFile(newPath, function(err, data) {
                res.writeHead(404, {'Content-type': 'text/html'});
                res.write(data);
                return res.end();
            })
        } else {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
        }
    });
}).listen(8080)