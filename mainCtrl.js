app.controller('mainCtrl', function($scope) {
    $scope.user={firstName:'Ahmed',lastName:'Othman'}
    $scope.fullName = function() {
      return $scope.user.firstName + " " + $scope.user.lastName;
    };
});
