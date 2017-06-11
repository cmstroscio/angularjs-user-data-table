'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ["ngRoute"]);
app.controller('myCtrl', function($scope, $http) {
    $http.get("http://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        $scope.users = response.data;
    });
    $scope.getIndex = function(users) {
    return $scope.users.indexOf(name);
}
});

