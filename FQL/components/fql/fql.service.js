/**
 * Created by adminmk on 6/2/16.
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
        var token = "&access_token=EAACEdEose0cBAK2BZARS5UpPsS5ZBs3oZBFDy5OqafDAXZC9sE6ymeOW8EuZA3mSLBheyzNwXlZBDZAgpgVqSnrkrG4k7eGZByfN6yiWZAvP0Gs4vE0sYf6tqPnhZBxsaLkkYldxBECbZBjlBvxAIAngyXQsfpGcZCarRGb201dYZB1687gZDZD";
        

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