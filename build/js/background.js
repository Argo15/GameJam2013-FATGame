var background = (function(){
	
	var stage;
	
	function drawBackground(){
		
		//Change this with sprites or whatever
		//#yolo
		var rect = new Kinetic.Rect({
	        x: 239,
	        y: 75,
	        width: 100,
	        height: 50,
	        fill: 'green',
	        stroke: 'black',
	        strokeWidth: 4
	      });
		
		
		return rect;
		
	}
	
	function setStage(mainStage){
			stage = mainStage;
	}
	
	
	return{
		drawBackground:drawBackground,
		setStage:setStage,
	}
	
	
})();
