var express = require("express");
var app = express();

app.get('/', (req,res) => {
    res.send('hello world');
});

app.listen(8080,() => {
    console.log('App is listen at port 8080');
});