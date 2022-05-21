// import core module into node.js. Our own file would need to start with ./ (relative) or / (absolute).
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method, req.headers);
  // process.exit();  // hard exits the event loop; program is shut down

  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); // returns from this anonymous function - we must not have any res.set afterwards
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { // will keep executing until all chunks have been processed
      body.push(chunk);
    });
    return req.on('end', () => { // done with the chunks - just registers it here though and doesn't run it here
      const parsedBody = Buffer.concat(body).toString(); // will create a new buffer and add all the parsed chunks. Buffer is like a bus stop
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => { // writeFileSync would block code execution until this file is done
        // handle error here if needed
        res.statusCode = 302; // 302 -> redirection
        res.setHeader('Location', '/');
        return res.end();
      }); 
        
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hellow from my Node.js server!</h1></body>');
  res.write('</html>');
  res.end(); // sends our response back to the client
})

// listen starts a process where node.js won't automatically close our script, but it will listen for requests
server.listen(3000);

