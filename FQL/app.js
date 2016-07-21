/**
 * author crizlucero 20160629
 */

(function () {
    'use strict'

    angular
        .module('starterApp', ['ngMaterial','ngRoute'])
        .controller('AppController', AppController)
        .config(config)
        .run(run);
    AppController.$inject = ['$scope', '$location'];
    function AppController($scope, $location) {
    }

    config.$inject = ['$routeProvider', '$locationProvider', '$mdThemingProvider'];
    function config($routeProvider, $locationProvider, $mdThemingProvider) {
        
        $mdThemingProvider.definePalette('amazingPaletteName', {
            '50': 'e0e0e0',
            '100': 'f5f5f5',
            '200': 'eeeeee',
            '300': 'e0e0e0',
            '400': 'bdbdbd',
            '500': '05A9FB', //
            '600': '757575',
            '700': '616161',
            '800': '424242',
            '900': '212121',
            'A100': 'E6E6E6',
            'A200': 'E6E6E6',
            'A400': 'E6E6E6',
            'A700': 'E6E6E6',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('amazingPaletteName')
            .accentPalette('orange');

        $routeProvider
            .when('/fql', {
                controller: 'FQLController',
                templateUrl: 'components/fql/fql.view.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/fql' });
    }

    run.$inject = ['$rootScope', '$location', '$http'];
    function run($rootScope, $location, $http) {

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            
                $location.path('/fql');
           
        });
    }
})();