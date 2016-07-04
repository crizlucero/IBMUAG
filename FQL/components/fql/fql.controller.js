/**
 * author crizlucero 20160629
 */
(function() {
    'use strict'

    angular
        .module('starterApp')
        .controller('FQLController', FQLController);

    FQLController.$inject = ['$scope', 'FQLService'];

    function FQLController($scope, FQLService) {
        var vm = this;
        
        
        vm.FindInfo = FindInfo;
        vm.SearchInfo = SearchInfo;

        function FindInfo(){
            FQLService.getFBInfo().then(function (response){
                vm.id = response.id;
                vm.name = response.name;
                console.log(response);
                vm.work = JSON.stringify(response.work[0], null, 4)
                console.log(response);
            });
        }

        function SearchInfo(){
            console.log(vm.person);
            FQLService.searchInfo(vm.person).then(function (response){
                vm.info = JSON.stringify(response, null, 4);
            });
        }

    }
})();