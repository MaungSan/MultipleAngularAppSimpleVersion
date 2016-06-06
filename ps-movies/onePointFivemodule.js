 

'use strict';
$(function () {
      (function (angular) {
            //var angularComponentVersion = require('angular');

            // var _angular = window.angular;// closure
            // var version = _angular.version.full;
    var module =  angular.module("psMovies", []);    
     
    function fetchMovies($http) {
        return $http.get("/movies.json")
                    .then(function(response) {
                        return response.data;
                    });
    }

    function controller($http) {

        var model = this;
        model.movies = [];

        model.$onInit = function() {
            fetchMovies($http).then(function(movies) {
                model.movies = movies;    
            });
        };
        
        model.upRating = function(movie) {
            if(movie.rating < 5) {
                movie.rating += 1;
            }
        };
        
        model.downRating = function(movie) {
            if(movie.rating > 1) {
                movie.rating -= 1;
            }
        };
    }

    module.component("movieList", {
        templateUrl: "/ps-movies/movie-list.component.html",
        controllerAs: "model",
        controller: ["$http", controller]
    });
    module.component("movieRating", {
            templateUrl: "/ps-movies/movie-rating.component.html",
            bindings: {
                value: "<"
            },
            transclude: true, 
            controllerAs: "model",
            controller: function() {
                var model = this;
                
                model.$onInit = function() {
                    model.entries = new Array(model.value);  
                };
                
                model.$onChanges = function() {
                    model.entries = new Array(model.value);
                };
            }        
        });
         angular.element(document).ready(function () {
                  angular.bootstrap(document.querySelector('[name="psMovies"]'), ['psMovies']);
            });

      })(angularVersions['1.5.1']);
});