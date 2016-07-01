angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr, $state, Account) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function() {
            Account.getProfile()
                .then(function (response) {
                        toastr.success('Login Succeeded!');
                        $state.go('profile', {}, {reload: true});
                })
                .catch(function (response) {
                    toastr.error(response.data.message, response.status);
                })
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
            Account.getProfile()
                .then(function (response) {
                        toastr.success('You have successfully signed in with ' + provider + '!');
                        $state.go('profile', {}, {reload: true});
                })
                .catch(function (response) {
                    toastr.error(response.data.message, response.status);
                })
        })
        .catch(function(error) {
          if (error.error) {
            // Popup error - invalid redirect_uri, pressed cancel button, etc.
            toastr.error(error.error);
          } else if (error.data) {
            // HTTP response error from server
            toastr.error(error.data.message, error.status);
          } else {
            toastr.error(error);
          }
        });
    };
  });
