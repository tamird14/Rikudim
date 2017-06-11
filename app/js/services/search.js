app.service('search', ['$http', function ($http) {
    return {
        getSongs: function (name, creator, type, year) {
            var url = 'http://rikudim.info/search2.php?id=0' + (name != "" ? '&name=' + name : "") +
                (creator != "" ? '&creator=' + creator : "") + (type != "" ? '&type=' + type : "") +
                (year!=""?'&year='+year:"");
            var url2 = 'http://localhost:63342/rikudim/app/src/songs.json';
            return $http.get(url)
                .success(function (data) {
                    return data;
                })
                .error(function (data) {
                    return data;
                });
        }
    }
}]);