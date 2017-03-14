app.factory('forecast', ['$http', function ($http) {
    //this.getForecastByCityName = function () {
        //return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=6f30bc93ae3d268d40734c25f8968f72')
            return $http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=6f30bc93ae3d268d40734c25f8968f72')
            .success(function (data) {
                return data;
            })
            .error(function (err) {
                return err;
            });
    //}
}
]);