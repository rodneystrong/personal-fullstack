angular
  .module('fullStack')
  .service('mainService', function($http) {
    //GET the notes
    this.getNotes = function() {
      return $http.get('/items')
      .then(function(response) {
        console.log(response);
        return response.data;
      })
    }

    //GET the users
    this.getUsers = function() {
      return $http.get('/users')
      .then(function(response) {
        console.log(response);
        return response.data.email;
      })
    }

    //POST
    this.createNotes = function(newText) {
      console.log(newText);
      return $http({
        method: 'POST',
        url: '/items',
        data: {
          text: newText
        }
      })
      .then(function(response) {
        return response.data;
      })
    }

    //POST
    this.createUser = function(newEmail) {
      console.log(newEmail);
      return $http({
        method: 'POST',
        url: '/users',
        data: {
          email: newEmail
        }
      })
      .then(function(response) {
        return response.data;
      })
    }

    //DELETE note
    this.deleteNote = function(id) {
      console.log(id);
      return $http({
        method: 'DELETE',
        url: ('/items/' + id)
      })
      .then(function(response) {
        return response;
      })
    }

    //DELETE user
    this.deleteUser = function(id) {
      console.log(id);
      return $http({
        method: 'DELETE',
        url: ('/users/' + id)
      })
      .then(function(response) {
        return response;
      })
    }
  })
