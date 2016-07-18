angular.module('MyApp')
    .controller('CategoryListingsCtrl', function($scope, $http, $stateParams) {
        var ctrl            = this;
        ctrl.selectedSubCategory = $stateParams.sub_category;
        //gets list of devices
            $http.get('http://localhost:3000/get_listings?category=' + $stateParams.sub_category).then(function (response) {
                ctrl.listings = response.data;
                console.log(response);
            });
    });

