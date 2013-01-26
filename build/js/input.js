var input = (function(){
	
	var KEY = {
		A:65,
		F:70,
		T:84,
	};
	var currentKeyDown = 0;
	
	function addKeyListeners(){
		$('body').keydown(function(e){
			currentKeyDown = e.keyCode;
			var keyLetter;
			switch(e.keyCode){
				case KEY.A:
					gamestate.setInput(e.keyCode);
					break;
				case KEY.F:
					gamestate.setInput(e.keyCode);
					gamestate;
				case KEY.T:
					gamestate.setInput(e.keyCode);
					break;
			}
			
			e.preventDefault(); 
		});
	}
	
	
	function getKeyDown(){
		return currentKeyDown;
	}
	
	return{
		addKeyListeners:addKeyListeners,
		getKeyDown:getKeyDown,
	}
	
})();
