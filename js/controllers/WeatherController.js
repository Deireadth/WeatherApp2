app.controller('WeatherController', ['$scope', '$location', 'forecast', function ($scope, $location, forecast) {
    $scope.go = function (path) {
        $location.path(path);
        $scope.ForecastByCityName($scope.city.name)
    };
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