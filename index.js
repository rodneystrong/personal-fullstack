var express = require('express');
var massive = require('massive');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = module.exports = express();

//created database by running CREATE DATABASE yourdbname;  dont forget that fucking semicolon
app.use(bodyParser.json());
app.use(cors());

//make node serve our files
app.use(express.static(__dirname + '/public'));

var connectionString = "postgress://aleeexkang@localhost/personal_fullstack"; // "postgess://username/host/databaseName"
var massiveInstance = massive.connectSync({connectionString : connectionString}); // who knows
app.set("db", massiveInstance); // setting the "db" obj to equal th massive.connectSync

//exporting our app.
var itemCtrl = require('./itemCtrl.js');

app.get('/items', itemCtrl.readItems);
app.post('/items', itemCtrl.createItem);
app.delete('/items/:id', itemCtrl.deleteItem);

app.listen(4040, function() {
  console.log('lel');
});
