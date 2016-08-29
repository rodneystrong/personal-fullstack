angular
  .module('fullStack')
  .service('mainService', function($http) {
    //GET the data
    this.getNotes = function() {
      return $http.get('/items')
      .then(function(response) {
        console.log(response);
        return response.data;
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
  })
