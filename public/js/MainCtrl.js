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
  })
