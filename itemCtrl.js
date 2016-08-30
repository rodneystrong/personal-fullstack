//CREATE READ DELETE

var app = require('./index.js');

var db = app.get('db');


module.exports = {
  //READ notes
  readItems: function(req, res, next) {
    db.notes.find(function(error, response) {
      if(error) {
        res.json(error);
      }
      else {
        console.log('itemCtrl get the notes');
        res.json(response);
      }
    })
  },

  //READ users
  readItems: function(req, res, next) {
    db.people.find(function(error, response) {
      if(error) {
        res.json(error);
      }
      else {
        console.log('itemCtrl get the peeps');
        res.json(response);
      }
    })
  },

  //POST
  createItem: function(req,res) {
    //massive.js call
    console.log('itemCtrl POST the notes');
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

  //POST
  createUser: function(req,res) {
    //massive.js call
    console.log('itemCtrl POST the peeps');
    var bodyEmail = req.body.email;

    db.people.insert({email: bodyEmail}, function(error,response) {
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
    console.log('DELETE the ' + req.params.id);
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
