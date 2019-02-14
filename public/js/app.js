var app = angular.module('myApp', ['ngRoute', 'appRoutes', 'MainModule', 'EditModule', 'socialLogin', 'ui.tinymce']);
app.config(function(socialProvider) {
    socialProvider.setGoogleKey("323609165869-5gm5offv0o185b81orktsc1nam84d0ol.apps.googleusercontent.com");
});