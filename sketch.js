function setup() {
  createCanvas(1024, 768);
  background(153);
}
let triangleX= 0;
let triangleY= 0;
let triangleMoveRight=true;
let triangleMoveDown=true;
let angle = 0;
let rectWidth= 15;
let rectHeight=15;
let rectGrow= true;
function draw() {
fill(89,20,11)
triangle(triangleX, triangleY, triangleX+56, triangleY+50, triangleX+28, triangleY+100);
if (triangleX >= 200){
  triangleMoveRight =false;
}
if (triangleX === 0){
  triangleMoveRight=true
}
if (triangleY >= 200){
  triangleMoveDown = false
}
if (triangleY === 0){
  triangleMoveDown = true
}
if (rectWidth >= 150){
  rectGrow= false
}
if (rectWidth <= 15){
  rectGrow = true
}
if (triangleMoveRight === true){
triangleX += 0.5
}
else{
  triangleX -= 0.5
}
if (triangleMoveDown === true){
  triangleY += 0.5
}
else{
  triangleY -= 0.5
}
if(rectGrow){
  rectWidth +=.1 
  rectHeight+=.1
}
else{
  rectWidth -= .1
  rectHeight -=.1
}
fill(158,41,70);
translate(width/2, height/2);
rotate(angle);
rect(56, 46, rectWidth, rectHeight);
angle +=0.05;
}
