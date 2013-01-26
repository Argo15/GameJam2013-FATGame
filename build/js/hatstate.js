var hatstate = (function()
{
	var stage;
	var selectedHatFrame;
	var skyLayer,
		cloudLayer,
		buttonLayer,
		textLayer,
		hatLayer;
	
	function init()
	{
	    createStage();
	    addBackground();
	    addButtons();
	    addHats();
	    addText();
	}
	
	function createStage(){
		stage = new Kinetic.Stage({
			container: 'container',
			width: 1280,
			height: 720,
		});

		cloudLayer = new Kinetic.Layer();
		skyLayer = new Kinetic.Layer();
		buttonLayer = new Kinetic.Layer();
		hatLayer = new Kinetic.Layer();
		textLayer = new Kinetic.Layer();
	}
	
	function addBackground()
	{
	      background.setStage(stage);
		  var skyLayer = background.drawBackground()[0];
	      stage.add(skyLayer);
	}
	
	function addHats() {
		
	   var hat1Img = new Image();
	   hat1Img.src = "./images/hat1.png";
	   var hat1Button = new Kinetic.Image({
			x: 125,
			y: 261,
			image: hat1Img,
			width: 198,
			height: 360,
		});
		
		hat1Button.on('click', function() {
			if(hatPath == "./images/hat1.png") {
				hatPath = null;
            	hat1Button.setStroke(null);
            	hat1Button.setStrokeWidth(null);
			} else {
            	hatPath = "./images/hat1.png";
            	hat1Button.setStroke('purple');
            	hat1Button.setStrokeWidth(10);
            
            	hat2Button.setStroke(null);
            	hat2Button.setStrokeWidth(null);
            	hat3Button.setStroke(null);
            	hat3Button.setStrokeWidth(null);
            	hat4Button.setStroke(null);
            	hat4Button.setStrokeWidth(null);
            	hat5Button.setStroke(null);
            	hat5Button.setStrokeWidth(null);
            }
        });
        
       	var hat2Img = new Image();
	   	hat2Img.src = "./images/hat2.png";
	   	var hat2Button = new Kinetic.Image({
			x: 333,
			y: 261,
			image: hat2Img,
			width: 198,
			height: 360,
		});
		
		hat2Button.on('click', function() {
			if(hatPath == "./images/hat2.png") {
				hatPath = null;
            	hat2Button.setStroke(null);
            	hat2Button.setStrokeWidth(null);
			} else {
            	hatPath = "./images/hat2.png";
            	hat2Button.setStroke('purple');
				hat2Button.setStrokeWidth(10);
            
            	hat1Button.setStroke(null);
            	hat1Button.setStrokeWidth(null);
            	hat3Button.setStroke(null);
            	hat3Button.setStrokeWidth(null);
            	hat4Button.setStroke(null);
            	hat4Button.setStrokeWidth(null);
            	hat5Button.setStroke(null);
            	hat5Button.setStrokeWidth(null);
            }
        });
        
        var hat3Img = new Image();
	   	hat3Img.src = "./images/hat3.png";
	   	var hat3Button = new Kinetic.Image({
			x: 541,
			y: 261,
			image: hat3Img,
			width: 198,
			height: 360,
		});
		
		hat3Button.on('click', function() {
			if(hatPath == "./images/hat3.png") {
				hatPath = null;
            	hat3Button.setStroke(null);
            	hat3Button.setStrokeWidth(null);
			} else {
            	hatPath = "./images/hat3.png";
            	hat3Button.setStroke('purple');
            	hat3Button.setStrokeWidth(10);
            
            	hat1Button.setStroke(null);
            	hat1Button.setStrokeWidth(null);
            	hat2Button.setStroke(null);
            	hat2Button.setStrokeWidth(null);
            	hat4Button.setStroke(null);
            	hat4Button.setStrokeWidth(null);
            	hat5Button.setStroke(null);
            	hat5Button.setStrokeWidth(null);
            }
        });
        
        var hat4Img = new Image();
	   	hat4Img.src = "./images/hat4.png";
	   	var hat4Button = new Kinetic.Image({
			x: 749,
			y: 261,
			image: hat4Img,
			width: 198,
			height: 360,
		});
		
		hat4Button.on('click', function() {
			if(hatPath == "./images/hat4.png") {
				hatPath = null;
            	hat4Button.setStroke(null);
            	hat4Button.setStrokeWidth(null);
			} else {
            	hatPath = "./images/hat4.png";
            	hat4Button.setStroke('purple');
            	hat4Button.setStrokeWidth(10);
            
            	hat1Button.setStroke(null);
            	hat1Button.setStrokeWidth(null);
            	hat2Button.setStroke(null);
            	hat2Button.setStrokeWidth(null);
            	hat3Button.setStroke(null);
            	hat3Button.setStrokeWidth(null);
            	hat5Button.setStroke(null);
            	hat5Button.setStrokeWidth(null);
            }
        });
        
        var hat5Img = new Image();
	   	hat5Img.src = "./images/hat5.png";
	   	var hat5Button = new Kinetic.Image({
			x: 957,
			y: 261,
			image: hat5Img,
			width: 198,
			height: 360,
		});
		
		hat5Button.on('click', function() {
			if(hatPath == "./images/hat5.png") {
				hatPath = null;
            	hat5Button.setStroke(null);
            	hat5Button.setStrokeWidth(null);
			} else {
           		hatPath = "./images/hat5.png";
            	hat5Button.setStroke('purple');
            	hat5Button.setStrokeWidth(10);
            
            	hat1Button.setStroke(null);
            	hat1Button.setStrokeWidth(null);
            	hat2Button.setStroke(null);
            	hat2Button.setStrokeWidth(null);
            	hat3Button.setStroke(null);
            	hat3Button.setStrokeWidth(null);
            	hat4Button.setStroke(null);
            	hat4Button.setStrokeWidth(null);
            }
        });
		
		hatLayer.add(hat1Button);
		hatLayer.add(hat2Button);
		hatLayer.add(hat3Button);
		hatLayer.add(hat4Button);
		hatLayer.add(hat5Button);
		stage.add(hatLayer);
	}
	
	function addText() {
	    var fatText = new Kinetic.Text({
        	x: stage.getWidth() / 2,
        	y: 15,
        	text: 'Select a Hat!',
        	fontSize: 100,
        	fontFamily: 'Calibri',
        	fill: 'pink',
        	stroke: 'purple',
        	strokeWidth: 3,
      });
      
      fatText.setOffset({
      		x: fatText.getWidth() / 2
      });
      
      textLayer.add(fatText);
      stage.add(textLayer);
	}
	
	function addButtons()
	{
	   var returnImg = new Image();
	   returnImg.src = "./images/returnbutton.png";
	   var returnButton = new Kinetic.Image({
			x: 10,
			y: stage.getHeight(),
			image: returnImg,
			width: 216,
			height: 144,
		});
		
		returnButton.setOffset({
      		y: returnButton.getHeight()
      	});
	      
	    buttonLayer.add(returnButton);
	    
	    buttonLayer.on('click', function() {
            stage.remove();
            currentstate = menustate;
		    currentstate.init();
        });
        
	    stage.add(buttonLayer);
	}

	function update()
	{
	    stage.draw();
	}

	return{
		init:init,
		update:update
	}
})();
