angular.module('EditModule', ['angular-web-notification']).controller('EditController', function($scope, $http, $location, webNotification) {


    $scope.postObj = {
        'title': "",
        'content': ""
    }
    $scope.tinymceModel = 'Sample content';
    $scope.getContent = function() {
        console.log('Editor content:', $scope.tinymceModel);
        $scope.postObj.title = $scope.title;
        $scope.postObj.content = $scope.tinymceModel;

        $http.post(
                "/api/post",
                JSON.stringify($scope.postObj)
            )
            .then(function successCallback(response) {
                console.log("posted");
                webNotification.showNotification('BlogApp', {
                    body: 'New Post available :' + $scope.postObj.title,
                    autoClose: 8000 //auto close the notification after 8 seconds (you can manually close it via hide function)
                }, function onShow(error, hide) {
                    if (error) {
                        window.alert('Unable to show notification: ' + error.message);
                    } else {
                        console.log('Notification Shown.');
                    }
                });
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