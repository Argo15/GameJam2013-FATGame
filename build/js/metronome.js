var metronome = (function(){
	// this lets us know if we're inside an interval or not.
	var valid = false;
		
	// this indexes the letter we're listening for, as follows:
	// 0 - f
	// 1, 3 - a
	// 2 - t
	// Because there's only three letters, this should never exceed 3.
	var currentLetterInt = 0;
	
	// init timer
	setTimeout(offTimer,5000);
	
	function keyPressed(key) {
		if ((key == 70) && (valid == true) && (currentLetterInt == 0)) {
			console.log("valid f");
			
			// we hit it once already!
			valid = false;
		} else if ((key == 65) && (valid == true) && (currentLetterInt == 1 || currentLetterInt == 3)) {
			console.log("valid a");
			
			// we hit it once already!
			valid = false;
		} else if ((key == 84) && (valid == true) && (currentLetterInt == 2)) {
			console.log("valid t");
			
			// we hit it once already!
			valid = false;
		} else {
			console.log("invalid");
		}
	}
		
	function offTimer() {
		valid = false;
		setTimeout(onTimer,5000);
	};
		
	function onTimer() {			
		console.log("on timer");
		valid = true;
		currentLetterInt = (currentLetterInt + 1) % 4;
		setTimeout(offTimer,5000);
	};
	
	return {
		keyPressed:keyPressed,
		offTimer:offTimer,
		onTimer:onTimer,
	}
})();