/**
 * Created by chenlianghua on 2017/12/20.
 */
angular.module("app.headerCtrl", [])
    .controller("HeaderCtrl", function($scope){
        $scope.navList=["home", "features", "business", "explore", "about"];
    });