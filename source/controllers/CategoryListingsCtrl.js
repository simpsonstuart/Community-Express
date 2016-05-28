angular.module('MyApp')
    .controller('CategoryListingsCtrl', function($scope, $http, $stateParams) {
        var ctrl            = this;
        getCategoryListings();

        ctrl.selectedSubCategory = $stateParams.sub_category;


        //mock json basic details for item returned detailed specs will be on specific listing page
        ctrl.listings = [{"id": 13443, "title": "Looking for used GalaxyS 7", "thumb_icon": "ion-android-call", "type": "good", "price_range": "$300-$400", "location": "Boise, Idaho"}, {"id": 13463, "title": "Need Charger for S3", "thumb_icon": "ion-headphone", "type": "good", "price_range": "$10-$15", "location": "Meridian, Idaho"}, {"id": 13463, "title": "Looking for battery for LG G4", "thumb_icon": "ion-battery-full", "type": "good", "price_range": "$20-$35", "location": "Eagle, Idaho"}, {"id": 13473, "title": "Need cover for iphone 4S", "thumb_icon": "ion-briefcase", "type": "good", "price_range": "$5-$10", "location": "Nampa, Idaho"}];

        //gets list of devices
        function getCategoryListings() {
            $http.get('http://localhost:3000/get_listings', {"sub_category": ctrl.selectedSubCategory}).then(function (response) {
                ctrl.listings = response.data;
            });
        }
    });

