if (Meteor.isClient) {
    angular.module('poll', ['angular-meteor', 'ui.router', 'accounts.ui', 'ui.bootstrap', 'ngStorage','ionic'])
            .run(function(timeStorage, $state) {

                console.log('run');
                if (localStorage.getItem('Meteor.userId')) {
                    $state.go('menu.home');
                }
                else {
                    $state.go('login');
                }

            });

}