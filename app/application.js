window.app = angular.module('slides', []);

/*
window.app.directive('pre', function(){

    var pre = {
        restrict: 'E',
        scope: {
            fill: '@',
            inline: '',
            code: '',
            class: '='
        },
        template: "<pre ng-class=\"{'inline': inline}\" class=\"{{ class }}\">" +
                        "<code data-trim class=\"{{ code }}\">" +
                            "{{ fill }}" +
                        "</code>" +
                    "</pre>",
        replace: true,
        link: function(scope, element, attrs){
            $scope.inline = attrs.hasOwnProperty('inline') || false;
            $scope.code = attrs.code || false;
        }
    }
    return pre;
});
*/

window.app.controller('hello', [function(f){

}]);