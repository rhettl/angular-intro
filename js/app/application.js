app = angular.module('slides', []);

//window.app.directive('snippit', function(){
//    var copy = angular.copy;
//
//    return {
//        restrict: 'E',
//        scope: true,
//        replace: true,
//        transclude: true,
//        template: "<pre ng-class=\"{inline: isInline}\">" +
//                    "<code data-trim ng-non-bindable ng-transclude></code>" +
//                  "</pre>",
//        compile: function (scope, elem) {
//            n = angular.extend({}, scope);
//            console.log(n);
//        },
//        link: function(scope, elem, attrs){
//            //elem.find('code').html(scope.inner);
//            scope.isInline = attrs.hasOwnProperty('inline');
//        }
//    }
//});

app.controller('hello', [function(){

}]);



//angular.module('myApp', [])
//    .factory('myLogs', ['$http', function($http){
//        var myFact = function(){
//            //init script
//            this.reqUrl = '/includes/assets/scripts/rest/json.php';
//            this.logs = [];
//
//            this.query = {
//                func: 'get_logs',
//                args: []
//            }
//        }
//        myFact.prototype.getLogs = function(time){
//            this.query.args = [time];
//            $http.get(this.reqUrl, this.query)
//                .success(function(data){
//                    this.logs = data;
//                }).error(function(){
//                    this.logs = [];
//                    console.log('there is a problem!!');
//                });
//        };
//    }])
//    .controller('myCtrl', ['$scope', 'myLogs', function($scope, myLogs){
//        $scope.fac = new myLogs();
//    }]);






























