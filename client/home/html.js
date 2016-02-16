angular.module('poll').controller('homeCtrl', ['$scope', '$state', '$meteor', function($scope, $state, $meteor) {
        console.log('home');
        $scope.choices = [{'id': 1}];
        $scope.addNewChoice = function() {
            var newItemNo = $scope.choices.length + 1;
            $scope.choices.push({'id': '' + newItemNo});
            console.log($scope.choices);
        };
        $scope.model = {
            A1: ''
        };

        $scope.submit1 = function() {

            console.log($scope.model.A1);
            if ($scope.model.A1) {
                Poll.insert({
                    question: $scope.model.A1,
                    option: $scope.choices
                }, function(error, result) {
                    if (error) {
                        console.log(error); //info about what went wrong
                    }
                    if (result) {
                        console.log(result); //the _id of new object if successful
                       toastr.success('success');
                    }

                });
            }
            else{
                alert('enter your question');
            }

        };

    }]);