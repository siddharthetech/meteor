
angular.module('poll').controller('takeCtrl', ['$scope', '$state', '$meteor', function($scope, $state, $meteor) {

        $scope.poll = $meteor.collection(Poll, {sort: {'_id': -1}});
        console.log($scope.poll);

        $scope.model = {
            A1: ''
        };
        $scope.op = {
            'opt': ''
        };
        $scope.save = function(op, id) {
            console.log(op);
            console.log(id);
            answer.insert({
                question_id: id,
                option: op
            }, function(error, result) {
                if (error) {
                    console.log(error); //info about what went wrong
                }
                if (result) {
                    console.log(result); //the _id of new object if successful
                    $scope.answer = $meteor.collection(answer);
                    console.log($scope.answer);
                    var show = [];
                    var option = [];
                    var result1 = [];

                    for (var k = 0; k < $scope.poll._serverBackup.length; k++)
                    {
                        var ques = {};
                        var result = [];
                        option = $scope.poll._serverBackup[k].option;
                        for (var i = 0; i < option.length; i++)
                        {
                            var count = 0;
                            var data = {};
                            for (var p = 0; p < $scope.answer._serverBackup.length; p++)
                            {
                                if (option[i].name == $scope.answer._serverBackup[p].option)
                                {
                                    count++;
                                }
                            }
                            data = {
                                option: option[i].name,
                                count: count
                            }
                            result.push(data);
                        }
                        if (id == $scope.poll._serverBackup[k]._id)
                        {


                            ques = {
                                ques: $scope.poll._serverBackup[k].question,
                                option: result
                            }
                            result1.push(ques);
                        }
                    }
                    $scope.res = result1
                    console.log($scope.res);
                }

            });
        };
    }]);