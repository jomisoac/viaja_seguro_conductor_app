/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular.module('gremios', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.gremioConductores', {
                    url: '/gremio-conductores',
                    views: {
                        'menuContent': {
                            controller: 'GremioCtrl',
                            templateUrl: 'app/gremio/gremio-conductores.html',
                        }
                    }
                })
        });
})();