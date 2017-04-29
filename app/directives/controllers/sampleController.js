(function () {
    'use strict';
    var ctrlFunction = function () {
        this.hello = 'world';
        console.log('Hello World');
    };
    angular.module('angular-app').controller('sampleController', [ctrlFunction]);
})();