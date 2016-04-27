angular.module('MyApp')
    .controller('ServiceListingsCtrl', function($scope, $http) {
        var ctrl            = this;
        ctrl.selectedSort = 'device_name';
        var service_category ='future state params passed from previous page';
        getServiceListings(service_category);

        //gets list of devices
        function getServiceListings(service_category) {
            $http.get('http://localhost:3000/get_service_listings').success(function (data) {
                ctrl.serviceListings = _.reject(data, ['checked_out_user', "N/A"]);
            });
        }
    });

