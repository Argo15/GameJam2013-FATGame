var main = (function(){

	function init(){
	    currentstate = menustate;
		currentstate.init();
		startLoop();
	}

	function startLoop(){
		 setInterval(function(){
	      	currentstate.update();
	      },1000/60);
	}
	
	return{
		init:init
	}
})();
