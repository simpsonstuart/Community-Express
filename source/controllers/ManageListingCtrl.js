angular.module('MyApp')
  .controller('ManageListingCtrl', function($scope, $auth, $http, $stateParams) {
      var ctrl = this;
      $http.get('http://localhost:3000/get_user_listings?user=' + $stateParams.user).then(function (response) {
          ctrl.listings = response.data;
      });
      ctrl.removeListing = function (listingId) {
          $http.delete('http://localhost:3000/remove_listing?listing=' + listingId).then(function (response) {
              ctrl.listings = response.data;
          });
      };
  });
