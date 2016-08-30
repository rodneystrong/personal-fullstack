angular
  .module('fullStack')
  .controller('MainCtrl', function($scope, mainService) {
    $scope.whatevs = 'lel';

    //GET notes
    $scope.getNotes = function() {
      mainService.getNotes().then(function(response) {
        console.log(response);
        $scope.data = response;
      })
    }

    //GET users
    $scope.getUsers = function() {
      mainService.getUsers().then(function(response) {
        console.log(response);
        $scope.data = response;
      })
    }

    //POST note
    $scope.createNotes = function(newText) {
      mainService.createNotes(newText).then(function(response) {
        $scope.data = response;
        $scope.getNotes();
        console.log("RESPONSE: ", response);
      });
    }

    //POST user
    $scope.createUser = function(newEmail) {
      mainService.createUser(newEmail).then(function(response) {
        $scope.data = response;
        console.log("RESPONSE: ", response);
      });
    }

    //DELETE note
    $scope.deleteNote = function(id) {
      mainService.deleteNote(id).then(function(response) {
        $scope.getNotes();
      })
    }
  })
