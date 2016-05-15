angular.module('MyApp')
    .controller('SelectSubCategoryCtrl', function($scope, $http, toastr, $stateParams) {
        var ctrl = this;
        ctrl.selectedCategory = $stateParams.category;
        ctrl.subCategories = [{"id": 1, "name": "Electronics", "icon": "ion-ios-monitor"}, {"id": 1, "name": "Games", "icon": "ion-ios-game-controller-b"}, {"id": 1, "name": "Vehicles", "icon": "ion-model-s"}, {"id": 1, "name": "Books", "icon": "ion-ios-book"}];
        getSubCategories();

        //gets list of devices
        function getSubCategories() {
            $http.get('http://localhost:3000/get_sub_categories', ctrl.selectedCategory).success(function (data) {
                ctrl.subCategories = data;
            });
        }
    });
