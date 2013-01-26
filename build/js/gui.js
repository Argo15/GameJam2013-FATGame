var gui = (function(){
	
	var guiLayer;
	var heartBar,
		heartText;
		
	var monitor;
	
	var calsBurned,
		calsBurnedTitle;
	
	var heartRateX = 1000;
	
	function drawGui(){
		console.log("DRAWING GUI");
		
		guiLayer = new Kinetic.Layer();
		
		heartText = new Kinetic.Text({
			x:heartRateX + 10,
			y:160,
			text: "100 BPM",
			fontSize: 30,
			fontFamily: 'Calibri',
       		fill: 'black'
		});
		
		calsBurnedTitle = new Kinetic.Text({
			x:910,
			y:190,
			text: "Calories Burned:",
			  fontSize: 30,
			fontFamily: 'Calibri',
       		fill: 'black'
		})
		
		calsBurned = new Kinetic.Text({
			x:1130,
			y:190,
			text: "200",
			  fontSize: 40,
			fontFamily: 'Calibri',
       		fill: 'black'
		})
		
		
		var monitorSrc = new Image();
		monitorSrc.src="./images/heartbeat.png";
		
		monitor = new Kinetic.Sprite({
			x:850,
			y:20,
			image:monitorSrc,
			animation:'idle',
			animations: setupAnimations(),
			frameRate: 7
		});
		monitor.setScale(.8,.5);
		
		
		monitorSrc.onload = function(){
			guiLayer.add(monitor);
			monitor.start();
		}
		
		
		
		
		guiLayer.add(calsBurned);
		guiLayer.add(calsBurnedTitle);
		guiLayer.add(heartText);
		console.log(guiLayer);
		return guiLayer;
	}
	
	
	function setupAnimations(){
		var animations = {
			idle: getAnimationArray(8)
		}
        
        return animations;
	}
	
	function getAnimationArray(maxFrames){
        var frameArray = [];
        for(var frame = 0; frame < maxFrames; frame++){
            frameArray.push(getAnimationFrame(frame));
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
			amt = 1;
			//console.log("GAME IS OVER");
		}
		
		//heartBar.setWidth(amt*2);
		heartText.setText((Math.ceil(amt*2)) + " BPM");
	}
	
	return{
		drawGui:drawGui,
		setHeartRate:setHeartRate,
	}
	
	
})();
