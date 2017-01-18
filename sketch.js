var s ;
var scl = 20;
var food;
function setup(){
  createCanvas(800,600);
s = new snake();
frameRate(10);
pickLocation();
 
}
function pickLocation() {
	
	 food = createVector(random(width-scl),random(height-scl));

	 }

function draw(){

  background(74);
  s.update();
  s.show();
  if(s.eat(food)) {
  	pickLocation();
  }
s.death();

  fill(255,0,100);
  arc(food.x,food.y,scl,scl,0,2*PI);
}
  function keyPressed(){
    if(keyCode===UP_ARROW){
      s.dir(0,-1);
    }
    else if(keyCode===DOWN_ARROW){
      s.dir(0,1);
    } else if(keyCode===RIGHT_ARROW){
      s.dir(1,0);
    }else if(keyCode===LEFT_ARROW){
      s.dir(-1,0);
    }
    
}


function snake() {
  this.x =  0;
  this.y= 0;
  this.xspeed=1;
  this.yspeed=0;
  this.total = 1;
  this.tail =[];
  this.death = function(pos){
  	for(var i = 0; i < this.tail.length; i++){
  		var pos = this.tail[i];
  		var d = dist(this.x,this.y,pos.x,pos.y);
  		if(d<scl){
  			this.total =1;
  			this.tail =[];
  			pickLocation();
  			this.x=0;
  			this.y=0;
  			this.xspeed=1;
  			this.yspeed=0;
  		}

  	}
  }
  this.update=function(){
if(this.total===this.tail.length){
  	for (var i = 0; i < this.tail.length-1; i++) {
        
  		this.tail[i] = this.tail[i+1];
  	}}
  	this.tail[this.total-1]= createVector(this.x,this.y);
    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;
    this.x= constrain(this.x,0,width-scl);
    this.y= constrain(this.y,0,height-scl);
  
  }
  

  this.dir= function (x,y){
    this.xspeed=x;
    this.yspeed=y;
  }
  
  this.show = function() {
  	fill(255);
  for (var i = 0; i <this.total; i++) {
  arc(this.tail[i].x+scl,this.tail[i].y+scl,scl,scl,0,2*PI);  	}
  
  }
  this.eat = function(pos){
  	var d = dist(this.x,this.y,pos.x,pos.y);
  	if(d < scl){
  		this.total++;
  		return true;
  	}
  	else{
  		return false;
  	}
  }
  
}