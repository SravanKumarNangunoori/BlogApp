angular.module('EditModule', []).controller('EditController', function($scope, $http, $location) {


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