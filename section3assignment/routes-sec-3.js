

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  switch(url) {
    case '/':
      res.write("<html>");
      res.write("<head><title>Enter Username</title></head>");
      res.write(
        '<body><form action="/create-user" method="POST"><h1>Hello! Enter a username:</h1><input type="text" name="username"><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();

    case '/users':
      res.write("<html>");
      res.write("<head><title>Users</title></head>");
      res.write("<body><ul><li>dummy username</li></ul></body>")
      res.write("<html>");
      return res.end();

    case '/create-user':
      if (method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });

        return req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const username = parsedBody.split("=")[1];
          console.log(username);
          res.statusCode = 302;
          res.setHeader("Location", "/users");
          return res.end();
        });
      }
      
    default:
  }
};

export const handler = requestHandler;