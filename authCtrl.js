app.controller('authCtrl', function($scope, $timeout,  Facebook) {
  // Define user empty data :/
  $scope.user = {};

  // Defining user logged status
  $scope.logged = false;

  // And some fancy flags to display messages upon user status change
  $scope.byebye = false;
  $scope.salutation = false;

  /**
   * Watch for Facebook to be ready.
   * There's also the event that could be used
   */
  $scope.$watch(
    function() {
      return Facebook.isReady();
    },
    function(newVal) {
      if (newVal)
        $scope.facebookReady = true;
    }
  );

  var userIsConnected = false;
  
  $scope.login = function() {
    // From now on you can use the Facebook service just as Facebook api says
    Facebook.login(function(response) {
    // Do something with response.
    });
  };

  $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        if(response.status === 'connected') {
          $scope.loggedIn = true;
        } else {
          $scope.loggedIn = false;
        }
      });
    };

    $scope.me = function() {
      Facebook.api('/me', function(response) {
        $scope.user = response;
      });
    };

    $scope.$watch(function() {
      // This is for convenience, to notify if Facebook is loaded and ready to go.
      return Facebook.isReady();
    }, function(newVal) {
      // You might want to use this to disable/show/hide buttons and else
      $scope.facebookReady = true;
    });
  });
