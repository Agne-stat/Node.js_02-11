const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser')

mongoose.connection.on('error', function(err) {
  console.log(err)
});

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.use(bodyParser.json())
app.use('/api/v1', routes)

app.listen(3000); 