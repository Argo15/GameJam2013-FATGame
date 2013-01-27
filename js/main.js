var main = (function(){

	function init(){
	    currentstate = menustate;
		currentstate.init();
		startLoop();
		
		
		$("#howToPlayButton").bind("click", function(){
			$("#howToPlayScreen").css("display", "block");
			$("#shadowBox").css("display", "block");
		});
		
		$("#shadowBox").bind("click", function(){
			$("#howToPlayScreen").css("display", "none")
			$("#shadowBox").css("display", "none");
		});
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
