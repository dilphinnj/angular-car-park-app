app.controller('carCntrl', function($scope) {
	$scope.cars=[{
					id: "c1", 
					regNo: "CAR 111111", 
					loc:"park1",
					timeIn: "18:10",
					//timeOut: "6.45"
				}, 
				{
					id: "c2", 
					regNo: "CAR 222222", 
					loc:"park1",
					timeIn: "12:05",
					//timeOut: "7.15"
				}, 
				{
					id: "c3", 
					regNo: "CAR 333333", 
					loc:"park2",
					timeIn: "7:30",
					//timeOut: "6.30"
				}];
        $scope.result = function() {	
		
				var val = $scope.a * $scope.b;
				
				if(val < 0)
				val = 0;	
			           
                return val;
            
        };
		$scope.result2 = function() {	
		
				var timeOut = $scope.tOut;
				timeOut = timeOut.split(":");	
				var timeOutHour = timeOut[0];
				var timeOutMins = timeOut[1];
				var timeIn = $scope.regNo.timeIn;
				timeIn = timeIn.split(":");	
				var timeInHour = timeIn[0];
				var timeInMins = timeIn[1];
				var timeInMinsTot = Math.floor(timeInHour*60) + Math.floor(timeInMins);
				var timeOutMinsTot = Math.floor(timeOutHour*60) + Math.floor(timeOutMins);
				//var minDiff = Math.floor(timeOutMins/60) + Math.floor(60-timeInMins);
				
				var timeDiff = parseFloat(Math.floor((timeOutMinsTot) - (timeInMinsTot))/60).toFixed(2);
				$scope.b = timeDiff; 		           
                return timeDiff;
            
        };
    });
	app.controller('buttonController', function buttonController ($scope) {
            $scope.title1 = 'Button';
            $scope.title4 = 'Warn';
            $scope.isDisabled = true;
            $scope.googleUrl = 'http://google.com';
         } );
	app.controller('dateCtrl', function($scope) {
    $scope.today = new Date();
	}); 