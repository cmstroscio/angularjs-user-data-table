'use strict';

describe('user', function () {

   beforeEach(module('myApp'));

   var $controller;

   beforeEach(inject(function(_$controller_) {
       $controller = _$controller_;
   }));

   it('user should be Clementina', function() {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope 
      });
      $scope.name = 'Clementina DuBuque';
      expect($scope.name).toBe('Clementina DuBuque');
   });
});

