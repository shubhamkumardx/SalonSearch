const express = require("express");
const app = express();
const port = 5000;
const ConnectDb = require("./Database/config");
const bodyParser = require('body-parser')
const router = require('./Routers')
// const cors = require ('cors')

app.use('/',router )
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
