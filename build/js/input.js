var input = (function(){
	
	
	var currentKeyDown = 0;
	
	function addKeyListeners(){
		$('body').keydown(function(e){
			currentKeyDown = e.keyCode;
			console.log(e.keyCode);
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
