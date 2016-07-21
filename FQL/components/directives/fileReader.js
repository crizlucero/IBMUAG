(function(){
  'use strict'

  angular
    .module('fileReader', ['fileReader'])
    .directive('fileReader', fileReader);

    fileReader.$inject[];
    function fileReader() {
      var config = {};

      config.link = link;

      return config;

      function link(scope, element){
        var file = element;
        if (files.length) {
          var r = new FileReader();
          r.onload = function(e) {
              var contents = e.target.result;
              scope.$apply(function () {
                scope.fileReader = contents;
              });
          };
          
          r.readAsText(files[0]);
        }
      }
    }

});