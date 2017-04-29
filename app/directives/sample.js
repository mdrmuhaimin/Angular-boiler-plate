(function () {
    'use strict';
    angular.module('angular-app').directive('issues', function () {
        return {
            restrict: 'E',
            controller: 'sampleController',
            controllerAs: 'mv',
            templateUrl: './templates/sample.html'
        };
    });
})();