var canvas = document.getElementById("Background");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(20, 0, 180, 100);
/// 20, 0 to 20, 100 
ctx.moveTo(20, 0);
ctx.lineTo(180, 100);
ctx.stroke();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        
    }
}


