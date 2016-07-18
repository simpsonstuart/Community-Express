angular.module('MyApp')
  .controller('AddListingCtrl', function($scope, $auth, $http, toastr, $stateParams) {
      var ctrl = this;
      ctrl.categoryOptions =['Electronics','Items', 'Jobs', 'Fundraising', 'Communities', 'Crafts', 'Services', 'Tools', 'Transit'];
      const currentDate =  new Date();
      ctrl.addListing = function () {
              $http.post('http://localhost:3000/add_listing', {
                  title: ctrl.title,
                  thumb_icon: ctrl.thumb_icon,
                  type: ctrl.listing_type,
                  category: ctrl.category,
                  price_range: ctrl.price_range,
                  location: ctrl.location,
                  buyer_rating: '3',
                  post_date: currentDate,
                  updated_at: currentDate,
                  created_by_user: $stateParams.user,
                  details: ctrl.details,
                  requirements: ctrl.requirements,
                  payment_methods: paymentMethods.toString()
              }).then(function (response) {
              });
      };
      const paymentMethods = [];
      ctrl.arrayAdd = function (paymentmethod) {
              const index = paymentMethods.indexOf(paymentmethod);
              if (paymentMethods.indexOf(paymentmethod) === -1) {
                  paymentMethods.push(paymentmethod);
              } else {
                  paymentMethods.splice(index, 1);
              }
      };

  });
