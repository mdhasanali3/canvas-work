var canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d')

window.addEventListener('resize',function(){
  init();
})



function rotate(velocity,angle)
{
  const rotatevelocities={
    x:velocity.x*Math.cos(angle)-velocity.y*Math.sin(angle),
    y:velocity.x*Math.sin(angle)+velocity.y*Math.cos(angle)
  }
return rotatevelocities;
}


function resolve_collision(ball,otherball)
{

const xvelocitydiff=ball.velocity.x-otherball.velocity.x
const yvelocitydiff=ball.velocity.y-otherball.velocity.y

const xdist=otherball.x-ball.x
const ydist=otherball.y-ball.y

if(xvelocitydiff*xdist + yvelocitydiff*ydist>=0)
{

  const angle=-Math.atan2(otherball.y-ball.y,otherball.x-ball.x)

const m1=ball.mass
const m2=otherball.mass

const u1=rotate(ball.velocity,angle)
const u2=rotate(otherball.velocity,angle)

const v1={x:u1.x*(m1-m2)/(m1+m2)+u2.x*2*m2/(m1+m2),y:u1.y}
const v2={x:u2.x*(m1-m2)/(m1+m2)+u1.x*2*m2/(m1+m2),y:u2.y}

const vfinal1=rotate(v1,-angle)
const vfinal2=rotate(v2,-angle)

var ui=Math.random()*10;

if(vfinal2.x>10)vfinal2.x-=ui;
if(vfinal2.y>10)vfinal2.y-=ui;

if(vfinal1.y>10)vfinal1.y-=ui;
if(vfinal1.x>10)vfinal1.x-=ui;

ball.velocity.x=vfinal1.x
ball.velocity.y=vfinal1.y

otherball.velocity.x=vfinal2.x
otherball.velocity.y=vfinal2.y



}



}

function ballc(x,y,radius,mass,vr)
{

   this.x=x
   this.y=y
   this.radius=radius
   this.vr=vr
   this.mass=mass;

  var fcol=`rgba(${Math.random()*241},${Math.random()*241},
                    ${Math.random()*241},1)`
var scol=`rgba(${Math.random()*241},${Math.random()*241},
${Math.random()*241},1)`

  this.draw=function(){

c.beginPath();
c.arc(this.x,this.y,this.radius,0,30,false)
c.lineWidth=5;
c.fillStyle=fcol
c.strokeStyle=scol

c.fill();
c.stroke();

c.closePath()


  }
    
this.velocity={
  x:Math.random()*4,
  y:Math.random()*2
}

  this.update=ballarr=>{

if(this.x-this.radius<this.radius||
  this.x+this.radius>innerWidth)
{this.velocity.x=-this.velocity.x;}

if(this.y-this.radius<this.radius||
  this.y+this.radius>innerHeight)
{this.velocity.y=-this.velocity.y;
}

    this.x+=this.velocity.x;
    this.y+=this.velocity.y;

    for(var i=0;i<ballarr.length;i++)
{
if(this===ballarr[i])continue;
else{
if(dist(this.x,this.y,ballarr[i].x,ballarr[i].y)-Math.abs(
  this.radius+ballarr[i].radius
)<3)
{
  resolve_collision(this,ballarr[i])
  //c.strokeText("collison",20,30); 
  //console.log("colsion")
}

}

}

    this.draw();
  }




}



var ballarr=[];

function Animation(){

requestAnimationFrame(Animation);
c.clearRect(0,0,innerWidth,innerHeight)

for(var i=0;i<ballarr.length;i++)
{

  ballarr[i].update(ballarr);
}



}
function dist(x1,y1,x2,y2)
{
return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))


}

function init(){
ballarr=[];


for(var i=0;i<55;i++)
{
  
  var radius=Math.random()*30+6;
var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var mass=radius*.1
var vr=Math.random()*.3;
if(i>0){
  for(var j=0;j<ballarr.length;j++)
{
if(dist(x,y,ballarr[j].x,ballarr[j].y)-
(Math.abs(radius+ballarr[j].radius))<3)
{

  x=Math.random()*innerWidth;
  y=Math.random()*innerHeight;
j=-1;
}


}
}
  

  ballarr.push(new ballc(x,y,radius,mass,vr))

}

Animation();
}


init();



