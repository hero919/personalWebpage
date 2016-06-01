/**
 * Created by zeqingzhang on 5/24/16.
 */
(function(){
    angular
        .module('personalWebpage',[])
        .controller('mainpageController', mainpageController);

    function mainpageController($scope, $http){

            $scope.submit = submit;

            function submit(contact){
                $http.post('/personalWebpage/contact', contact).then(function(response){
                    if(response){
                        $scope.responseMessage = "The Information successfully submitted";
                    }
                })
            }
    }
})();