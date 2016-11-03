angular.module("jgrApp").controller("edit",['$scope','$http','server',function ($scope,$http,server) {
	
	$scope.edit=function(e){
		
		$scope.edit=e
	}
	$scope.del=function(e){
		$http({
			url:server+"/test/"+e.id,
			method:"delete"
		}).success(function(){
			$scope.data.splice($scope.data.indexOf(e),1)
		})
	}
	
	$scope.save=function(){
		$http({
			url:server+"/test/"+$scope.edit.id,
			method:"PUT",
			data:$scope.edit
		}).success(function(){
			alert($scope.edit)
		})
	}
	$scope.add=function(){
		$http({
			url:server+"/test",
			method:"POST",
			data:$scope.adddata
		}).success(function(e){
			$scope.data.push(e)
			$scope.adddata=null
		})
	} 

	$http({
		url:server+"/test",
		method:"get"
	}).success(function(e){
		$scope.data=e

	})

}])