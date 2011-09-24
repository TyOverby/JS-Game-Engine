function Engine(game){
	var game = game;

	this.run = function(){
		setInterval(this.update,1);
		setInterval(this.render,4);
	}

	this.update = function(){
		game.update();
	}

	this.render = function(){
		game.render();
	}
}