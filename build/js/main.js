var main = (function(){

	var stage;
	var gameLayer,
		groundLayer,
		skyLayer,
		cloudLayer;


	var player,
		groundObject;
		
	var gravity = 10,
		speed = 5;

	function init(){
		input.addKeyListeners();
		createStage();
		addBackground();
		addGround();
		addGameElements();
		startLoop();
	}

	function createStage(){
		stage = new Kinetic.Stage({
			container: 'container',
			width: 1280,
			height: 720,
		});

		gameLayer = new Kinetic.Layer();
		groundLayer = new Kinetic.Layer();
		skyLayer = new Kinetic.Layer();
		cloudLayer = new Kinetic.Layer();

	}

	function addBackground(){
		
		background.setStage(stage);
		background.drawBackground();
		
	}
	
	function addGround(){

        Path.initialize();
		ground.setStage(stage);

		ground.drawGround();
		groundLayer = ground.getGround();
	}
	
	function addGameElements(){


		var playerImage = new Image();
		playerImage.src = "./images/bill.png";
	    player = new Kinetic.Sprite({
	        x: 239,
	        y: 175,
	        offset: {x:256, y:256},
	        image: playerImage,
	        animation:'walking',
	        animations: playerClass.setupAnimations(),
	        frameRate: 5
	      });
	      player.setScale(-1, 1);

	      //Start Player Animation
	      playerImage.onload= function(){
	      	player.start();
	      }
	      
	      groundObject = new Kinetic.Rect({
	      	x: 0,
	        y: 400,
	        width: 60000,
	        height: 0,
	        fill: 'green',
	      })


	      player.onGround = false;

	      gameLayer.add(player);
	      groundLayer.add(groundObject);
	      stage.add(gameLayer);
	      stage.add(groundLayer);
	}

	function startLoop(){
		 setInterval(function(){
	      	update();
	      },1000/60);
	}


	function update(){
		movePlayer();
		moveScreen();

		stage.draw();
	}
	
	function moveScreen(){
		groundLayer.setX(groundLayer.getX() - speed);
		//console.log("GROUND LAYER POSITION: " + groundLayer.getX());
	}

	function movePlayer(){
		if (groundLayer.getX() > -29500)
		{
		    var index = Path.nNumSamples * -((groundLayer.getX()-400) / 30000);
            player.setY(400 - Path.getHeight(Math.floor(index)));
        }
	}

	function getStage(){
		return stage;
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
		getStage:getStage,
	}



})();
