var menustate = (function()
{
	var stage;
	var skyLayer,
		cloudLayer,
		buttonLayer,
		textLayer;
	
	function init()
	{
	    createStage();
	    addBackground();
	    addButtons();
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
		textLayer = new Kinetic.Layer();
	}
	
	function addBackground()
	{
	      background.setStage(stage);
		  var skyLayer = background.drawBackground()[0];
	      stage.add(skyLayer);
	}
	
	function addText() {
	    var fatText = new Kinetic.Text({
        	x: stage.getWidth() / 2,
        	y: 15,
        	text: 'F A T',
        	fontSize: 300,
        	fontFamily: 'Calibri',
        	fill: 'pink',
        	stroke: 'purple',
        	strokeWidth: 10,
      });
      
      fatText.setOffset({
      		x: fatText.getWidth() / 2
      });
      
      textLayer.add(fatText);
      stage.add(textLayer);
	}
	
	function addButtons()
	{
	   var startImg = new Image();
	   startImg.src = "./images/startbutton.png";
	   var startButton = new Kinetic.Image({
			x: stage.getWidth()/2,
			y: 375,
			image: startImg,
			width: 500,
			height: 250,
		});
		
		startButton.setOffset({
      		x: startButton.getWidth() / 2
      	});
	      
	    buttonLayer.add(startButton);
	    buttonLayer.on('click', function() {
            stage.remove();
            currentstate = gamestate;
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
