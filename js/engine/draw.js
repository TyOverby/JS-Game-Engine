function Pane(canvasId){
	var canvas = document.getElementById(canvasId);
		if(canvas === undefined){
				throw "No canvas matching"+canvasId;
		}
	var ctx = canvas.getContext("2d");

	this.getWidth = function(){
		return ctx.width;
	}

	this.getHeight = function(){
		return ctx.height;
	}


	this.resetColor = function(){
		ctx.fillstyle = "cyan";
		ctx.strokestyle = "cyan";
		ctx.globalAlpha = 1;
		ctx.fillstyle = 5;
	}

	this.drawRectFill = function(x,y,width,height,color){
		ctx.fillstyle = color;
		ctx.fillRect(x,y,width,height);

		this.resetColor();
	}

	this.drawRectBorder = function(x, y, width, height, color, lineWidth){
		ctx.fillstyle = color;
		ctx.lineWidth = lineWidth;
		ctx.strokeRect(x,y,width,height);

		this.resetColor();
	}
}