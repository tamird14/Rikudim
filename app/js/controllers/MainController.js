app.controller('MainController', ['$scope', 'search', function ($scope, search) {
    $scope.title = "עמדת בחירת שירים - מחול ישראלי אלעד פרל";
    $scope.searchSongs = function (name, creator, type, year) {
        search.getSongs(name, creator, type, year).then(function (result) {
            $scope.dataRecieved = result.data.songs;
        })
    };
}]).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey');
    $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
    $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
    $mdThemingProvider.theme('dark-blue').backgroundPalette('blue');
});
app.directive('tableRow', function (attr) {
    return {
        template: '<tr"><td>{{'+attr.name+'}}</td></tr>'
        /*'<td width="4%">' +
        '<div class="squaredTwo"><input type="checkbox" value="None" id="r5" name="check"></div>' +
        '</td>' +
        '<td width="30%">'+attr.name+'</td>' +
        '<td width="30%">'+attr.creator+'</td>' +
        '<td width="18%">'+attr.type+'</td>' +
        '<td width="18%">'+attr.year+'</td>' +
        '<td style="display: none;">'+attr.id+'</td></tr>'*/
    };
});