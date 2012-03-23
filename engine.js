Object.prototype.clone = function() {
    var newObj = (this instanceof Array) ? [] : {};
    for (i in this) {
        if (i == 'clone') continue;
        if (this[i] && typeof this[i] == "object") {
            newObj[i] = this[i].clone();
        } else newObj[i] = this[i]
    } return newObj;
};

function Engine(game,paneID){
	var hasRan = false;
	var game = game;
	var targetFps = 25;
	var prevTime;

    var intervalId = [];
    var pane = document.getElementById(paneID).getContext("2d");

    game.preload(pane);

	this.run = function(){
		if(!hasRan){
			game.startup();
		}
        hasRan = true;
		intervalId.push(setInterval(this.update,1));
        prevTime = new Date();
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
            var fracOfSec = diffTime/1000;
			game.update(fracOfSec*5,pane);
			prevTime = curTime;
			game.render(pane);
		}
	}
}
