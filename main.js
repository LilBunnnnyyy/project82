var mouseevent="empty";
var last_position_of_mouse_x,last_position_of_mouse_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var colour="#77DD77";
var width=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(a){
colour=document.getElementById("colour").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;
mouseevent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(a){
mouse_X=a.clientX - canvas.offsetLeft;
mouse_y=a.clientY - canvas.offsetTop;

if(mouseevent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.arc(mouse_X,mouse_y,radius,0,2*Math.PI)
    ctx.stroke();
}
last_position_of_mouse_x=mouse_X;
last_position_of_mouse_y=mouse_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(a){
mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(a){
mouseevent="mouseleave";
}