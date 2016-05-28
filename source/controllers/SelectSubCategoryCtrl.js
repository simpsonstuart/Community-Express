angular.module('MyApp')
    .controller('SelectSubCategoryCtrl', function($scope, $http, toastr, $stateParams) {
        var ctrl = this;
        ctrl.subCategories = [{"id": 1, "name": "Electronics", "icon": "ion-ios-monitor", "type": "good"}, {"id": 1, "name": "Games", "icon": "ion-ios-game-controller-b", "type": "good"}, {"id": 1, "name": "Vehicles", "icon": "ion-model-s", "type": "good"}, {"id": 1, "name": "Books", "icon": "ion-ios-book", "type": "good"}];
        getSubCategories();

        ctrl.selectedCategory = $stateParams.sub_category;

        //gets list of devices
        function getSubCategories() {
            $http.get('http://localhost:3000/get_sub_categories', {"category": ctrl.selectedCategory}).then(function (response) {
                ctrl.subCategories = response.data;
            });
        }
    });
