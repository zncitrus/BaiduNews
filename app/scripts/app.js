'use strict';

/**
 * @ngdoc overview
 * @name jgrApp
 * @description
 * # jgrApp
 *
 * Main module of the application.
 */
angular
  .module('jgrApp',['ui.router'])
  .constant("server","http://www.somenote.cn:1510")
  .controller('con',['$scope','$http','$state',function ($scope,$http,$state) {
	     
	}]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider){
			$stateProvider
			.state('a',{
				url:'/a',
				templateUrl:'views/a.html',
				controller:'a'
			})
			.state('edit',{
				url:'/edit',
				templateUrl:'views/edit.html',
				controller:'edit'
			})
			$urlRouterProvider.when('','/a')
		}])
	.directive("new",['$http',function($http){
			return{
				restrict:"ECAM",
				templateUrl:"views/news.html",
				scope:{},
				link:function(scope,el,attr){
					scope.uid=attr['uid']
					var url=attr['abc']
					$http({
			            url:"http://www.somenote.cn:1510"+url,
			            method:"get"
		           }).success(function(e){
			            scope.fdata=e
		    })
			}}
		}])
	.directive("tp",['$http',function($http){
			return{
				restrict:"ECAM",
				templateUrl:"views/news.html",
				scope:{},
				link:function(scope,el,attr){
					scope.tuid=attr['tuid']
					var turl=attr['tabc']
					$http({
			            url:"http://www.somenote.cn:1510"+turl,
			            method:"get"
		           }).success(function(e){
			            scope.imgdata=e
		    })
			}}
		}])
	