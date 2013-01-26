var gui = (function(){
	
	var guiLayer;
	var heartBar,
		heartText;
	
	var heartRateX = 1000;
	
	function drawGui(){
		console.log("DRAWING GUI");
		
		guiLayer = new Kinetic.Layer();
		
		heartText = new Kinetic.Text({
			x:heartRateX + 80,
			y:80,
			text: "100 BPM",
			fontFamily: 'Calibri',
       		fill: 'black'
		})
		
		heartBar = new Kinetic.Rect({
			x:heartRateX,
			y:40,
			width:50,
			height:20,
			fill: 'red'
		});
		
		heartBackground = new Kinetic.Rect({
			x:heartRateX - 10,
			y:35,
			width:205,
			height:30,
			fill: 'black'
		})
		
		guiLayer.add(heartBackground);
		guiLayer.add(heartBar);
		guiLayer.add(heartText);
		console.log(guiLayer);
		return guiLayer;
	}
	
	
	function setHeartRate(amt){
		if(amt < 1){
			amt = 1;
			console.log("GAME IS OVER");
		}
		heartBar.setWidth(amt*2);
		heartText.setText((Math.ceil(amt*2)) + " BPM");
	}
	
	return{
		drawGui:drawGui,
		setHeartRate:setHeartRate,
	}
	
	
})();
