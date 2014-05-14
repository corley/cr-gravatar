angular.module('corley.gravatar', [])
    .directive('crGravatar', function(){
        return {
            restrict: "EAC",
            replace: true,
            scope: {
                email: "@",
                size: "@"
            },
            template: '<img src="http://www.gravatar.com/avatar/{{emailCrypt}}?s={{size | number}}">',
            link: function(scope, elem, attr){
                scope.emailCrypt = CryptoJS.MD5(scope.email).toString();
            }
        };
    });
