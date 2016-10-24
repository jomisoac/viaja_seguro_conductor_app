/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .config(configApp);


    function configApp($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider,$ionicAppProvider) {
        $ionicAppProvider.identify({
            app_id: 'bca4d7be',
            api_key: '11d9c3ab96ca81e5241e1448cd7d5dabe512d8a8e91d2036',
            dev_push: true
        });

        $ionicConfigProvider.navBar.alignTitle('center');
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
})();