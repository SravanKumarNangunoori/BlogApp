angular.module('RestServiceModule', []).factory('RestApiService', function($http) {

    var services = {};
    var urlBase = '/api';

    services.getPosts = function() {
        return $http.get(urlBase + '/getposts')
    };

    services.getUsers = function() {
        return $http.get(urlBase + '/getusers')
    };


    services.addUser = function(payload) {
        return $http.post(urlBase + '/newuser', payload)
    }


    services.addPost = function(payload) {
        return $http.post(urlBase + '/post', payload)
    }
    services.pushNotification = function(payload) {
        return $http.post('/push', payload)
    }

    return services;
});