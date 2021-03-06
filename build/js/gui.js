var gui = (function(){
	
	var guiLayer;
	var heartBar,
		heartText;
		
	var monitor;
	
	var calsBurnedText,
		calsBurnedTitle,
		calsBurnedBackground;
		
	var calories = 0;
	
	var mutebtn,
		helpbtn;
	
	var soundoffsrc;
	var soundonsrc;
	
	var currentAnim = "good";
	
	
	var heartRateX = 1000;
	
	function drawGui(){		
		
		$('#overlayUI').addClass("active");
		
		
		guiLayer = new Kinetic.Layer();
		
		heartText = new Kinetic.Text({
			x:heartRateX + 10,
			y:160,
			text: "100 BPM",
			fontSize: 30,
			fontFamily: 'Calibri',
       		fill: 'black',
            zindex: 1
		});
		
		var calsBgImage = new Image();
		calsBgImage.src = "./images/calBG.png";
		calsBurnedBackground = new Kinetic.Image({
			x:860,
			y:190,
			image: calsBgImage,
			width: 507,
			height: 111,
            zindex: 1
		});
		
		calsBurnedBackground.setScale(.8, .8);
		
		
		calsBurnedTitle = new Kinetic.Text({
			x:900,
			y:210,
			text: "Calories Burned:",
			  fontSize: 30,
			fontFamily: 'Calibri',
       		fill: 'white'
		})
		
		calsBurnedText = new Kinetic.Text({
			x:1110,
			y:205,
			text: calories,
			align:'left',
			fontSize: 40,
			fontFamily: 'Calibri',
       		fill: 'white'
		})
		
		
		var monitorSrc = new Image();
		monitorSrc.src="./images/heartbeat.png";
		
		monitor = new Kinetic.Sprite({
			x:850,
			y:20,
			image:monitorSrc,
			animation:currentAnim,
			animations: setupAnimations(),
			frameRate: 7
		});
		monitor.setScale(.8,.5);
		
		
		monitorSrc.onload = function(){
			guiLayer.add(monitor);
			monitor.start();
		}

        $("#helpButton").bind('click', (function(){
            toggled = false;
            return function(){
                if(!toggled){
                    $("#tutorial").show();
                } else {
                    $("#tutorial").hide();
                }
                toggled = !toggled;
            };
        })());
		
		
		guiLayer.add(calsBurnedBackground);
		guiLayer.add(calsBurnedText);
		guiLayer.add(calsBurnedTitle);
		
		guiLayer.add(heartText);
		
		return guiLayer;
	}
	
	function setAnim(anim){
		monitor.setAnimation(anim);
		currentAnim = anim;
	}
	
	
	function setupAnimations(){
		var animations = {
			good: getAnimationArray(8, 0),
			bad: getAnimationArray(8, 8),
		}
        
        return animations;
	}
	
	function getAnimationArray(maxFrames, offset){
        var frameArray = [];
        for(var frame = 0; frame < maxFrames; frame++){
            frameArray.push(getAnimationFrame(frame + offset));
        }
        return frameArray;
    }
	
    function getAnimationFrame(frame){
        var x = (512 * (frame % 2));
        var y = (256 * Math.floor(frame / 2));
        return { 
            x : x,
            y : y,
            width : 512,
            height : 256
        }
    }
	
	
	function setHeartRate(amt){
		if(amt < 1){
			amt = 2;
			//console.log("GAME IS OVER");
		}
		//calories += amt/1000;
		calsBurnedText.setText(Math.ceil(calories));
		//heartBar.setWidth(amt*2);
		heartText.setText((Math.ceil(amt)) + " BPM");
	}
	
	function getCalories(){
	    return calories;
	}
	
	function setCalories(cals){
		calories += cals;
		if(calories < 0){
			calories = 0;
		}
	}
	
	return{
		drawGui:drawGui,
		setAnim:setAnim,
		setCalories:setCalories,
		setHeartRate:setHeartRate,
		getCalories:getCalories,
	}
	
	
})();
