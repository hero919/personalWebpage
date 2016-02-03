/**
 * Created by zeqingzhang on 2/2/16.
 */

//
//(function(){
//    angular.
//        module('personalWebsite')
//        .controller("contactController",contactController);
//
//
//    function contactController($scope,$http){
//        $http.get("/clientMessage").success(function(response){
//            $scope.newClient = response;
//        });
//
//        $scope.add = function(client){
//
//            $http.post("/clientMessage",client)
//                .success(function(response){
//                    $scope.newClient = response;
//                });
//
//            alert("The Message Has Already Sent! Please Refresh the page.");
//        };
//
//
//        $scope.remove = function(id){
//            //console.log("The id is: "+ id);
//            $http.delete("/clientMessage/"+id).success(
//                function(response){
//                    $scope.newClient = response;
//                }
//            )
//        }
//    }
//
//
//
//})();

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