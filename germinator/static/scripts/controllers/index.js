//'use strict';

/**
 * @ngdoc function
 * @name kuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kuApp
 */
angular.module('kuApp').controller('indexCtrl', function ($scope, $http, globalService, $location) {

	$scope.currentClient = '';

	$scope.init = function(){
		$http.get('./clients').success(function(e, status, headers, config) {
			$scope.clients = e;
		});	
	}

	$scope.openMediaPlan = function(_filename){
		glb = globalService;
		glb.setFileName(_filename);
		$location.path('/data');

	}

	$scope.openNewMediaPlan = function(currentClient){
		$scope.currentClient = currentClient;
		$('#newModal').modal('show');	
	}

	$scope.newMediaPlan = function(){
		$('#loader').modal('show');
		$http({
		    method: 'POST',
		    url: './mediaplans',
		    data: 'name='+$scope.name+'&client='+$scope.currentClient+'&content='+$scope.content,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}).success(function(data, status, headers, config) {

			$scope.name          = '';
			$scope.currentClient = '';
			$scope.content       = '';

			$('#loader').modal('hide');
			$('#newModal').modal('hide');

			$scope.init();
  		});
	}		

	$scope.init();

});
