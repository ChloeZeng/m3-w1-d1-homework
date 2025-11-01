const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5050;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url}`);

    let filePath = '';
    if (req.url === '/' || req.url === '/home') {
        filePath = path.join(__dirname, 'public', 'home.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html');
    } else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'public', 'contact.html');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Invalid Request!</h1>');
        return;
    }


    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 - Internal Server Error</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});


server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running…`);
});
