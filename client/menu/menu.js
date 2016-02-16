angular.module('poll').controller('menuCtrl', ['$scope', '$state', '$meteor', function($scope, $state, $meteor) {
        console.log('menu');
        $scope.logout = function() {
            console.log('hey');
            Meteor.logout();
            $state.go('login');
        };
    }]);