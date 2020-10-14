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


var mouse={
x:undefined,
y:undefined

}

window.addEventListener('mousemove',  function(event){

mouse.x=event.x;
mouse.y=event.y;

  console.log(mouse);

})

function circle(x,y,dx,dy,radius,vr){
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.dx=dx
  this.dy=dy;
  this.vr=vr;
  var colo=`rgba(${Math.random()*241},${Math.random()*241},
  ${Math.random()*241},1)`;
   
  this.draw=function(tempr){

    c.beginPath();
    c.arc(this.x,this.y,tempr,0,390,false);
   // c.strokeStyle="red"
   c.fillStyle=colo;
   
   //c.fillStyle='rgba(255,0,0,1)'; 
   c.fill();
      c.stroke();
   //  console.log(this.x,this.y);
  }
this.update=function(){

  /// maximum & minimum boundry 
  if(this.x>=innerWidth||this.x<=0)this.dx=-this.dx;
  if(this.y>=innerHeight||this.y<=0)this.dy=-this.dy;
  
  this.x+=this.dx;
  this.y+=this.dy;
  // if(this.vr>3 ||this.vr<0 )
  // this.vr=.22;



  /// mouse interaction;



// if(this.radius>37)
// /this.radius-=3;



  if(this.radius>=43||this.radius<=8)
   this.vr=-this.vr;
  
   //if() this.vr=+this.vr;
// this.radius=15;
    console.log(this.vr,this.radius);
   
  //  if(this.radius>40)
  //  this.vr=+this.vr;
  this.radius+=this.vr;
tempr=this.radius;
if((mouse.x-this.x<50&&mouse.x-this.x>-50&&
  mouse.y-this.y<50&&mouse.y-this.y>-50))
  {//this.vr=+this.vr;
  tempr=this.radius*2;
  if(tempr<48||tempr>65)tempr=55;
}


 this.draw(tempr);


 
}

}

var circleArr=[];




for(var i=0;i<150;i++){
var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=Math.random()*2;
var dy=Math.random()*2;
var radius=Math.random()*13+6;
var vr=Math.random()*.3+.01;
circleArr.push(new circle(x,y,dx,dy,radius,vr));

}

var r=.3,x=30,y=50,radius=20;
//circle.draw();
function animation(){

  requestAnimationFrame(animation);
  c.clearRect(0,0,innerWidth,innerHeight);

//   c.beginPath();

//     c.arc(x+r,y+r,radius,0,390,false);
//     c.strokeStyle="red"
//       c.stroke();
// if(radius>30||radius<1)r=-r;
// radius+=r;


for(var i=0;i<circleArr.length;i++)
{
  //circleArr[i].draw();
  circleArr[i].update();
}

}


animation();

















