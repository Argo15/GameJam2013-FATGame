var playerClass = (function(){
	
	
	var animations;
	
	function setupAnimations(){
		
		
		animations = {
			walking: getAnimationArray(16, 0),
			dying: getAnimationArray(4, 16),
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
        var x = (256 * (frame % 4));
        var y = (256 * Math.floor(frame / 4));
        return { 
            x : x,
            y : y,
            width : 256,
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
