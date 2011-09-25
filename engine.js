function Engine(game){
	var game = game;

	this.run = function(){
		game.startup();
		setInterval(this.update,1);
	}

	this.update = function(){
		game.update();
		game.render();
	}
}
