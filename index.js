const express = require('express');
const path = require("path");
const app = express()
const PORT = 4000;
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
})
console.log(path.join(__dirname+"./index.html"));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})