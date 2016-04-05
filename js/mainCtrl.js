// declaring the controller and injecting the service
angular.module('userProfiles').controller('mainCtrl', function($scope, mainService){

// gathers the data and prepares it to be sent to the view
    $scope.getUsers = function(){
        $scope.users = mainService.getUsers();
    };
// invoke the above function
    $scope.getUsers();

});
