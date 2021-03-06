angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer', 'ngMaterial'])
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('select-category', {
        url: '/select-category',
        controller: 'SelectCategoryCtrl',
        controllerAs: 'ctrl',
        templateUrl: 'partials/select-category.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
        .state('select-sub-category', {
            url: '/select-sub-category?category',
            templateUrl: 'partials/select-sub-category.html',
            controller: 'SelectSubCategoryCtrl',
            controllerAs: 'ctrl'
        })
        .state('category-listings', {
            url: '/category-listings?sub_category&type',
            templateUrl: 'partials/category-listings.html',
            controller: 'CategoryListingsCtrl',
            controllerAs: 'ctrl'
        })
        .state('service-listings', {
            url: '/service-listings',
            templateUrl: 'partials/service-listings.html',
            controller: 'ServiceListingsCtrl',
            controllerAs: 'ctrl'
        })
        .state('listing-detail', {
            url: '/listing-detail?listing_id',
            templateUrl: 'partials/listing-detail.html',
            controller: 'ListingDetailCtrl',
            controllerAs: 'ctrl'
        })
        .state('service-detail', {
            url: '/service-detail?device',
            templateUrl: 'partials/service-detail.html',
            controller: 'ServiceDetailCtrl',
            controllerAs: 'ctrl'
        })
        .state('deactivated', {
            url: '/deactivated',
            templateUrl: 'partials/deactivated.html',
            controller: 'DeactivatedCtrl',
            controllerAs: 'ctrl'
        })
        .state('add-listing', {
            url: '/add-listing?user',
            templateUrl: 'partials/add-listing.html',
            controller: 'AddListingCtrl',
            controllerAs: 'ctrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .state('edit-listing', {
            url: '/edit-listing',
            templateUrl: 'partials/edit-listing.html',
            controller: 'EditListingCtrl',
            controllerAs: 'ctrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .state('manage-account', {
            url: '/manage-account',
            templateUrl: 'partials/manage-account.html',
            controller: 'ManageAccountCtrl',
            controllerAs: 'ctrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .state('manage-listing', {
            url: '/manage-listing?user',
            templateUrl: 'partials/manage-listing.html',
            controller: 'ManageListingCtrl',
            controllerAs: 'ctrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
        .state('buyer-profile', {
            url: '/buyer-profile',
            templateUrl: 'partials/buyer-profile.html',
            controller: 'BuyerProfileCtrl',
            controllerAs: 'ctrl',
            resolve: {
                loginRequired: loginRequired
            }
        })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'partials/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'ctrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'ctrl'
        })
      .state('support', {
          url: '/support',
          templateUrl: 'partials/support.html',
          controller: 'SupportCtrl',
          controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/select-category');

    $authProvider.google({
      clientId: '510557559466-p84g6egngrl4m2smhva0v680o6suaf0c.apps.googleusercontent.com'
    });

    $authProvider.github({
      clientId: '9cd73de67627c4c761e1'
    });

    $authProvider.linkedin({
      clientId: '77cw786yignpzj'
    });

    $authProvider.live({
      clientId: '0000000044186520'
    });

    $authProvider.bitbucket({
      clientId: 'ap42yBVbAJRXxym6M4'
    });

    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
  });
