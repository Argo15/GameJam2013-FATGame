var gui = (function(){
	
	var guiLayer;
	
	function drawGui(){
		console.log("DRAWING GUI");
		
		guiLayer = new Kinetic.Layer();
		
		return guiLayer;
	}
	
	
	function setHeartRate(amt){
		//console.log(amt);
	}
	
	return{
		drawGui:drawGui,
		setHeartRate:setHeartRate,
	}
	
	
})();
