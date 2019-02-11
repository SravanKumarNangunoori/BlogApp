angular.module('MainModule', []).controller('MainController', function($scope) {



});

angular.module('LoginModule', []).controller('LoginController', function($scope) {


});

angular.module('EditModule', []).controller('EditController', function($scope) {

    $scope.tinymceModel = 'Initial content';

    $scope.getContent = function() {
        console.log('Editor content:', $scope.tinymceModel);
    };

    $scope.setContent = function() {
        $scope.tinymceModel = 'Time: ' + (new Date());
    };




    $scope.tinymceOptions = {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };

});