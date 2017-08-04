    
var app = angular.module("carApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
	.when("/a", {
        template : "<br><h3> Parking Charges : Rs. 0.00</h3>"
    })
    .when("/charges", {
        template : "<br> <h3> Parking Charges : Rs. {{ result() | number:2 }}</h3>"
		//controller: "carCntrl"
    })
	.otherwise({
        template : "<p></p>"
    })
;
});
