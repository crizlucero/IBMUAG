/**
 * author crizlucero 20160629
 */
(function() {
    'use strict'

    angular
        .module('starterApp')
        .factory('FQLService', FQLService);

    FQLService.$inject = ['$http', ];

    function FQLService($http) {
        var service = {};
        var urlFQL = "https://graph.facebook.com/v2.6/";
        var token = "&access_token=EAACEdEose0cBAIYG3xODl67xmnBvqTq02CufdoHRxN4GMXV6hzaJj0eR0dKsTAZBhEqa7z35ifpicBtLeFGGTYlsPaqKBsUiQMvcbuZA1JyfMqAUokI7JWBG1XP6U8tNmuG5EjMcSBFncZCojHFmBzoKPILOJfkutKUzgXRFgZDZD";
        

        service.getFBInfo = getFBInfo;
        service.searchInfo = searchInfo;

        return service;

        function getFBInfo() {
            var urlConsult = urlFQL + "me?fields=id%2Cname%2Cwork" + token;
            return $http.get(urlConsult).then(handleSuccess, handleError('Error performing request to the server'));
        }

        function searchInfo(User) {
            var urlConsult = urlFQL + "search?q=" + User + "&type=user" + token;
            console.log(urlConsult);
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