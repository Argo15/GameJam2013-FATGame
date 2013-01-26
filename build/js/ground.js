var ground = (function(){
	
	var stage;
	var groundLayer;
	
	function drawGround(){
		
		groundLayer = new Kinetic.Layer;
		var width = 30000;
		var segmentLength = width / Path.nNumSamples;
		for (var i = 0; i < Path.nNumSamples-1; i++)
	    {
	        var height1 = Path.getHeight(i);
	        var height2 = Path.getHeight(i+1);
	        var pX1 = i * segmentLength;
	        var pX2 = (i+1) * segmentLength;
	        //console.log(height1);
		    var groundTriangleOne = new Kinetic.Polygon({
	            points : [ pX1, 400 - height1, pX1, 1000, pX2, 1000, pX2, 400 - height2],
	            fill: 'green',
	          })
    	      
	        groundLayer.add(groundTriangleOne);
		}
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
