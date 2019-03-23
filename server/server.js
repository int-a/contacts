const express = require("express");
const app = express();
const { resolve } = require("path");
const mongoose = require('mongoose');
const routes = require('./routes/api');

//connect to the database
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

// overide mongoose promise (depricated) with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  // TODO: should we set header on res or req?
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/sampleData", (req, res) => {
  res.send("sample data");
});

app.use('/api', routes);

app.use(express.static("dist"));

app.get("*", (req, res) => res.sendFile(resolve("dist", "index.html")));

app.listen(8080);