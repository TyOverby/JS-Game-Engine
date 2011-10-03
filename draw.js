function Pane(canvasId){
	var canvas = document.getElementById(canvasId);
		if(canvas === undefined){
				throw "No canvas matching" + canvasId;
		}
	var ctx = canvas.getContext("2d");

	this.getWidth = function(){
		return canvas.width;
	}

	this.getHeight = function(){
		return canvas.height;
	}

	this.getContext = function(type){
		if(arguments[0]){
			return canvas.getContext(type);
		}
		else{
			return ctx;
		}
	}


	this.resetColor = function(){
		ctx.fillStyle = "cyan";
		ctx.strokeStyle = "cyan";
		ctx.globalAlpha = 1;
		ctx.fillstyle = 5;
	}

	this.drawRectFill = function(x,y,width,height,color){
		ctx.fillStyle = color;
		ctx.fillRect(x,y,width,height);

		this.resetColor();
	}

	this.drawRectBorder = function(x, y, width, height, color, lineWidth){
		ctx.fillStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.strokeRect(x,y,width,height);

		this.resetColor();
	}
}