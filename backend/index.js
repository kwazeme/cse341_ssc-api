const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
const port = process.env.PORT || 8080;

// install express
const app = express();


// initialize routes
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})
  .use('/', require('./routes'));
  
mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`ctrl+click http://localhost:${port}/`)
    console.log(`ctrl+click http://localhost:${port}/api-docs`)
  }
});