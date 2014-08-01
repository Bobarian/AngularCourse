'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('LandingPageController', [function() {

	}])
	.controller('waitlistController', ['$scope', '$firebase', function($scope, $firebase) {
		var partiesRef = new Firebase('https://waitandeat-bob.firebaseIO.com/');

		$scope.parties = $firebase(partiesRef);

		$scope.party = {name: '', phone: '', size: ''};

		$scope.saveParty = function() {
			$scope.parties.push($scope.party);
			$scope.party = {name: '', phone: '', size: ''};
		};
	}]);