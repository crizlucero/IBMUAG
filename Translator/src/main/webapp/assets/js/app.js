/**
 * 
 */
(function(){
	'use strict'
	
	angular
	.module('modelApp', ['ngMaterial'])
	.controller('AppController', AppController);
	
	AppController.$inject = ['$http'];
	function AppController($http){
		var vm = this;
		
		vm.XML2RDF = XML2RDF;
		vm.XSD2OWL = XSD2OWL;
		vm.CFDI2NLP = CFDI2NLP;
		vm.RDF2NLP = RDF2NLP;
		vm.OWL2NLP = OWL2NLP;
		
		vm.XML = "https://raw.githubusercontent.com/contpaqi/ontologies/master/cfdi.xml";
		vm.XSD = "https://raw.githubusercontent.com/contpaqi/ontologies/master/cfdv32.xsd";
		vm.CFDI = "https://raw.githubusercontent.com/contpaqi/ontologies/master/cfdi.xml";
		vm.RDF = "http://knowitive.storage.filesystem.s3.amazonaws.com/tmp/a5fb5b340de1457595a385f38364e8e0.rdf";
		vm.OWL = "https://raw.githubusercontent.com/crizlucero/ontologies/master/cfdv32.owl";
		
		function XML2RDF(){
			var sUrl = "r/transform/xml2rdf";
			var data = encodeURI('xml=' + vm.XML);
			
			var headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            };

            var config = {
                headers : headers
            };
			
            vm.xmlResult = "";
            
            $http.post(sUrl, data, config).then(function(response){
            	vm.xmlResult = JSON.stringify(response.data, null, 4);
            }, function(error){
            	vm.xmlResult = error;
            });
		}
		
		function XSD2OWL(){
			var sUrl = "r/transform/xsd2owl";
			var data = encodeURI('xsd=' + vm.XSD);
			
			var headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            };

            var config = {
                headers : headers
            };
			
            vm.xsdResult = "";
            
            $http.post(sUrl, data, config).then(function(response){
            	vm.xsdResult = JSON.stringify(response.data, null, 4);
            }, function(error){
            	vm.xsdResult = error;
            });
		}
		
		function CFDI2NLP(){
			var sUrl = "r/transform/cfdi2nlp";
			var data = encodeURI('xml=' + vm.CFDI);
			
			var headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            };

            var config = {
                headers : headers
            };
			
            vm.cnlResult = "";
            $http.post(sUrl, data, config).then(function(response){
            	vm.cnlResult = JSON.stringify(response.data, null, 4);
            }, function(error){
            	vm.cnlResult = error;
            });
		}
		
		function RDF2NLP(){
			var sUrl = "r/transform/rdf2nlp";
			var data = encodeURI('rdf=' + vm.RDF);
			
			var headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            };

            var config = {
                headers : headers
            };
			
            vm.rnlResult = "";
            
            $http.post(sUrl, data, config).then(function(response){
            	vm.rnlResult = JSON.stringify(response.data, null, 4);
            }, function(error){
            	vm.rnlResult = error;
            });
		}
		
		function OWL2NLP(){
			var sUrl = "r/transform/owl2nlp";
			var data = encodeURI('owl=' + vm.OWL);
			
			var headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            };

            var config = {
                headers : headers
            };
			
            vm.onlResult = "";
            
            $http.post(sUrl, data, config).then(function(response){
            	vm.onlResult = JSON.stringify(response.data, null, 4);
            }, function(error){
            	vm.onlResult = error;
            });
		}
		
	}
})();