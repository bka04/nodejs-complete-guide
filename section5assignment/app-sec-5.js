const express = require('express');

const app = express();

app.use('/favicon.ico', (req, res, next) => { // ignore favicon
  res.status(204).end();
});

// app.use('/', (req, res, next) => {
//   console.log('Ware somewhere between the top and bottom.');
//   next();
// });

// app.use('/', (req, res, next) => {
//   console.log('Malcolm in the Middleware.');
//   res.send('<h1>Howdy.</h1>');
// })

app.use('/users', (req, res, next) => {
  res.send('<h1>So Many Users</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Go team.</h1>');
});

app.listen(3000);

