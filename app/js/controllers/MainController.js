app.controller('MainController', ['$scope', 'search', function ($scope, search) {
    $scope.title = "עמדת בחירת שירים - מחול ישראלי אלעד פרל";
    $scope.searchSongs = function (name, creator, type, year) {
        search.getSongs(name, creator, type, year).then(function (result) {
            $scope.dataRecieved = result.data.songs;
        })
    };
}]);