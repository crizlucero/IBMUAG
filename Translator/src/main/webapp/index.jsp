<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Redefer </title>
	<!-- Angular Material style sheet -->
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.css">
</head>
<body ng-app="modelApp" ng-controller="AppController as vm" ng-cloak> 	
 	
 	<div layout="column">
 		<md-content>
 			<md-card>
 				<md-card-title>
					<md-card-title-text>						
						<span class="md-headline">XML to RDF</span>						
						<span class="md-subhead">Transform a XML file to RDF file</span>
					</md-card-title-text>
				</md-card-title>
				<md-card-content>
					<md-content class="md-padding">						
						<md-input-container class="md-block">
							<label>XML</label>
							<input ng-model="vm.XML">
						</md-input-container>
						<textarea ng-model="vm.xmlResult" rows="12" cols="70"></textarea>
					</md-content>
				</md-card-content>		
				<md-card-actions layout="row" layout-align="end center">
					<md-button class="md-raised md-primary" ng-click="vm.XML2RDF()">XML to RDF</md-button>
				</md-card-actions>
 			</md-card> 			
 		</md-content>
 		
 		<md-content>
 			<md-card>
 				<md-card-title>
					<md-card-title-text>						
						<span class="md-headline">XSD to OWL</span>						
						<span class="md-subhead">Transform a XSD file to OWL file</span>
					</md-card-title-text>
				</md-card-title>
				<md-card-content>
					<md-content class="md-padding">						
						<md-input-container class="md-block">
							<label>XSD</label>
							<input ng-model="vm.XSD">
						</md-input-container>
						<textarea ng-model="vm.xsdResult" rows="12" cols="70"></textarea>
					</md-content>
				</md-card-content>		
				<md-card-actions layout="row" layout-align="end center">
					<md-button class="md-raised md-primary" ng-click="vm.XSD2OWL()">XSD to OWL</md-button>
				</md-card-actions>
 			</md-card> 			
 		</md-content>
 		
 		<md-content>
 			<md-card>
 				<md-card-title>
					<md-card-title-text>						
						<span class="md-headline">CFDI to Natural Language</span>						
						<span class="md-subhead">Transform a CFDI file to Natural text</span>
					</md-card-title-text>
				</md-card-title>
				<md-card-content>
					<md-content class="md-padding">						
						<md-input-container class="md-block">
							<label>CFDI</label>
							<input ng-model="vm.CFDI">
						</md-input-container>
						<textarea ng-model="vm.cnlResult" rows="12" cols="70"></textarea>
					</md-content>
				</md-card-content>		
				<md-card-actions layout="row" layout-align="end center">
					<md-button class="md-raised md-primary" ng-click="vm.CFDI2NLP()">CFDI to Natural Language</md-button>
				</md-card-actions>
 			</md-card> 			
 		</md-content>
 		
 		<md-content>
 			<md-card>
 				<md-card-title>
					<md-card-title-text>						
						<span class="md-headline">RDF to Natural Language</span>						
						<span class="md-subhead">Transform a RDF file to Natural text</span>
					</md-card-title-text>
				</md-card-title>
				<md-card-content>
					<md-content class="md-padding">						
						<md-input-container class="md-block">
							<label>RDF</label>
							<input ng-model="vm.RDF">
						</md-input-container>
						<textarea ng-model="vm.rnlResult" rows="12" cols="70"></textarea>
					</md-content>
				</md-card-content>		
				<md-card-actions layout="row" layout-align="end center">
					<md-button class="md-raised md-primary" ng-click="vm.RDF2NLP()">RDF to Natural Language</md-button>
				</md-card-actions>
 			</md-card> 			
 		</md-content>
 		
 		<md-content>
 			<md-card>
 				<md-card-title>
					<md-card-title-text>						
						<span class="md-headline">OWL to Natural Language</span>						
						<span class="md-subhead">Transform a OWL file to Natural text</span>
					</md-card-title-text>
				</md-card-title>
				<md-card-content>
					<md-content class="md-padding">						
						<md-input-container class="md-block">
							<label>OWL</label>
							<input ng-model="vm.OWL">
						</md-input-container>
						<textarea ng-model="vm.onlResult" rows="12" cols="70"></textarea>
					</md-content>
				</md-card-content>		
				<md-card-actions layout="row" layout-align="end center">
					<md-button class="md-raised md-primary" ng-click="vm.OWL2NLP()">OWL to Natural Language</md-button>
				</md-card-actions>
 			</md-card> 			
 		</md-content>
 	</div>

	<!-- Angular Material requires Angular.js Libraries -->
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-messages.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-resource.min.js"></script>

	<!-- Angular Material Library -->
	<script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.js"></script>

	<!-- Your application bootstrap  -->
	<script src="<c:url value="/assets/js/app.js" />"></script>
</body>
</html>

<!--<form name="xml2rdfForm" id="xml2rdfForm" method="POST" action="r/transform/xml2rdf">
	<input type="text" name="xml" value="http://parser.knowitive.com/Redefer/resources/cfdi.xml" size="100"/>
	<br/>
	<button type="submit" value='XML to RDF'>XML to RDF</button>
</form>
 
<form name="xsd2owlForm" id="xsd2owlForm" method="POST" action="r/transform/xsd2owl">
	<input type="text" name="xsd" value="http://parser.knowitive.com/Redefer/resources/cfdv32.xsd" size="100"/>
	<br/>
	<button type="submit" value='XSD to OWL'>XSD to OWL</button>
</form> -->