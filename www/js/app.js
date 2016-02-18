
var app  = angular.module('starter', ['ionic','ionic.service.core','starter.controllers','angular-jwt','ngCordova','ionic.service.push'])
    .run(function($ionicPlatform,$window,$cordovaPush) {
        $window.localStorage['usuario'] = null;
        $window.localStorage['uri'] = 'http://dev.viajaseguro.co/public';
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
    .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider,$ionicAppProvider) {        
        
        $ionicAppProvider.identify({
            app_id: 'bca4d7be',
            api_key: '11d9c3ab96ca81e5241e1448cd7d5dabe512d8a8e91d2036',
            dev_push: true
        });
        
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
                    controller: 'VehiculoCtrl',
                    templateUrl: 'templates/registrar-vehiculo.html'
                }
            }
        })
        .state('app.documentosVehiculo', {
            url: '/documentos-vehiculo',
            views: {
                'menuContent': {
                    controller: 'VehiculoCtrl',
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
                    controller: 'GremioCtrl',
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
        
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });
