const app = angular.module('app', ['ngResource']);

app.service('ChampRotationService', [ '$http', function($http) {
    this.ChampRotation = function champRotation(userId) {
      return $http({
          method : 'GET',
          url : '/freeChamps'
      });
    }
  }
]);

app.controller('ChampRotationController', ['$scope','ChampRotationService', function ($scope,ChampRotationService) {
      $scope.ChampRotation = function () {

        ChampRotationService.ChampRotation()
          .then(function success(response) {
              $scope.champs = response.data;
              champions = $scope.champs.champions;
              console.log(champions);
          },
          function error (response) {
              if (response.status === 404){
                  $scope.errorMessage = 'User not found!';
              }
              else {
                  $scope.errorMessage = "Error getting user!";
              }
          });
      };
}]);


