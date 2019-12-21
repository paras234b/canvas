var canvas = document.getElementById('mycanvas');
var innerHeight,innerWidth;
innerHeight = canvas.height = window.innerHeight;
innerWidth = canvas.width = window.innerWidth;

var c = canvas.getContext('2d');

 

function Circle(x,y,dx,dy,radius){
	this.x=x;	
	this.y=y;
        this.dx=dx;	
	this.dy=dy;
        this.radius=radius;
	var r = Math.random()*225;
	var g = Math.random()*225;
	var b = Math.random()*225; 
	var r1 = Math.random()*225;
	var g1 = Math.random()*225;
	var b1 = Math.random()*225; 

 this.draw = function(){
		 c.strokeStyle = 'rgba('+r+','+g+','+b+',1)'; 
                 c.fillStyle ='rgba('+r1+','+g1+','+b1+',1)'; 
		c.lineWidth=2;
                c.beginPath();   
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);  
                c.fill();
		c.stroke();  
              //  c.closePath();                   
 
        }  
        this.update = function(){
                  if(this.x+this.radius > innerWidth || this.x-this.radius<0){
		this.dx = -this.dx;
		} 
		if(this.y+this.radius >innerHeight || this.y-this.radius <0){
		this.dy = -this.dy;
		} 
		this.x +=this.dx;
		this.y +=this.dy; 
                this.draw();
        }  

     

}


var circleArr =[];
for(i=0;i<50;i++){
	var x =Math.random()*innerWidth;
	var y =Math.random()*innerHeight;
	var dx=(Math.random()-0.5)*4;
	var dy=(Math.random()-0.5)*4;
	var radius =70;
 	circleArr.push(new Circle(x,y,dx,dy,radius));

} 

function animate(){ 

  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);   
  for(j=0;j< circleArr.length;j++){
     circleArr[j].update();
  }
}
animate();
 
