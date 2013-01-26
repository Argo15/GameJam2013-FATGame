var background = (function(){
	
	var stage;
	
	function drawBackground(){
		
		//Change this with sprites or whatever
		var rect = new Kinetic.Rect({
	        x: 239,
	        y: 75,
	        width: 100,
	        height: 50,
	        fill: 'red',
	        stroke: 'black',
	        strokeWidth: 4
	      });

		
		var layer = new Kinetic.Layer();

        var staticBackground = new Image();
        staticBackground.src = "../media/PNGS/sky3.jpg"; 

        staticBackground.onload = function() {
            var yoda = new Kinetic.Image({
                x: 0,
                y: 0,
                image: staticBackground,
                width: 1280,
                height: 720
            });

		}
        layer.add(staticBackground);
        return [layer]; 

	}
	
	function setStage(mainStage){
			stage = mainStage;
	}
	
	
	return{
		drawBackground:drawBackground,
		setStage:setStage,
	};
	
	
})();
