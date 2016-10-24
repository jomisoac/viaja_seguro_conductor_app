/**
 * Created by jose on 23/10/16.
 */
(function () {
    'use strict';

    angular.module('giros', [])
        .config(function ($stateProvider) {
            $stateProvider
                .state('giro', {
                    url: '/giro',
                    templateUrl: 'app/giros/giros.html',
                    controller: 'GiroCtrl'
                })
        });
})();
