/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular.module('conductores', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('app.reportarAusencia', {
                    url: '/reportar-ausencia',
                    views: {
                        'menuContent': {
                            //controller: 'HomeCtrl',
                            templateUrl: 'app/conducor/reportar-ausencia.html',
                        }
                    }
                })
        });
})();