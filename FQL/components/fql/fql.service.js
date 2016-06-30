/**
 * author crizlucero 20160629
 */
(function() {
    'use strict'

    angular
        .module('starterApp')
        .factory('FQLService', FQLService);

    FQLService.$inject = ['$http'];

    function FQLService($http) {
        var service = {};
        var urlFQL = "https://graph.facebook.com/v2.6/";
        var token = "&access_token=EAACEdEose0cBAESZAc4mxsVBO2BWHbtygGUYMyW0ZAZC00oRiP1x00UApec6S8obWizZBqnyemtRgt4NKEY1dAoBU84xYvdumgyiRaIPOMgGnCgH32wTKX3ZAFjfS7JjFDZC3HQFzkZBFR0w3ZCjYpQMfpTumpGbQ02ikaGQkWUKfgZDZD";
        

        service.getFBInfo = getFBInfo;

        return service;

        function getFBInfo() {
            var urlConsult = urlFQL + "me?fields=id%2Cname%2Cwork" + token;
            return $http.get(urlConsult).then(handleSuccess, handleError('Error performing request to the server'));
        }


        // private functions
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function() {
                return {
                    success: false,
                    message: error
                };
            };
        }
    }
})();