angular.module('MyApp')
    .controller('SelectSubCategoryCtrl', function($scope, $http, toastr, $stateParams) {
        var ctrl = this;
        ctrl.selectedCategory = $stateParams.category;
        getSubCategories();

        //gets list of devices
        function getSubCategories() {
            $http.get('http://localhost:3000/get_sub_categories', ctrl.selectedCategory).success(function (data) {
                ctrl.subCategories = data;
            });
        }
    });
