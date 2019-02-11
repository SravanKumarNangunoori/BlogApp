angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })

    .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditController'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);