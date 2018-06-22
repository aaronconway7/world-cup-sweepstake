var app = angular.module('sweepstakeApp', ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/players", {
            templateUrl: "views/players.html"
        })
        .when("/results", {
            templateUrl: "views/results.html"
        })
        .when("/sweepstake", {
            templateUrl: "views/sweepstake.html"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);