var c=document.getElementById("Background");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(20,20,150,100);

ctx.moveTo(20, 0);
ctx.lineTo(180, 100);
ctx.stroke();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        
    }
}


