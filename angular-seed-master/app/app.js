'use strict';

angular.module('Authentication',[]);
angular.module('Home',[]);
angular.module('Profile',[]);

angular.module('httpAuth',[
	'Authentication',
	'Home',
	'Profile'
])

.config(['$routeProvider', function ($routeProvider){
	$routeProvider
	.when('/login',{
		controller: 'LoginController',
		templateUrl: 'modules/authentication/login.html',
	})

	.when('/home',{
		controller: 'HomeController',
		templateUrl:'modules/home/home.html'
	})
	.when('/profile',{
		controller: 'ProfileController',
		templateUrl:'modules/Profile/profile.html'
	})

	.otherwise({redirectTo: '/login'});
}])
.run(['$rootScope', '$location', '$http',
    function ($rootScope, $location, $http) {
    	$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
 
        $rootScope.$on('$locationChangeStart', function () {
            // redirect to login page regardless
            //if ($location.path() !== '/login') {
            //    $location.path('/login');
            //}
        });
}]);