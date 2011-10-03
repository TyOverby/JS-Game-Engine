function Engine(game,fps){
	var hasRan = false;
	var game = game;
	var targetFps = 1000;
	var prevTime = new Date();
	
	if(fps!=undefined&&fps!=null){
		targetFps = fps;
	}

	var intervalId;

	this.run = function(){
		//only do the startup if the game has ran before
		if(!hasRan){
			game.startup();
		}
		intervalId = setInterval(this.update,1);
		hasRan = true;
	}
	this.stop = function(message){
		clearInterval(intervalId);
		if(message){
			console.error(message);
		}
	}

	this.update = function(){
		var curTime = new Date();

		game.update();

		var diffTime=curTime.valueOf()-prevTime.valueOf();
		if(diffTime>1000/targetFps){
			game.render();
			prevTime = curTime;
		}

		
	}
}