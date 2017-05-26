var canvas = document.getElementById("Background");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "Red";
ctx.fillRect(20, 0, 20, 100);
/// 20, 0 to 20, 100 
ctx.moveTo(20, 0);
ctx.lineTo(20, 100);
ctx.stroke();



