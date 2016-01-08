var app  = angular.module('starter', ['ionic', 'starter.controllers'])
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
        $ionicConfigProvider.navBar.alignTitle('center')
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/principal.html',
            controller: 'HomeCtrl'
        })
        .state('login',{
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
        .state('registrar', {
            url: '/registrar',
            templateUrl: 'templates/registrar-conductor.html',
            controller: 'ConductorCtrl'
        })
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
        })
        .state('app.registrarVehiculo', {
            url: '/registrar-vehiculo',
            views: {
                'menuContent': {
                    //controller: 'HomeCtrl',
                    templateUrl: 'templates/registrar-vehiculo.html'
                }
            }
        })
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    });
