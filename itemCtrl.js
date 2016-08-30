//CREATE READ DELETE

var app = require('./index.js');

var db = app.get('db');


module.exports = {
  //READ
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

  //POST
  createItem: function(req,res) {
    //massive.js call
    console.log(req.body.text);
    var bodyInput = req.body.text;

    //this right here goes to the 'user' table, uses 'insert' which always requires
    //an object. so here name: is the column and bodyInput is what we get
    //from the user.
    db.notes.insert({note: bodyInput}, function(error,response) {
      if (error) {
        res.send(error);
      }
      else {
        res.send(response);
      }
    })
  },

  //DELETE
  deleteItem: function(req,res) {
    //massive.js calls
    console.log(req.params.id);
    var bodyItem = req.params.id;

    db.notes.destroy({id: bodyItem}, function(error,response) {
      console.log(response);
      if (error) {
        res.send(error);
      }
      else {
        res.send(response);
      }
    })
  }
}
