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
        .state('pasajeros', {
            url: '/pasajeros',
            templateUrl: 'templates/pasajeros.html',
            controller: 'PasajerosCtrl'
        })
        .state('encomienda', {
            url: '/encomienda',
            templateUrl: 'templates/paquetes.html',
            controller: 'EncomiendaCtrl'
        })
         .state('giro', {
            url: '/giro',
            templateUrl: 'templates/giros.html',
            controller: 'GiroCtrl'
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
        .state('app.documentosVehiculo', {
            url: '/documentos-vehiculo',
            views: {
                'menuContent': {
                    //controller: 'HomeCtrl',
                    templateUrl: 'templates/documentacion-vehiculo.html'
                }
            }
        })
        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'templates/principal.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('app.gremioConductores', {
            url: '/gremio-conductores',
            views: {
                'menuContent': {
                    //controller: 'HomeCtrl',
                    templateUrl: 'templates/gremio-conductores.html',
                }
            }
          }) 
        .state('app.reportarAusencia', {
            url: '/reportar-ausencia',
            views: {
                'menuContent': {
                    //controller: 'HomeCtrl',
                    templateUrl: 'templates/reportar-ausencia.html',
                }
            }
          }) 
        .state('app.configuracion', {
            url: '/configuracion',
            views: {
                'menuContent': {
                    //controller: 'HomeCtrl',
                    templateUrl: 'templates/configuracion.html',
                }
            }
          }) 
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    });
