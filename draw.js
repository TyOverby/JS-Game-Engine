CanvasRenderingContext2D.prototype.drawLine = function(p1,p2){
    this.beginPath();
    this.moveTo(p1.x,p1.y);
    this.lineTo(p2.x,p2.y);
    this.closePath();
    this.stroke();
}


CanvasRenderingContext2D.prototype.drawVector = function(position, velocity){
    if(velocity == null || velocity ==undefined){
        velocity = position;
        position = new Vector2f(0,0);
    }

    this.drawLine(position,velocity.plus(position));
}

CanvasRenderingContext2D.prototype.fillCircle = function(position, radius){
    this.beginPath();
    this.arc(position.x,position.y,radius,0,Math.PI*2,true);
    this.fill();
    this.closePath();
}
CanvasRenderingContext2D.prototype.setSize = function(width,height){
    this.width = width;
    this.height = height;

    this.canvas.width = width;
    this.canvas.height = height;
}

CanvasRenderingContext2D.prototype.tileBackground = function(image, offset){
    if(offset==undefined||offset==null){
        offset = 0;
    }

    for(var x=0; x<this.width;x+=image.width){
        for(var y=0; y<this.height;y+=image.height){
            this.drawImage(image,x+offset,y+offset);
        }
    }
}

CanvasRenderingContext2D.prototype.cover = function(){
    this.fillRect(0,0,this.width,this.height);
}

/*
function Pane(canvasId){
	var canvas = document.getElementById(canvasId);
		if(canvas === undefined){
				throw "No canvas matching" + canvasId;
		}
	var ctx = canvas.getContext("2d");

	this.getWidth = function(){
		return ctx.width;
	}

	this.getHeight = function(){
		return ctx.height;
	}

	this.setSize = function(width,height){
		ctx.width = width;
		ctx.height = height;

		canvas.width = width;
		canvas.height = height;

		console.log(width+" "+height)
	}

	this.getContext = function(type){
		if(arguments[0]){
			return canvas.getContext(type);
		}
		else{
			return ctx;
		}
	}

	this.clearRect = function(x,y,width,height){
		ctx.clearRect(x,y,width,height);
	}

	this.resetColor = function(){
		ctx.fillStyle = "cyan";
		ctx.strokeStyle = "cyan";
		ctx.globalAlpha = 1;
		ctx.fillstyle = 5;
	}

	this.setFillColor = function(color){
		if(color!=undefined){
			ctx.fillStyle = color;
		}
		else{
			ctx.fillStyle="black"
		}
	}
	this.setStrokeColor = function(color){
		if(color!=undefined){
			ctx.strokeStyle = color;
		}
		else{
			ctx.strokeStyle="black"
		}
	}

	this.drawRectFill = function(x,y,width,height,color){
		this.setFillColor(color);

		ctx.fillRect(x,y,width,height);

		this.resetColor();
	}
	this.drawRectStroke = function(x, y, width, height, color, lineWidth){
		this.setStrokeColor(color);

		ctx.lineWidth = lineWidth;
		ctx.strokeRect(x,y,width,height);

		this.resetColor();
	}

	this.drawCircleFill = function(x,y,radius,color){
		this.setFillColor(color);

		ctx.beginPath();
		ctx.arc(x,y,radius,0,Math.PI*2,true);
		ctx.fill();
		ctx.closePath();

		this.resetColor();
	}
	this.drawCircleStroke = function(x,y,radius,color){
		this.setStrokeColor(color);

		ctx.beginPath();
		ctx.arc(x,y,radius,0,Math.PI*2,true);
		ctx.stroke();
		ctx.closePath();

		this.resetColor();
	}

	this.drawLine = function(x1,y1,x2,y2,color){
		this.setStrokeColor(color);

		ctx.beginPath();
		ctx.moveTo(x1,y1);
		ctx.lineTo(x2,y2);
		ctx.closePath();
		ctx.stroke();

		this.resetColor();
	}
}
*/