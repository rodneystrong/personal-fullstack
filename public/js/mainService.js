angular
  .module('fullStack')
  .service('mainService', function($http) {
    //GET the data
    this.getNotes = function() {
      return $http.get('/users')
      .then(function(response) {
        console.log(response.data);
      })
    }

    //POST
    this.createNotes = function(newText) {
      console.log(newText);
      return $http({
        method: 'POST',
        url: '/users',
        data: {
          note: newText
        }
      })
      .then(function(response) {
        return response.data;
      })
    }
  })
