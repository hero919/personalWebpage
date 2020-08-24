var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./public/server/service/contactService.js')(app);
const path = require("path");

app.use(express.static(__dirname + "/public"));
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
// app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 8080);
