angular.module('MyApp')
  .controller('ManageAccountCtrl', function($scope, $auth, $http) {
      var ctrl            = this;

     ctrl.addSubCategory = function () {
         $http.post('http://localhost:3000/add_sub_category', {name: ctrl.name, type: ctrl.type, icon: ctrl.icon, parent_category: ctrl.parent_category}).then(function (response) {
         });
     };

      ctrl.addListing = function () {
              $http.post('http://localhost:3000/add_listing', {title: ctrl.title, thumb_icon: ctrl.thumb_icon, type: ctrl.listing_type, category: ctrl.category, price_range: ctrl.price_range, location: ctrl.location, buyer_rating: ctrl.buyer_rating, post_date: ctrl.post_date, details: ctrl.details, requirements: ctrl.requirements, payment_methods: ctrl.payment_methods}).then(function (response) {
              });

      };

  });
