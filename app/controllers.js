app.controller('myCtrl', function($scope, $http, $route, $routeParams, $location) {
    
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    
    $http.get("http://jsonplaceholder.typicode.com/users").then(function(response) {
        $scope.users = response.data;
    });
});