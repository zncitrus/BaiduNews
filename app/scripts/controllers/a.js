angular
  .module('jgrApp').controller("a", ['$scope', '$http',function($scope, $http) {

	$http({
		url:"http://www.somenote.cn:1510/test",
		method: "get"
	}).success(function(e) {
		$scope.fdata = e
	})
}])

