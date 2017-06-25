'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when("http://localhost:8000/:id", {
            templateUrl: "views/:id.html",
            controller: "myCtrl",
        });
});


