var ground = (function(){
	
	var stage;
	var groundLayer = new Kinetic.Layer;
	
	function drawGround(startIndex, endIndex){
		this.groundLayer.destroy();
		var width = 30000;
		var segmentLength = width / Path.nNumSamples;
		for (var i = Math.max(0,startIndex); i < Math.min(Path.nNumSamples-1, endIndex); i++)
	    {
	        var height1 = Path.getHeight(i);
	        var height2 = Path.getHeight(i+1);
	        var pX1 = i * segmentLength;
	        var pX2 = (i+1) * segmentLength;
		    var groundTriangleOne = new Kinetic.Polygon({
	            points : [ pX1, 400 - height1, pX1, 1000, pX2, 1000, pX2, 400 - height2],
	            fill: 'green'
	          })
    	      
	        this.groundLayer.add(groundTriangleOne);
		}
		stage.add(this.groundLayer);
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
		groundLayer:groundLayer,
	}
	
	
})();
