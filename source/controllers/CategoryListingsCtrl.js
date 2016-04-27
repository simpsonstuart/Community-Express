angular.module('MyApp')
    .controller('CategoryListingsCtrl', function($scope, $http) {
        var ctrl            = this;
        getCategoryListings();

        //gets list of devices
        function getCategoryListings() {
            //maybe post instead? Need to send category to get
            $http.get('http://localhost:3000/get_listings').success(function (data) {
                ctrl.devices = _.reject(data, ['checked_out_user', "N/A"]);
            });
        }
    });

