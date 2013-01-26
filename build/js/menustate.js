var menustate = (function()
{
	var stage;
	var backgroundLayer,
		buttonLayer;
	
	function init()
	{
	    createStage();
	    addBackground();
	    addButtons();
	}
	
	function createStage(){
		stage = new Kinetic.Stage({
			container: 'container',
			width: 1280,
			height: 720,
		});

		backgroundLayer = new Kinetic.Layer();
		buttonLayer = new Kinetic.Layer();
	}
	
	function addBackground()
	{
	    var backgroundObject = new Kinetic.Rect({
	      	x: 0,
	        y: 0,
	        width: 1280,
	        height: 720,
	        fill: 'purple',
	      })
	      backgroundLayer.add(backgroundObject);
	      stage.add(backgroundLayer);
	}
	
	function addButtons()
	{
	    var startButton = new Kinetic.Text({
	      	x: 580,
	        y: 530,
	        width: 200,
	        height: 100,
			text: "Start",
			fontSize: 60,
			fontFamily: 'Calibri',
       		fill: 'black',
	      });
	    var startButtonBackground = new Kinetic.Rect({
	      	x: 540,
	        y: 510,
	        width: 200,
	        height: 100,
       		fill: 'Yellow',
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
