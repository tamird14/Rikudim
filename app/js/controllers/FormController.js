app.controller('FormController', ['$scope', function ($scope) {
    $scope.songName = "";
    $scope.creator = "";
    $scope.type = "";
    $scope.year = ""
    $scope.startYear = 1924;
    $scope.endYear = new Date().getFullYear();
    $scope.songs = ["Dolly Parton - Working 9 To 5 10",
        "Good Lovin - Salsa",
        "King Of Africa - La Bomba",
        "New York - Frank Sintra",
        "אבא",
        "אבא אמא",
        "אבא שולם",
        "אבא שמעון"];
    $scope.creators = ["גדי ביטון",
        "שלמה ממן",
        "אלעד פרל",
        "ירון בן שמחון"];

    $scope.completeSong = function (query) {
        var songsMatch = [];
        for (var song in $scope.songs) {
            if ($scope.songs[song].includes(query.trim())) {
                songsMatch.push($scope.songs[song]);
            }
        }
        return songsMatch;
    };
    $scope.completeCreator = function (query) {
        var creatorssMatch = [];
        for (var creator in $scope.creators) {
            if ($scope.creators[creator].includes(query.trim())) {
                creatorssMatch.push($scope.creators[creator]);
            }
        }
        return creatorssMatch;
    };
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