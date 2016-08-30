angular
  .module('fullStack')
  .controller('MainCtrl', function($scope, mainService) {
    $scope.whatevs = 'lel';

    //GET
    $scope.getNotes = function() {
      mainService.getNotes().then(function(response) {
        console.log(response);
        $scope.data = response;
      })
    }

    //POST
    $scope.createNotes = function(newText) {
      mainService.createNotes(newText).then(function(response) {
        $scope.data = response;
        console.log("RESPONSE: ", response);
      });
    }

    //POST
    $scope.createUser = function(newEmail) {
      mainService.createUser(newEmail).then(function(response) {
        $scope.data = response;
        console.log("RESPONSE: ", response);
      });
    }

    //DELETE
    $scope.deleteNote = function(id) {
      mainService.deleteNote(id).then(function(response) {
        $scope.getNotes();
      })
    }
  })
