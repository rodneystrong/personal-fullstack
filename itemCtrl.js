//CREATE READ DELETE

var app = require('/index.js');

var db = app.get('db');


module.exports = {
  readItems: function(req, res, next) {
    db.(function(error, response) {
      if(error) {
        res.json(error);
      }
      else {
        console.log('wooord');
        res.json(response);
      }
    })
  },
