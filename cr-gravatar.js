angular.module('corley.gravatar', [])
    .directive('crGravatar', function(){
        return {
            restrict: "EAC",
            replace: true,
            scope: {
                email: "@",
                size: "@"
            },
            template: '<img src="http://www.gravatar.com/avatar/{{email}}?s={{size | number}}">',
            link: function(scope, elem, attr){
                var c;
                scope.$apply(function(){
                    c = CryptoJS.MD5(scope.email);
                });
                scope.email = c.toString();
            }
        };
    });
