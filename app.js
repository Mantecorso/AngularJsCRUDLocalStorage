var app = angular.module("luisApp", []);

app.controller("luisStorage", function ($scope, $http) {

            $scope.newUsers = {};
            $scope.saved = localStorage.getItem('users');
        
            $http.get("datos.json").then(function (item) {
            	localStorage.setItem('users', JSON.stringify($http.get("datos.json")));
                $scope.users = item.data;
            })
        
            localStorage.setItem('users', JSON.stringify($scope.users));
        
            $scope.addUser = function () {
        
                $scope.users.push($scope.newUsers);
                localStorage.setItem('users', JSON.stringify($scope.users));
                $scope.newUsers = {};
            };
        
            $scope.DeleteContact = function (contact) {
        
                var DeleteUser = $scope.users.indexOf(user);
                localStorage.removeItem('users', JSON.stringify($scope.users));
                $scope.users.splice(DeleteUser, 1);
            }
});
