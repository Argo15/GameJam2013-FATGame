var gamestate = (function(){

	var stage;
	var gameLayer,
		skyLayer,
		cloudLayer,
		guiLayer;


	var player,
		metronomeArrow,
		groundObject;

	var gravity = 10,
		speed = 5;

	var metronomeDirection = 1;

	var KEY = {
		A:65,
		F:70,
		T:84,
	};
	
	var fKeyDown = false;
	var aKeyDown = false;
	var tKeyDown = false;
	
	var fKeyInit = false;
	var aKeyInit = false;
	var tKeyInit = false;

	//Game Variables
	var heartRate = 50,
		threshold = 15,
		angle = 176,
		angleMode = "increase";

    var mySnd;

	function init(){
		
		mySnd = new buzz.sound("./sounds/runningsong", {
			formats: [ "mp3"]
		});
		
		mySnd.play();
		
		
		input.addKeyListeners();
		createStage();
		addBackground();
		addGround();
		addGui();
		addGameElements();
		
		setInterval(function(){
			heartRate -= 1;
		},1000)
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
		ground.groundLayer = new Kinetic.Layer();

		cloudLayer = new Kinetic.Layer();
		guiLayer = new Kinetic.Layer();

	}

	function addBackground(){

		background.setStage(stage);
		skyLayer = background.drawBackground()[0];
		//console.log(skyLayer);

	}

	function addGround(){

        Path.initialize();
		ground.setStage(stage);
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

	      player.onGround = false;

		// add metronome.
		var metronomeBackgroundImg = new Image();
		metronomeBackgroundImg.src = "./images/fatmeter.png";
		var metronomeBackground = new Kinetic.Image({
          x: 5,
          y: 0,
          image: metronomeBackgroundImg,
          width: 200,
          height: 200
        });
        
        var metronomeArrowImg = new Image();
        metronomeArrowImg.src = "./images/arrow.png";
        metronomeArrow = new Kinetic.Image({
        	x: 108,
        	y: 199,
        	image: metronomeArrowImg,
        	width: 74,
        	height: 130
        });
        metronomeArrow.setRotation(176 * (Math.PI/180));

		guiLayer.add(metronomeBackground);
		guiLayer.add(metronomeArrow);

	      gameLayer.add(player);
	      stage.add(background.drawBackground()[0]);
	      stage.add(gameLayer);
	      stage.add(ground.groundLayer);
	      ground.groundLayer.setZIndex(0);
	      stage.add(guiLayer);
	      guiLayer.setZIndex(10000);
	}

	function update(){
	    var index = Math.floor(Path.nNumSamples * -((ground.groundLayer.getX()-400) / 30000));
		ground.drawGround(index-6, index+13);
		movePlayer();
		moveScreen();
		checkCurrentRequirement();

		updateVariables();

		stage.draw();
	}
	
	function checkCurrentRequirement(){
		
		
		
		if (angle <= 184 && !fKeyInit){
			fKeyInit = true;
			setTimeout(function(){
				if(fKeyDown == false){
					heartRate += 5;
				} else {
				}
				fKeyInit = false;
				fKeyDown = false;
			}, 400);
		}
		
		if((angle >= 205) && (angle <= 214) && !aKeyInit){
			aKeyInit = true;
			setTimeout(function(){
				if(aKeyDown == false){
					heartRate += 5;
				} else {
				}
				aKeyInit = false;
				aKeyDown = false;
			}, 400);
		}
		
		if(angle >= 234 && !tKeyInit){
			tKeyInit = true;
			setTimeout(function(){
				if(tKeyDown == false){
					heartRate += 5;
				} else {
					
				}
				console.log("GG UNINSTALL");
				tKeyInit = false;
				tKeyDown = false;
			}, 400);
		}
	}

	function updateVariables(){
		//heartRate -= .1;

		if(angleMode == "increase"){
			angle += 1;
			if(angle >= 241){
				angleMode = "decrease";
				metronomeDirection = -1;
			}
		}

		if(angleMode == "decrease"){
			angle -= 1;
			if(angle <= 175){
				angleMode = "increase";
				metronomeDirection = 1;
			}
		}
		//console.log(angle);

		gui.setHeartRate(heartRate);
		metronomeArrow.setRotation(angle * (Math.PI/180));
	}

	function moveScreen(){
		ground.groundLayer.setX(ground.groundLayer.getX() - speed);
		//console.log("GROUND LAYER POSITION: " + ground.groundLayer.getX());
	}

	function movePlayer(){
		if (ground.groundLayer.getX() > -29500)
		{
		    var index = Path.nNumSamples * -((ground.groundLayer.getX()-400) / 30000);
            player.setY(410 - Path.getHeight(Math.floor(index)));
        }
        else
        {
        	//mySnd.stop();
            stage.remove();
            //currentstate.init();
        }
	}


	// trigger F when angle is between 175 - 180
	// Trigger A when angle is between 205 - 210
	// trigger T when angle i between 236 - 241
	function setInput(input){
		if(input == KEY.F){
			//Right Foot
			playerClass.operateMovement("right");
			if (angle <= 184 && !fKeyDown){
				fKeyDown = true;
			} else {
				console.log("BAD");
				//speed -= 1;
				
			}

		} else if(input == KEY.A){
			//Left Foot
			playerClass.operateMovement("left");
			if((angle >= 205) && (angle <= 214) && !aKeyDown){
				console.log("GOODHIT")
				aKeyDown = true;

			} else {
				console.log("BAD");

			}

		} else if(input == KEY.T){
			//Breath
			playerClass.operateBreathing();
			if(angle >= 234 && !tKeyDown){
				console.log("GOODHIT")
				tKeyDown = true;

			} else {
				console.log("BAD");

			}
		}

		if(speed < 1){
			speed = 1;
		}
		
		if(speed > 20){
			speed = 20
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
		setInput:setInput,
		update:update
	}



})();