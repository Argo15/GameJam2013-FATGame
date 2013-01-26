var gui = (function(){
	
	
	function drawGui(){
		console.log("DRAWING GUI");
	}
	
	
	function setHeartRate(amt){
		console.log(amt);
	}
	
	return{
		drawGui:drawGui,
		setHeartRate:setHeartRate,
	}
	
	
})();
