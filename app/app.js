var app = angular.module('sweepstakeApp', ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html"
        })
        .when("/players", {
            templateUrl: "views/players.html",
            controller: "sweepstakeController"
        })
        .when("/sweepstake", {
            templateUrl: "views/sweepstake.html",
            controller: "sweepstakeController"
        })
        .otherwise({
            redirectTo: "/"
        });
}]);