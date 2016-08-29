//CREATE READ DELETE

var app = require('./index.js');

var db = app.get('db');


module.exports = {
  readItems: function(req, res, next) {
    db.notes.find(function(error, response) {
      if(error) {
        res.json(error);
      }
      else {
        console.log('wooord');
        res.json(response);
      }
    })
  },

  createItem: function(req,res) {
    //massive.js call
    console.log(req.body.name);
    var bodyInput = req.body.name;

    //this right here goes to the 'user' table, uses 'insert' which always requires
    //an object. so here name: is the column and bodyInput is what we get
    //from the user.
    db.notes.insert({name: bodyInput}, function(error,response) {
      if (error) {
        res.send(error);
      }
      else {
        res.send(response);
      }
    })
  }
}
