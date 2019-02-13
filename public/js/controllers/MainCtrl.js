angular.module('MainModule', ['socialLogin']).controller('MainController', function($scope, socialLoginService, $rootScope) {
    $scope.userLogggedIn = false;


    $scope.userProfile = {};
    $rootScope.$on('event:social-sign-in-success', function(event, userDetails) {
        console.log(userDetails);
        $scope.userProfile = userDetails;
        $scope.userLogggedIn = true;
        $scope.$apply();
    });

    $scope.logout = function() {
        socialLoginService.logout();
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function() {
            $scope.userLogggedIn = false;
            $scope.userProfile = {};
        });
    }

});

angular.module('LoginModule', []).controller('LoginController', function($scope) {


});

angular.module('EditModule', []).controller('EditController', function($scope, $http) {


    $scope.postObj = {
        name: "",
        mail: "",
        content: ""
    }
    $scope.tinymceModel = 'Sample content';
    $scope.getContent = function() {
        console.log('Editor content:', $scope.tinymceModel);
        $scope.postObj.name = "xxx";
        $scope.postObj.mail = "a@a.com";
        $scope.postObj.content = $scope.tinymceModel;

        $http.post(
                "/api/post",
                JSON.stringify($scope.postObj)
            )
            .then(function successCallback(response) {
                console.log("posted");


                $scope.postObj = {
                    name: "",
                    mail: "",
                    content: ""
                }
            }, function errorCallback(response) {
                console.log("error in creating");
            })
    };
    $scope.setContent = function() {
        $scope.tinymceModel = 'Time: ' + (new Date());
    };
    $scope.tinymceOptions = {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };




});