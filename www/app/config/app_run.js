/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .run(appRun);
    
    function appRun($ionicPlatform, $window, $cordovaPush) {
        $window.localStorage['usuario'] = null;
        $window.localStorage['uri'] = 'http://localhost:1337';
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
    }
})();