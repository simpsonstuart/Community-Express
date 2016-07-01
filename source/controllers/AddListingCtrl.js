angular.module('MyApp')
  .controller('AddListingCtrl', function($scope, $auth, $http) {
      var ctrl = this;

      ctrl.addListing = function () {
          ctrl.categoryOptions =['Electronics'];
              $http.post('http://localhost:3000/add_listing', {title: ctrl.title,
                  thumb_icon: ctrl.thumb_icon,
                  type: ctrl.listing_type,
                  category: ctrl.category,
                  price_range: ctrl.price_range,
                  location: ctrl.location,
                  buyer_rating: '3',
                  post_date: ctrl.post_date,
                  details: ctrl.details,
                  requirements: ctrl.requirements,
                  payment_methods: ctrl.payment_methods
              }).then(function (response) {
              });

      };

      ctrl.arrayAdd = function (paymentmethod) {

      };

  });
