//var express = require('express');
//var app = express();
//var mongoose = require('mongoose');
//var app = require('express')();
//var bodyParser = require('body-parser');
//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data
//
//app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(multer());
//var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL ||'mongodb://localhost/test';
//mongoose.connect(connectionString);
//
//
//app.use(express.static(__dirname + '/public'));
//
//var clients = mongoose.Schema({
//    name:String,
//    email:String,
//    phoneNumber:String,
//    message: String
//});
//
//var client = mongoose.model('ClientsMessages', clients);
//
////client.find(function(err,data){
////    console.log("THE DATA IS "+data);
////})
//
//
//app.get('/clientMessage',function(req,res){
//    client.find(function(err,data){
//        //console.log("Client.FIND IS:"+client.find());
//        res.json(data);});
//    //});
//});
//
//
//
//
//app.delete('/clientMessage/:id',function(req,res){
//    console.log("active the delete");
//    client.remove({_id: req.params.id},function(err,doc){
//        //console.log(err);
//        //console.log(doc);
//        //client.find(function(err,data){
//        //    console.log("STUDENT DATA IS "+ data);
//        //    res.json(data);
//        //});
//        client.find(function(err,data){
//            res.json(data);
//        })
//
//    });
//});
//
//
//
//
//
//app.post('/clientMessage',function(req,res){
//    //console.log("THE BODY IS "+req.body);
//    var newClient = new client(req.body);
//
//    //console.log(newClient);
//    newClient.save();
//
//});
//
//
//
//
//
//var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
//var port = process.env.OPENSHIFT_NODEJS_PORT||'3000';
//
//
//
//app.listen(port,ip);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
require('./public/server/service/contactService.js')(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ipaddress);