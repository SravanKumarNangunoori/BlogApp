angular.module('EditModule', ['angular-web-notification', 'RestServiceModule'])

.controller('EditController', function($scope, $http, $location, webNotification, RestApiService) {

    $scope.postObj = {
        'title': "",
        'content': ""
    }
    $scope.tinymceModel = 'Sample content';
    $scope.getContent = function() {
        console.log('Editor content:', $scope.tinymceModel);
        $scope.postObj.title = $scope.title;
        $scope.postObj.content = $scope.tinymceModel;

        RestApiService.addPost(
                JSON.stringify($scope.postObj)
            )
            .then(function successCallback(response) {
                console.log("posted");
                RestApiService.pushNotification($scope.postObj).then((function successCallback(response) {
                    console.log("push notification sent");
                }))
                $scope.postObj = {
                    'title': "",
                    'content': ""
                }
                $location.path('/');
            }, function errorCallback(response) {
                console.log("error in creating");
            })
    };

    $scope.tinymceOptions = {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };




});