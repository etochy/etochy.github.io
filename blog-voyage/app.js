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
    $scope.yourName = "test";

    $http.get("Data/articles.json")
        .then(function (response) {
            $scope.list = response.data.articles;
            console.log($scope.list);
        }).catch(function (error) {
            console.log(error);
        });



    $scope.alerter = function () {
        console.log("coucou " + $scope.yourName);
    }
    //...    

});

