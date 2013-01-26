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
	    var startButton = new Kinetic.Text({
	      	x: 575,
	        y: 530,
	        width: 200,
	        height: 100,
			text: "Again",
			fontSize: 60,
			fontFamily: 'Calibri',
       		fill: 'black',
	      });
	    var startButtonBackground = new Kinetic.Rect({
	      	x: 540,
	        y: 510,
	        width: 200,
	        height: 100,
       		fill: 'Yellow'
	      });
	      
	    buttonLayer.add(startButtonBackground);
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
