angular.module('MyApp')
    .controller('ListingDetailCtrl', function($scope, $http, $state) {
        var ctrl = this;
        ctrl.listing = {"title": "Looking for used GalaxyS 7", "post_date": "5/17/2016", "location": "Boise, Idaho"};
        //add logic to get listing details
    });