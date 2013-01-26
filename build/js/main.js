var main = (function(){
	
	var stage;
	var gameLayer;
	
	
	var player,
		ground;
	
	
	
	function init(){
		
		createStage();
		
	}
	
	function createStage(){
		stage = new Kinetic.Stage({
			container: 'container',
			width: 1280,
			height: 720,
		});
		
		gameLayer = new Kinetic.Layer();
		
		
	    player = new Kinetic.Rect({
	        x: 239,
	        y: 75,
	        width: 60,
	        height: 100,
	        fill: 'pink',
	      });
	      
	      ground = new Kinetic.Rect({
	      	x: 0,
	        y: 400,
	        width: 60000,
	        height: 100,
	        fill: 'green',
	      })
	      
	      
	      
	      
	      gameLayer.add(player);
	       gameLayer.add(ground);
	      stage.add(gameLayer);
	      
	      
	      setInterval(function(){
	      	update();
	      },1000/60);
	      
	}
	
	
	function update(){
		console.log("RUNNING");
		
		
		if(collides(player, ground)){
			console.log("OUCH");
		}
		
		
		player.setY(player.getY() + 1);
		
		stage.draw();
	}
	
	
	function collides(a, b){
		if (a!= undefined && b!= undefined){
			x1 = parseFloat(a.getX());
			x2 = parseFloat(b.getX());
			y1 = parseFloat(a.getY());
			y2 = parseFloat(b.getY());
			w1 = parseFloat(a.getWidth());
			w2 = parseFloat(b.getWidth());
			h1 = parseFloat(a.getHeight());
			h2 = parseFloat(b.getHeight());
			
			//console.log(x1 + " " + x2);
			
			return x1 < x2 + w2 &&
					x1 + w1 > x2 &&
					y1 < y2 + h2 &&
					y1 + h1 > y2;
			} else {
				return false;
			}

	}
	
	
	return{
		init:init,
	}
	
		
	
})();
