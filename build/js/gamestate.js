var gamestate = (function(){

	var stage;
	var gameLayer,
		groundLayer,
		skyLayer,
		cloudLayer,
		guiLayer;


	var player,
		groundObject;
		
	var gravity = 10,
		speed = 5;
		
	var KEY = {
		A:65,
		F:70,
		T:84,
	};
	
	//Game Variables
	var heartRate = 50,
		threshold = 10,
		angle = 45,
		angleMode = "increase";
	
	

	function init(){
		input.addKeyListeners();
		createStage();
		addBackground();
		addGround();
		addGameElements();
		addGui();
	}
	
	function addGui(){
		guiLayer = gui.drawGui();
	}

	function createStage(){
		stage = new Kinetic.Stage({
			container: 'container',
			width: 1280,
			height: 720,
		});

		gameLayer = new Kinetic.Layer();
		groundLayer = new Kinetic.Layer();
		
		cloudLayer = new Kinetic.Layer();
		guiLayer = new Kinetic.Layer();

	}

	function addBackground(){
		
		background.setStage(stage);
		skyLayer = background.drawBackground()[0];
		console.log(skyLayer);
		
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
	      stage.add(background.drawBackground()[0]);
	      stage.add(gameLayer);
	      stage.add(groundLayer);
	      stage.add(guiLayer);
	}

	function update(){
		movePlayer();
		moveScreen();

		updateVariables();
		
		stage.draw();
	}
	
	function updateVariables(){
		heartRate -= .1;
		
		if(angleMode == "increase"){
			angle += .5;
			if(angle >= 90){
				angleMode = "decrease";
			}
		}
		
		if(angleMode == "decrease"){
			angle -= .5;
			if(angle <= 0){
				angleMode = "increase";
			}
		}
		
		gui.setHeartRate(heartRate);
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
        else
        {
            stage.remove();
		    currentstate.init();
        }
	}
	
	
	function setInput(input){
		if(input == KEY.A){
			//Left Foot
			playerClass.operateMovement("left");
			if(angle < threshold){
				console.log("GOODHIT")
				speed += 1;
				heartRate += 10;
			} else {
				console.log("BAD");
				speed -= 1;
				heartRate -= 10;
			}
			
		} else if(input == KEY.F){
			//Right Foot
			playerClass.operateMovement("right");
			if(angle > (90 - threshold)){
				console.log("GOODHIT")
				speed += 1;
				heartRate += 10;
			} else {
				console.log("BAD");
				speed -= 1;
				heartRate -= 10;
			}
			
		} else if(input == KEY.T){
			//Breath
			playerClass.operateBreathing();
			
		}
		
		if(speed < 1){
			speed = 1;
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
	
	function getAngle(){
		return angle;
	}


	return{
		init:init,
		update:update
	}



})();
