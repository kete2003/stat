'use strict';

define(['angular', 'ngResource'], function (angular) {

    angular.module( 'stat.services', ['ngResource'] )

    .factory('ProjectService', ['$resource', function($resource){
        return $resource('/client/project');
    }])

    .factory('RequestService', ['$http', function ($http) {
        return {

            login : function (data) {
                return $http.post('/login', data);
            },
            logout : function () {
                return $http.get( '/logout' );
            }

        };
    }])

});