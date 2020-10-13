var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;




var c=canvas.getContext('2d');

// c.fillRect(100,100,100,100);
// c.fillStyle="rgba(200,250,180,1)";
// c.fillRect(60,270,100,100);
// c.fillStyle="rgba(200,150,198,7)";
// c.fillRect(400,200,100,100);
// c.fillRect(270,150,100,100);
// c.fillStyle="rgba(250,10,80,7)";

// c.fillRect(450,70,100,100);

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(350,100);
// c.lineTo(300,300);
// c.strokeStyle="rgba(181,260,0,.5)"
// c.stroke();
// for(var i=10;i<1000;i+=1){

//   var  x=Math.floor(window.innerWidth*Math.random());
//    var y=Math.floor(window.innerHeight*Math.random());
//    var z=Math.floor(47*Math.random());
// var a=40+x%241; var b=y%241; var d=(100+z)%241;

// console.log(x,y,z,a,b,d);
//   c.beginPath();
// c.arc(x,y,z,18,25,false);
// c.strokeStyle=`rgba(${a},${b},${d},1)`
// c.fillStyle="red"

// c.stroke();

  
// }


function circle(x,y,dx,dy,radius,vr){
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.dx=dx
  this.dy=dy;
  this.vr=vr;
  this.draw=function(){

    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,390,false);
    c.strokeStyle="red"
      c.stroke();
   //  console.log(this.x,this.y);
  }
this.update=function(){

  if(this.x>=670||this.x<=0)this.dx=-this.dx;
  if(this.y>=650||this.y<=0)this.dy=-this.dy;
  if(this.radius>=44||this.radius<=6)this.vr=-this.vr;
  this.x+=this.dx;
  this.y+=this.dy;
  this.radius+=this.vr;
 this.draw();


 
}

}

var circleArr=[];




for(var i=0;i<30;i++){
var x=Math.random()*600;
var y=Math.random()*400;
var dx=Math.random()*2;
var dy=Math.random()*2;
var radius=Math.random()*30+6;
var vr=Math.random()*.1;
circleArr.push(new circle(x,y,dx,dy,radius,vr));

}

var r=.3,x=30,y=50,radius=20;
//circle.draw();
function animation(){

  requestAnimationFrame(animation);
  c.clearRect(0,0,800,710);

//   c.beginPath();

//     c.arc(x+r,y+r,radius,0,390,false);
//     c.strokeStyle="red"
//       c.stroke();
// if(radius>30||radius<1)r=-r;
// radius+=r;


for(var i=0;i<circleArr.length;i++)
{
  circleArr[i].update();
}

}


animation();

















