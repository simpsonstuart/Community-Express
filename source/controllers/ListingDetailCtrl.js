angular.module('MyApp')
    .controller('ListingDetailCtrl', function($scope, $http, $stateParams) {
        var ctrl = this;
        //gets details of listing
        $http.get('http://localhost:3000/listing_details?listing_id=' + $stateParams.listing_id).then(function (response) {
            ctrl.listing = response.data;
            if(response.data.type === 'good') {
                ctrl.isGood = true;
            }
        });
    });