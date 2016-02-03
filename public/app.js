///**
// * Created by zeqingzhang on 2/2/16.
// */
//
////(function(){
////    'use strict';
////    angular.
////        module("personalWebsite",["ngRoute"])
////        .config(config);
////
////    function config($routeProvider){
////        $routeProvider.
////                when('/Main', {
////                    templateUrl: 'index.html'
////    }).
////
////                when('/clientMessage', {
////                    templateUrl: 'clientMessage/clientMessage.html'
////
////                }).
////                otherwise({
////                    redirectTo: '/Main'
////                });
////        };
////
////
////
////})();
//
//
//var app = angular.module("personalWebsite",["ngRoute"]);
//
//app.config(['$routeProvider',
//    function ($routeProvider) {
//        $routeProvider.
//            when('/MainPage', {
//                templateUrl: 'index.html'
//            }).
//            when('/clientMessage', {
//                templateUrl: 'clientMessage/clientMessage.html'
//
//            }).
//            otherwise({
//                redirectTo: '/MainPage'
//            });
//    }]);
//
//
//
//
//
//
//app.controller("contactController",function($scope,$http){
//
//    $http.get("/clientMessage").success(function(response){
//        $scope.newClient = response;
//    });
//
//    $scope.add = function(client){
//
//        $http.post("/clientMessage",client)
//            .success(function(response){
//                $scope.newClient = response;
//            });
//
//        alert("The Message Has Already Sent! Please Refresh the page.");
//    };
//
//
//    $scope.remove = function(id){
//        //console.log("The id is: "+ id);
//        $http.delete("/clientMessage/"+id).success(
//            function(response){
//                $scope.newClient = response;
//            }
//        )
//    }
//
//});