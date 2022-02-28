import { Vector, Angle } from "./lib/Mathfy.js";

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

class Stick {

    get x(){
        return this.position.x + (this.parent ? this.parent.x : 0);
    }

    get y(){
        return this.position.y + (this.parent ? this.parent.y : 0);
    }

    set x(value){
        this.position.x = value;
    }

    set y(value){
        this.position.y = value;
    }

    constructor(x = 0, y = 0, size = 16, angle = new Angle){
        this.position = new Vector(x, y);
        this.size = size;
        this.angle = angle;
        this.parent = null;
        this.children = [];
    }

    update(){
        let direction = Vector.fromAngle(this.angle).mul(this.size/2);
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(this.x-direction.x, this.y-direction.y);
        ctx.lineTo(this.x+direction.x, this.y+direction.y);
        ctx.closePath();
        ctx.stroke();
        this._updateChildren();
    }

    addChild(child){
        this.children.push(child);
        child.parent = this;
    }

    _updateChildren(){
        for(let child of this.children){
            child.update();
        }
    }

}

class Ball {

    get x(){
        let x;
        if(this.parent){
            let mag = this.position.mag() * (this.position.y < 0 || this.position.x < 0 ? -1 : 1);
            x = this.parent.x + Math.cos(this.parent.angle.radians) * mag;
        }else {
            x = this.position.x;
        }
        // let x = this.position.x + (this.parent ? this.parent.x : 0);
        return x;
    }

    get y(){
        let y;
        if(this.parent){
            let mag = this.position.mag() * (this.position.y < 0 || this.position.x < 0 ? -1 : 1);
            y = this.parent.y + Math.sin(this.parent.angle.radians) * mag;
        }else {
            y = this.position.y;
        }
        // let y = this.position.y + (this.parent ? this.parent.y : 0);
        return y;
    }

    set x(value){
        this.position.x = value;
    }

    set y(value){
        this.position.y = value;
    }

    constructor(x, y, radius){
        this.position = new Vector(x, y);
        this.radius = radius;
        this.border = null;
        this.borderSize = 1;
        this.color = "white";
        this.angle = new Angle;
        this.parent = null;
        this.children = [];
    }

    update(){
        if(this.border) {
            ctx.lineWidth = this.borderSize;
            ctx.strokeStyle = this.border;
        }
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
        if(this.border) ctx.stroke();
        this._updateChildren();
    }
    
    addChild(child){
        this.children.push(child);
        child.parent = this;
    }

    _updateChildren(){
        for(let child of this.children){
            child.update();
        }
    }

}

let Camera = new Vector(cvs.width/2, cvs.height/2);
let Mouse = new Vector(0, 0);

document.addEventListener("mousemove", e => {
    Mouse.x = e.clientX;
    Mouse.y = e.clientY;
});


let s = new Stick(0, 0, 100);
let b = new Ball(50, 0, 8);
b.border = "black";

s.addChild(b);

;(function update(){

    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.save();
    ctx.translate(Camera.x, Camera.y);

    s.update();
    s.angle.add(8, true);

    ctx.restore();
    requestAnimationFrame(update);

})();