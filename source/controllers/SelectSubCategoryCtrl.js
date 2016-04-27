angular.module('MyApp')
    .controller('SelectSubCategoryCtrl', function($scope, $http, toastr) {
        var ctrl = this;
        getSubCategories();

        //gets list of devices
        function getSubCategories() {
            $http.get('http://localhost:3000/get_sub_categories').success(function (data) {
                ctrl.subCategories = _.filter(data, ['checked_out_user', "N/A"]);
            });
        }
    });
