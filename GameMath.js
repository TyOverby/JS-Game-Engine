GameMath = {
	Vector2f: function(x,y){
		this.x = x;
		this.y = y;

		this.plus = function(one,two){
			if(two!=undefined){
				return new GameMath.Vector2f(this.x + one,this.y + two);
			}
			else{
				return this.plus(one.x,one.y)
			}
		}
		this.plusEquals = function(one,two){
			if(two!=undefined){
				this.x += one;
				this.y += two;
			}
			else{
				this.plusEquals(one.x,one.y)
			}
		}

		this.minus = function(one,two){
			if(two!=undefined){
				return new GameMath.Vector2f(this.x - one,this.y - two);
			}
			else{
				return this.minus(one.x,one.y)
			}
		}
		this.minusEquals = function(one,two){
			if(two!=undefined){
				this.x -= one;
				this.y -= two;
			}
			else{
				this.minusEquals(one.x,one.y)
			}
		}

		

		this.times = function(one,two){
			if(two!=undefined){
				return new GameMath.Vector2f(this.x * one,this.y * two);
			}
			else{
				return new GameMath.Vector2f(this.x * one, this.y * one);
			}
		}
		this.timesEquals = function(one,two){
			if(two!=undefined){
				this.x *= one;
				this.y *= two;
			}
			else{
				this.x *= one;
				this.y *= one;
			}
		}


		this.divideBy = function(one,two){
			if(two!=undefined){
				return new GameMath.Vector2f(this.x / one,this.y / two);
			}
			else{
				return new GameMath.Vector2f(this.x / one, this.y / one);
			}
		}

		this.divideEquals = function(one,two){
			if(two!=undefined){
				this.x /= one;
				this.y /= two;
			}
			else{
				this.x /= one;
				this.y /= one;
			}
		}

		this.reverse = function(){
			this.x=-this.x;
			this.y=-this.y;

			return this;
		}

		this.normalize = function(){
			var magnitude = Math.sqrt(this.x*this.x+this.y*this.y);

			this.x /= magnitude;
			this.y /= magnitude;
		}
	},
	Random:{
		randDouble: function(){
			return Math.random();
		},
		randInt:function(limit1,limit2){
			if(limit2!=undefined){
				return randInt(limit2-limit1)+limit1;
			}
			else{
				return Math.floor(Math.random()*(limit1+1));
			}
		}
	}
}