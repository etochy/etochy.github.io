var app = angular.module("app", []);

app.controller("contentCtrl", function ($window, $scope, $http) {
    let i = 2;
    let j = 6
    let x = "https://sheetsu.com/apis/v1.0su/3f6aa466c06b?limit=5&offset=";

    // let y = "https://sheets.googleapis.com/v4/spreadsheets/10deKDNcIkzjqp1jUdBEwBfC-ykKaCDxuGDOyyDViC_8?includeGridData=true&ranges=A2%3AD&fields=sheets%2Fdata%2FrowData%2Fvalues%2FformattedValue&key=AIzaSyAHsg8sK46DfPSTa1WZETcB0nLUCqmXLxw";
    let y0 = "https://sheets.googleapis.com/v4/spreadsheets/10deKDNcIkzjqp1jUdBEwBfC-ykKaCDxuGDOyyDViC_8/values/A"
    let y1 = ":D";
    let y2 = "?valueRenderOption=FORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING&alt=json&key=AIzaSyAHsg8sK46DfPSTa1WZETcB0nLUCqmXLxw";

    const elem = document.getElementById("header");

    // On recupere la position du scroll
    angular.element(document.querySelector('.mdl-layout__content')).bind('scroll', function (scroll) {
        console.log(scroll.originalTarget.scrollTop);
        if (scroll.originalTarget.scrollTop > 0) {
            let h =  300-scroll.originalTarget.scrollTop;
            elem.style = "height: " + h + "px;";
        } else {
            elem.clientHeight = 300;
        }
    })

    $scope.valid = true;

    $http.get(y0 + i + y1 + j + y2)
        .then(function (response) {
            if (response.data.values.length != null) {
                $scope.list = response.data.values;
                i = $scope.list.length + 2;
                j = i + 5;
            }
            $scope.valid = false;
        }).catch(function (error) {
            $scope.valid = true;
        });



    $scope.alerter = function () {
        console.log("coucou " + $scope.yourName);
    }

    $scope.chargerPlus = function () {
        $scope.valid = true;

        $http.get(y0 + i + y1 + j + y2)
            .then(function (response) {
                if (response.data.values != null) {
                    response.data.values.forEach(element => {
                        $scope.list.push(element);
                    });
                    i = $scope.list.length + 2;
                    j = i + 5;
                }
                $scope.valid = false;

            }).catch(function (error) {
                $scope.valid = true;
                console.log(error);
            });
    }

});

