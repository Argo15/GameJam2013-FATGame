var playerClass = (function(){
	
	
	var animations;
	
	function setupAnimations(){
		
		var w = 256;
		var h = 256;
		
		animations = {
			walking: [{
				x: 0, 
				y: 0,
				width: w,
				height: h,
			}, {
				x: 256, 
				y: 0,
				width: w,
				height: h,
			},
			{
				x: 512, 
				y: 0,
				width: w,
				height: h,
			},
			{
				x: 768, 
				y: 0,
				width: w,
				height: h,
			},
			//256
			{
				x: 0, 
				y: 256,
				width: w,
				height: h,
			}, {
				x: 256, 
				y: 256,
				width: w,
				height: h,
			},
			{
				x: 512, 
				y: 256,
				width: w,
				height: h,
			},
			{
				x: 768, 
				y: 256,
				width: w,
				height: h,
			},
			//512
			{
				x: 0, 
				y: 512,
				width: w,
				height: h,
			}, {
				x: 256, 
				y: 512,
				width: w,
				height: h,
			},
			{
				x: 512, 
				y: 512,
				width: w,
				height: h,
			},
			{
				x: 768, 
				y: 512,
				width: w,
				height: h,
			},
			//768
			{
				x: 0, 
				y: 768,
				width: w,
				height: h,
			}, {
				x: 256, 
				y: 768,
				width: w,
				height: h,
			},
			{
				x: 512, 
				y: 768,
				width: w,
				height: h,
			},
			{
				x: 768, 
				y: 768,
				width: w,
				height: h,
			},]
		}
		
		return animations;
	}
	
	
	
	
	return{
		setupAnimations:setupAnimations,
	}
	
	
})();
