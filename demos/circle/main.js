import { Angle, Circle, Vector } from "../../lib/Mathfy.js";

let cvs = document.createElement("canvas");
cvs.width = innerWidth;
cvs.height = innerHeight;
cvs.style.background = "#c2c2b0";
let ctx = cvs.getContext("2d");
document.body.appendChild(cvs);

// key events
let KEY = {}
{
    document.addEventListener("keydown", e => {
        KEY[e.key] = true;
    });

    document.addEventListener("keyup", e => {
        KEY[e.key] = false;
    });
}

let Camera = new Vector(cvs.width/2, cvs.height/2);
let Mouse = new Vector(0, 0);

document.addEventListener("mousemove", e => {
    Mouse.x = e.clientX;
    Mouse.y = e.clientY;
});

function drawCircle(x, y, radius){
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Angle.TWO_PI);
    ctx.closePath();
    ctx.fill()
    ctx.stroke();
}

let circle1 = new Circle(0, 0, 16);
let circle2 = new Circle(20, -20, 16);

;(function update(){

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.save();
    ctx.translate(Camera.x, Camera.y);

    drawCircle(circle1.x, circle1.y, circle1.radius);
    drawCircle(circle2.x, circle2.y, circle2.radius);

    ctx.fillStyle = "black";
    ctx.fillText(circle1.isInsideCircle(circle2), -200, -200);
    
    ctx.restore();
    requestAnimationFrame(update);

})();