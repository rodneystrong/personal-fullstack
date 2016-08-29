var express = require('express');
var massive = require('massive');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = module.exports = express();

var connectionString = "postgress://aleeexkang@localhost/personal_fullstack"; // "postgess://username/host/databaseName"
var massiveInstance = massive.connectSync({connectionString : connectionString}); // who knows
app.set("db", massiveInstance); // setting the "db" obj to equal th massive.connectSync

app.listen(3030, function() {
  console.log('lel');
});
