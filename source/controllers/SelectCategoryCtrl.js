angular.module('MyApp')
  .controller('SelectCategoryCtrl', function($scope, $auth, toastr, $http) {
      var ctrl            = this;
      getCategories();

      //gets list of devices
      function getCategories() {
          $http.get('http://localhost:3000/get_categories').success(function (data) {
              ctrl.categories = data;
          });
      }
  });
