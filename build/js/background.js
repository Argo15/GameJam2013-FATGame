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

        staticBackground.onload = function() {
            var yoda = new Kinetic.Image({
                x: 0,
                y: 0,
                image: staticBackground,
                width: 1280,
                height: 720
            });
            
            layer.add(yoda);
		}

        var cloud1Image = new Image();
        var cloud2Image = new Image();
        var cloud3Image = new Image();
        var cloud4Image = new Image();
        var cloud5Image = new Image();

        function addLayout(cloudImage){
            var width = 192;
            var height = 129
            cloudImage.onLoad = function(){
                var yoda = new Kinetic.Image({
                    x: width,
                    y: height,
                    image: cloudImage,
                    height: height,
                    width: width
                });
                layout.add(yoda);
            }
        };
      
        addLayout(cloud1Image);
        addLayout(cloud2Image);
        addLayout(cloud3Image);
        addLayout(cloud4Image);
        addLayout(cloud5Image);

        staticBackground.src = "../media/PNGS/sky3.jpg"; 
        cloud2Image.src = "../media/PNGS/cloud2.png";
        cloud1Image.src = "../media/PNGS/cloud1.png";
        cloud3Image.src = "../media/PNGS/cloud3.png";
        cloud4Image.src = "../media/PNGS/cloud4.png";
        cloud5Image.src = "../media/PNGS/cloud5.png";
       
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
