


angular.module('poll').config(function($urlRouterProvider, $stateProvider, $locationProvider) {


    $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'client/login/login.html',
                controller: 'loginCtrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'client/login/register.html',
                controller: 'loginCtrl'
            }).
            state('menu', {
                url: '/menu',
                templateUrl: "client/menu/menu.html",
                abstract: true,
                controller: 'menuCtrl'

            })
            .state('menu.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'client/home/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('menu.takepoll', {
                url: '/takepoll',
                views: {
                    'menuContent': {
                        templateUrl: 'client/takepoll/takepoll.html',
                        controller: 'takeCtrl'
                    }
                }
            });

//    $urlRouterProvider.otherwise("/register");
});