angular.module("jgrApp").controller("add",['$scope','$http','server',function ($scope,$http,server) {
		$http({
		url:"http://www.somenote.cn:1510/test",
		method: "get"
	}).success(function(e) {
		$scope.data = e
	})
	$scope.add=function(){
		$http({
			url:server+"/test",
			method:"POST",
			data:$scope.adddata
		}).success(function(e){
			$scope.data.push($scope.adddata)
		})
	} 
/*$scope.add=function(){
		$http({
			url:server+"/test1510",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			$scope.data.push($scope.updata)
		})
	}*/

}])