angular.module('poll').controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
        console.log('yes');
        $scope.user = {
            email: '',
            password: ''
        };
        $scope.log = {
            email: '',
            password: ''
        };
        $scope.submit = function() {
            console.log($scope.user.email);
            console.log($scope.user.password);
//            var email = $('[name=email]').val();
//            var password = $('[name=password]').val();

            Accounts.createUser({
                email: $scope.user.email,
                password: $scope.user.password
            }, function(error, result) {
                if (error) {
                    
                    alert(error.reason);
                    console.log(error);
                }
                else {
                    console.log(Meteor.users.find().fetch());
                    $state.go('menu.home');
                }


            });
        };

        $scope.login = function() {
            console.log('hello');
            console.log($scope.log.email)
            Meteor.loginWithPassword($scope.log.email, $scope.log.password, function(err) {
                if (err) {
                    alert(err.reason);
                    console.log(err);
                } else {

                    $state.go('menu.home');
                }
            });
        };
    }]);