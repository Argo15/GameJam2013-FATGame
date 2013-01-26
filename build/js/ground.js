var ground = (function(){
	
	var stage;
	var groundLayer;
	
	function drawGround(){
		
		groundLayer = new Kinetic.Layer;
		
	}
	
	
	
	function setStage(mainStage){
		stage = mainStage;
	}
	
	function getGround(){
		return groundLayer;
	}
	
	
	return{
		drawGround:drawGround,
		setStage:setStage,
		getGround:getGround,
	}
	
	
})();
