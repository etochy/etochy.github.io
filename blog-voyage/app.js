var app = angular.module("app", []);


app.controller("headerCtrl", function ($scope) {

    //...    

});


app.controller("footerCtrl", function ($scope) {

    //...    

});


app.controller("menuCtrl", function ($scope) {

    //...    

});


app.controller("contentCtrl", function ($scope, $http) {
    var x = "https://sheetsu.com/apis/v1.0su/3f6aa466c06b?limit=10&offset=0";

    $scope.valid = true;

    $http.get(x)
        .then(function (response) {
            $scope.list = response.data;
            $scope.valid = false;
            console.log($scope.list);
        }).catch(function (error) {
            $scope.valid = true;
            console.log(error);
        });



    $scope.alerter = function () {
        console.log("coucou " + $scope.yourName);
    }
    //...    

});

