var canvas2=document.getElementById("canvas")
ctx=canvas.getContext("2d")
color="red"
ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.arc(500, 500, 40 ,0 , 2*Math.PI)
   ctx.stroke();
 canvas2.addEventListener("mousedown", myMousedown);
 function myMousedown (e){
  mousex=e.clientX-canvas.offsetLeft;
  mousey=e.clientY-canvas.offsetTop;
  ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.arc(mousex,mousey,40,0,2*Math.PI)
  ctx.stroke();
 console.log(mousex)
console.log(mousey)}
