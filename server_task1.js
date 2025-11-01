const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/' || req.url === '/home') {
        res.write('<h1>Welcome to the Home Page/Chloe </h1>');
    } else if (req.url === '/about') {
        res.write('<h1>About Us Page / chloe</h1>');
    } else if (req.url === '/contact') {
        res.write('<h1>Contact Page/ chloe</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Invalid Request!</h1>');
    }

    res.end();
});

const port = 5050;
server.listen(port, () => {
  console.log(`The NodeJS server on port ${port} is now running…`);
});
