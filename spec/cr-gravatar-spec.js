describe("gravatar directive", function(){

    var $_compile;
    var $_scope;
    var el;
    var template;

    beforeEach(function(){
        module('corley.gravatar');
    });

    beforeEach(inject(function($compile, $rootScope) {
        $_compile = $compile;
        $_scope = $rootScope.$new();
    }));

    it("inject gravatar img", function(){
        $_scope.user = {email:"scope@email.it"};
        el = angular.element('<div class="crGravatar" size=100 email="{{user.email}}"></div>');
        template = $_compile(el)($_scope);
        $_scope.$digest();

        var c;
        $_scope.$apply(function(){
            c = CryptoJS.MD5($_scope.user.email);
        });
        
        expect(template.attr('src')).toBe('http://www.gravatar.com/avatar/'+c.toString()+'?s=100');
    }); 
    
    it("inject gravatar img, size is string", function(){
        $_scope.user = {email:"scope@email.it"};
        el = angular.element('<div class="crGravatar" size="hello" email="{{user.email}}"></div>');
        template = $_compile(el)($_scope);
        $_scope.$digest();

        var c;
        $_scope.$apply(function(){
            c = CryptoJS.MD5($_scope.user.email);
        });
        expect(template.attr('src')).toBe('http://www.gravatar.com/avatar/'+c.toString()+'?s=');
    }); 

    it("inject gravatar img, size is null", function(){
        $_scope.user = {email:"scope@email.it"};
        el = angular.element('<div class="crGravatar" email="{{user.email}}"></div>');
        template = $_compile(el)($_scope);
        $_scope.$digest();

        var c;
        $_scope.$apply(function(){
            c = CryptoJS.MD5($_scope.user.email);
        });
        
        expect(template.attr('src')).toBe('http://www.gravatar.com/avatar/'+c.toString()+'?s=');
    }); 
});
