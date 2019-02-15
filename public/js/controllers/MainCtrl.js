angular.module('MainModule', ['socialLogin', 'RestServiceModule', 'ngSanitize']).controller('MainController', function($scope, $http, socialLoginService, $rootScope, RestApiService) {
    $scope.userLogggedIn = false;
    $scope.userExist = false;
    $scope.userProfile = {
        'name': '',
        'email': ''
    };


    $scope.getposts = function() {
        RestApiService.getPosts().then(function(response) {
            $scope.posts = response.data;
        }, function(error) {
            console.log(error);
        });

    }
    $scope.getposts();




    $rootScope.$on('event:social-sign-in-success', function(event, userDetails) {

        $scope.userProfile.email = userDetails.email;
        $scope.userProfile.name = userDetails.name;
        // console.log($scope.userProfile);
        RestApiService.getUsers().then(function successCallback(response) {
            var userlist = response.data;
            for (let index = 0; index < userlist.length; index++) {
                var element = userlist[index];
                console.log(element.email == $scope.userProfile.email);
                if (element.email == $scope.userProfile.email) {
                    $scope.userExist = true;
                    break;
                }
            }

            // console.log($scope.userExist);
            if ($scope.userExist == false) {
                $scope.addUser();
            }

        });

        $scope.userLogggedIn = true;
        $scope.$apply();



    });

    $scope.addUser = function() {
        RestApiService.addUser(JSON.stringify($scope.userProfile))
            .then(function successCallback(response) {
                console.log("posted");

            }, function errorCallback(response) {
                console.log("error in creating");
            })
    }
    $scope.logout = function() {
        socialLoginService.logout();
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
            $scope.userLogggedIn = false;
            $scope.userProfile = {
                name: '',
                email: ''
            };
        });
    }

});