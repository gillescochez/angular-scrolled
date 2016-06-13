angular.module('app', ['angular-scrolled']).controller('demo', function ($scope) {

    $scope.items = [];
    $scope.windowItems = [];
    $scope.hItems = [];

    $scope.enabled = true;

    $scope.more = function () {

        var i = 0;
        var limit = 20;

        for (; i < limit; i++) {
            $scope.items.push({name:'item ' + ($scope.items.length + 1)});
        }
    };

    $scope.windowMore = function () {

        var i = 0;
        var limit = 20;

        for (; i < limit; i++) {
            $scope.windowItems.push({name:'item ' + ($scope.windowItems.length + 1)});
        }
    };

    $scope.hMore = function () {

        var i = 0;
        var limit = 20;

        for (; i < limit; i++) {
            $scope.hItems.push({name:'item ' + ($scope.hItems.length + 1)});
        }
    };

    $scope.more();
    $scope.windowMore();
    $scope.hMore();

});