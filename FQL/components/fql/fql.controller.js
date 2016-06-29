/**
 * Created by adminmk on 6/2/16.
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

        function FindInfo(){
            FQLService.getFBInfo().then(function (response){
                vm.id = response.id;
                vm.name = response.name;
                vm.work = response.work[0];
                console.log(response);
            });
        }

    }
})();