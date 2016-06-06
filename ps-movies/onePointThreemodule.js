

'use strict';
$(function () {
    (function (angular) {
        //var angularComponentVersion = require('angular');

        // var _angular = window.angular;// closure
        // var version = _angular.version.full;
        var module = angular.module("psOlderAngular", []);




        module.directive("movieRatingDirective", function () {
            function link($scope) {
                $scope.rcount = $scope.drmodel.rating;
            }
            return {
                scope: { drmodel: '=' },
                restrict: 'EA',
                templateUrl: '/ps-movies/movie-rating.directive.html',
                link: link
            };

        });
        angular.element(document).ready(function () {
            angular.bootstrap(document.querySelector('[name="psOlderAngular"]'), ['psOlderAngular']);
        });

    })(angularVersions['1.3.1']);
});