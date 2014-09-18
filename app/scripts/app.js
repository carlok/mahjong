'use strict';

angular.module('agae', ['ngRoute'])
        .config(function($routeProvider) {
            var baseUrl = './views/';

            $routeProvider.
                    when('/bgame', {templateUrl: baseUrl + 'bgame.html', controller: 'BgameCntr'}).
                    otherwise({redirectTo: '/bgame'});
        })
        .run(function($rootScope) {
        });
