var app = angular.module("WeatherApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        
        templateUrl: 'views/empty.html'
    })
    .when('/city', {
        
        templateUrl: 'views/city.html'
    })
});