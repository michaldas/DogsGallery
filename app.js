var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "homeCtrl"
    })
    .when("/about", {
      templateUrl: "about.html"
    })
    .when("/contact", {
      templateUrl: "contact.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});
