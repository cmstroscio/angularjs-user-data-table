'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ["ngRoute"]);

  app.config(function($routeProvider, $locationProvider) {


    $routeProvider
    .when("/", {
        templateUrl : "main.htm",
    })
    .when("/#/5", {
        templateUrl : "chelsey.html",
        controller: "myCtrl", 
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});


app.controller('myCtrl', function($scope, $http, $route, $routeParams, $location) {
    
    // needed?
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    $http.get("http://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        $scope.users = response.data;

        // needed?
        // $scope.profile= $routeParams.id;


    });
    // needed?
    // $scope.getIndex = function(users) {
    // return $scope.users.indexOf(id);
    // }




});

