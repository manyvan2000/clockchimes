angular.module('ClockChimes.controllers.Main', [])

.controller('MainController', function($scope){
	$scope.startTime=1; 
	$scope.endTime=1; 
	$scope.numberOfChimes=1;
	$scope.submit = function(){
		var startTime = $scope.startTime; 
		var endTime = $scope.endTime; 
		if (startTime == endTime) $scope.numberOfChimes=startTime; 
		if($scope.endTime < $scope.startTime) {            // when you want from today through tomorrow. 
			if ($scope.startTime > 12){
				if ($scope.endTime > 12){ 
					$scope.numberOfChimes = getNumberOfChimes($scope.startTime -12, 12) + 66 + getNumberOfChimes(1, $scope.endTime -12); 
				} else{
					$scope.numberOfChimes = getNumberOfChimes($scope.startTime -12, 12) + getNumberOfChimes(1, $scope.endTime);
				}
			} else {                            // end time cannot be less than 12.
				$scope.numberOfChimes = getNumberOfChimes($scope.startTime, 12) + 66 + getNumberOfChimes(1, $scope.endTime);
			}
		} else {
			if ($scope.startTime > 12){
				if ($scope.endTime > 12){ 
					$scope.numberOfChimes = getNumberOfChimes($scope.startTime -12, $scope.endTime -12); 
				} else{
					$scope.numberOfChimes = getNumberOfChimes($scope.startTime -12, 12) + getNumberOfChimes(1, $scope.endTime);
				}
			} else {
				if ($scope.endTime > 12){ 
					$scope.numberOfChimes = getNumberOfChimes($scope.startTime, 12) + getNumberOfChimes(1, $scope.endTime -12); 
				} else{
					$scope.numberOfChimes = getNumberOfChimes($scope.startTime, $scope.endTime);
				}
			}
		}
		console.log("starttime:", $scope.startTime, $scope.endTime, $scope.numberOfChimes);
	}


	getNumberOfChimes = function(start, end) {
    		result = (end * (end +1)/2) -(start * (start -1) /2); 
    		return result; 
	}

	$scope.timesChanged = function(startTime){
		$scope.submit();
	}

  
})
.filter("range",  function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<=max; i++)
      input.push(i);
    return input; 
  }
});
;
