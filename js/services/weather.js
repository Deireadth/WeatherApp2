app.service('forecast', ['$http', function ($http) {
    this.getForecastByCityName = function (cityName) {
        //return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=6f30bc93ae3d268d40734c25f8968f72')
        return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=6f30bc93ae3d268d40734c25f8968f72')
        //return $http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=6f30bc93ae3d268d40734c25f8968f72')
            .then(function (data) {
                return data;
            })
            .catch(function (err) {
                return err;
            });
    }
    //no przeciez sie kurwa zmienil
    //this.jakkolwiek = function jakkolwiek() {
    //    return 'blabla'
    //}api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
}]);