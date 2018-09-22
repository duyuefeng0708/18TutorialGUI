/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    $urlRouterProvider.otherwise("/private/store");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('private', {
            abstract: true,
            url: "/private",
            templateUrl: "views/common/content.html",
        })
        .state('private.store', {
            url: "/store",
            templateUrl: "views/store.html"
        })
}
angular
    .module('blockchain')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
