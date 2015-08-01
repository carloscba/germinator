//'use strict';

/**
 * @ngdoc function
 * @name kuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kuApp
 */
angular.module('kuApp').controller('indexCtrl', function ($scope, $http, globalService, $location, Upload) {

	
	$scope.init = function(){
		$scope.viewFormUpload = false;
		$scope.ensayos = [
			{"nombre" : "nombre", "semilla":"semilla","sustrato":"sustrato","inicio":"01/08/2015","comentario":"comentario","cantidad":50},
			{"nombre" : "nombre 2", "semilla":"semilla 2","sustrato":"sustrato 2","inicio":"01/08/2015","comentario":"comentario 2","cantidad":50}
			
		];
		/*$http.get('http://172.18.3.19/index.php').success(function(e, status, headers, config) {
			
			$scope.ensayos = e;

		});*/


	};

	$scope.sendImage = function(){

		$http({
		    method: 'POST',
		    url: './data/save.php',
		    data: 'file='+$scope.file+'&data='+JSON.stringify($scope.mediaPlanData),
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});		

	}

	$scope.getMuestras = function(){
		$scope.viewFormUpload = true;
		/*$http.get('./mediaplans?idEnsayo='+$scope.client).success(function(e, status, headers, config) {
			$scope.mediaPlans = e;
		});*/	
		$scope.muestras = [
			{"comentario" : "nombre", "imagen":"muestra1.jpg","emergencia":0,"data":"","fecha":"01/08/2015"},
			{"comentario" : "nombre", "imagen":"muestra2.jpg","emergencia":5,"data":"","fecha":"08/08/2015"},
			{"comentario" : "nombre", "imagen":"muestra3.jpg","emergencia":15,"data":"","fecha":"15/08/2015"}
		];	

	}

	
		

	$scope.init();

});
