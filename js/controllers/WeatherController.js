app.controller('WeatherController', ['$scope','forecast', function($scope, forecast) {
    $scope.city = {
        name: 'London',
        id: '',
        coordinates: '',
        zipCode: '',
    }

    //$scope.ForecastByCityName = function() {
    //    $scope.weatherForecast = forecasat.getForecastByCityName($scope.city.name)
    //}
    //$scope.ForecastByCityName()

    forecast.success(function (data) {
        $scope.weatherForecast = data;
    });
}
]);