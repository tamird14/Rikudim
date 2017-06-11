app.controller('FormController', ['$scope', function ($scope) {
    $scope.songName = "";
    $scope.creator = "";
    $scope.type = "";
    $scope.year = ""
    $scope.startYear = 1924;
    $scope.endYear = new Date().getFullYear();
}]);

app.filter('rangeYear', function () {
    return function (input) {
        var years = [];

        for (var i = 1924; i <= new Date().getFullYear(); i += 1) {
            years.push(i);
        }
        return years;
    }
});