/**
 * Created by chenlianghua on 2017/11/29.
 */
angular.module("app", ["ngRoute", "app.headerComponent"])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        var layoutPath="html/container/";
        $routeProvider
            .when('/home', {
                templateUrl: layoutPath+"home/index.html"
            })
            .when('/features', {
                templateUrl: layoutPath+"features/index.html"
            })
            .when('/business', {
                templateUrl: layoutPath+"business/index.html"
            })
            .when('/explore', {
                templateUrl: layoutPath+"explore/index.html"
            })
            .when('/about', {
                templateUrl: layoutPath+"about/index.html"
            })
            .otherwise({redirectTo: '/home'});
        $locationProvider.hashPrefix('');
    }]);
