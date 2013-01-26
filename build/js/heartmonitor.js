var heartMonitorClass = (function(){
	
	
	var animations;
	
	function setupAnimations(){
		
		
		animations = {
			walking: getAnimationArray(8)
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
        var y = (256 * Math.floor(frame / 4));
        return { 
            x : x,
            y : y,
            width : 512,
            height : 256
        }
    }
	
	/**
	 * //Changes the animation
 	 * @param {Object} foot The foot being moved
	 */
	function operateMovement(foot){
		console.log(foot);
	}
	
	function operateBreathing(){
		
	}
	
	
	return{
		setupAnimations:setupAnimations,
		operateMovement:operateMovement,
		operateBreathing:operateBreathing,
	}
	
	
})();
