app.controller('WeatherController', ['$scope','forecast', function($scope, forecast) {
    $scope.city = {
        name: 'London',
        id: '',
        coordinates: '',
        zipCode: '',
    }
    //$scope.a = forecast.jakkolwiek()
    $scope.ForecastByCityName = function(cityName) {
        forecast.getForecastByCityName(cityName).then(function (response) {
            //console.log(response);
            $scope.weatherForecast = response;
        });
    }
    //$scope.ForecastByCityName()

    //forecast.getForecastByCityName($scope.city.name).then(function (response) {
    //    //console.log(response);
    //    $scope.weatherForecast = response;
    //});
}
]);