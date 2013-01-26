var background = (function(){
	
	function drawBackground(){
		
		var rect = new Kinetic.Rect({
	        x: 239,
	        y: 75,
	        width: 100,
	        height: 50,
	        fill: 'green',
	        stroke: 'black',
	        strokeWidth: 4
	      });
		
		
		return cloud;
		
	}
	
	function setStage(){
		
	}
	
	
	return{
		drawBackground:drawBackground,
		setStage:setStage,
	}
	
	
})();
