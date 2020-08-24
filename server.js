var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./public/server/service/contactService.js')(app);

app.use(express.static(__dirname + "/dist/personalWebpage"));
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/personalWebpage/public/index.html"));
});
// app.use(express.static(__dirname + '/public'));


app.listen(process.env.PORT || 8080);
