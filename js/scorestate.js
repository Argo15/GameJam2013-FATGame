var scorestate = (function()
{
	var stage;
	var skyLayer,
		cloudLayer,
		buttonLayer,
		textLayer;
	
	function init(score)
	{
	    $("#overlayUI").removeClass("active");
	    createStage();
	    addBackground();
	    addButtons();
	    addText(score);
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
/*
	    var backgroundObject = new Kinetic.Rect({
	      	x: 0,
	        y: 0,
	        width: 1280,
	        height: 720,
	        fill: 'purple',
	      })
*/
	      background.setStage(stage);
		  var skyLayer = background.drawBackground()[0];
	      stage.add(skyLayer);
	}
	
	function addText(score) {
	    var fatText = new Kinetic.Text({
        	x: stage.getWidth() / 2,
        	y: 15,
        	text: 'Score: ' + Math.round(score),
        	fontSize: 200,
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
	   var againImg = new Image();
	   againImg.src = "./images/againbutton.png";
	   var againButton = new Kinetic.Image({
			x: stage.getWidth()/2,
			y: 375,
			image: againImg,
			width: 500,
			height: 250,
		});
		
		againButton.setOffset({
      		x: againButton.getWidth() / 2
      	});
	      
	    buttonLayer.add(againButton);
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
