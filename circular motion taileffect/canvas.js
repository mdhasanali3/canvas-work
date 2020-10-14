var canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d')


mouse={
  x:window.innerWidth/2,
  y:window.innerHeight/2
}

window.addEventListener('resize',function(){
 /* after resizing we also need to resize canvas also
 with inner height weight
 */
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  

  init();
})
window.addEventListener("mousemove",event=>{

mouse.x=event.clientX;
mouse.y=event.clientY
 // Animation()

 // init()
})



function randomint(min,max){
  return Math.floor(Math.random()*(max-min+1)+min)
}



function circle(x,y,radius,mass,vr)
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

  this.draw=lastpoint=>{

c.beginPath();
c.lineWidth=this.radius;
c.fillStyle=fcol
c.strokeStyle=scol
c.moveTo(lastpoint.x,lastpoint.y)
c.lineTo(this.x,this.y)
c.fill();
c.stroke();

c.closePath()


  }
    
this.velocity=.05
this.radians=Math.random()*360

// this rt manage size 

this.rt=randomint(60,90)

/*for dragging effect we need to reduce pixel 
so we create last mouse position
*/

this.lastmouse={x:x,y:y}


  this.update=function(){
const lastpoint={x:this.x,y:this.y}

this.radians+=this.velocity;

this.lastmouse.x+=(mouse.x-this.lastmouse.x)*.05
this.lastmouse.y+=(mouse.y-this.lastmouse.y)*.05

this.x=this.lastmouse.x+(Math.cos(this.radians)*this.rt)
this.y=this.lastmouse.y+(Math.sin(this.radians)*this.rt)
   
  //c.strokeText("collison",20,30); 
  //console.log("colsion")

  this.draw(lastpoint);
}
}




var circlearr;

function Animation(){

requestAnimationFrame(Animation);

/*    
here we use clearrect it disappear all so
this time we use fillrect function to refresh the canvas 
and add this rectangle with white color with less opticity

        */
       c.fillStyle='rgba(255,255,255,.04)'
  c.fillRect(0,0,innerWidth,innerHeight)

for(var i=0;i<circlearr.length;i++)
{

  circlearr[i].update();
}



}


function init(){
  circlearr=[];


for(var i=0;i<155;i++)
{
  /* mass related to radius
  */
  
  var radius=randomint(5,10);
var x=randomint( mouse.x,mouse.x+30);
var y=randomint(mouse.y,mouse.y+30);
var mass=radius*.1
var vr=Math.random()*.3;

  

  circlearr.push(new circle(x,y,radius,mass,vr))

}

Animation();
}


init();



