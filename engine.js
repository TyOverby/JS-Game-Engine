function Engine(game,paneID){
	var hasRan = false;
	var game = game;
	var targetFps = 60;
	var prevTime = new Date();

    var intervalId = [];
    pane = document.getElementById(paneID).getContext("2d");

	this.run = function(){
		if(!hasRan){
			game.startup();
		}
        hasRan = true;
		intervalId.push(setInterval(this.update,1));
	}

	this.stop = function(message){
        for(var i=0;i<intervalId.length;i++){
		    clearInterval(intervalId[i]);
        }

		if(message!=null){
			console.error(message);
		}
	}

	this.update = function(){
		var curTime = new Date();
		var diffTime=curTime.valueOf()-prevTime.valueOf();
		if(diffTime>1000/targetFps){
			game.update(diffTime);
			prevTime = curTime;
			game.render(pane);
		}
	}
}
