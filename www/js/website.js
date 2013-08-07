angular.module('qikpush', []).
    config(function($routeProvider, $locationProvider) {
        $routeProvider.
        	when('/', {
            	templateUrl: 'partials/home.html',
            	controller: HomeCtrl
            }).
            when('/alt', {
            	templateUrl: 'partials/alt.html',
            	controller: AltCtrl
            }).
            when('/about', {
            	templateUrl: 'partials/about.html',
            	controller: AboutCtrl
            }).
            when('/features', {
            	templateUrl: 'partials/features.html',
            	controller: FeaturesCtrl
            }).
            when('/pricing', {
            	templateUrl: 'partials/pricing.html',
            	controller: PricingCtrl
            }).
            when('/contact', {
            	templateUrl: 'partials/contact.html',
            	controller: ContactCtrl
            }).
            otherwise({ redirectTo: '/home' });
    }).directive('fade-in', function() {
    return {
      compile: function(elm) {
        console.log('compiling');
        $(elm).css('opacity', 0.1);
        return function(scope, elm, attrs) {
          console.log('animating');
          $(elm).animate({ opacity : 1.0 }, 1000 );
        };
      }
    };
  });

function setActiveTab(href) {
	$("ul.nav li.active").removeClass("active");
	$("ul.nav li a[href='"+ href +"']").parent().addClass("active");
}

function HomeCtrl($scope) {
	setActiveTab(Config.tabs.ids.home);
}

function AltCtrl($scope) {
	setActiveTab(Config.tabs.ids.alt);
}

function AboutCtrl($scope) {
	setActiveTab(Config.tabs.ids.about);
}

function FeaturesCtrl($scope) {
	setActiveTab(Config.tabs.ids.features);
}

function PricingCtrl($scope) {
	setActiveTab(Config.tabs.ids.pricing);
}

function ContactCtrl($scope) {
	setActiveTab(Config.tabs.ids.contact);
}