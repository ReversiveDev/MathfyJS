import { Circle } from "./Circle.js";
import { Vector } from "./Vector.js";


export class Rect {

    set x(value){
        this.position.x = value;
    }

    set y(value){
        this.position.y = value;
    }

    get x(){
        return this.position.x;
    }

    get y(){
        return this.position.y;
    }

    constructor(x = 0, y = 0, width = 32, height = 32){
        this.position = new Vector(x, y);
        this.width = width;
        this.height = height;
    }

    /**
     * @param {Circle} circle 
     */
    isInsideCircle(circle){
        let testX, testY;
        
        if(circle.x < this.x) testX = this.x;
        else if(circle.x >= this.x + this.width) testX = this.x + this.width;

        if(circle.y < this.y) testY = this.y;
        else if(circle.y >= this.y + this.height) testY = this.y + this.height;

        let distance = new Vector(circle.x-testX, circle.y-testY).mag();
        return distance <= circle.radius;
    }

    /**
     * @param {Rect} rect 
     */
    isInsideRect(rect){
        return this.x > rect.x && this.x < rect.x + rect.width && this.y > rect.y && this.y < rect.y + rect.height;
    }

    isInside(shape){
        if(shape instanceof Circle) return this.isInsideCircle(shape);
        else if(shape instanceof Rect) return this.isInsideRect(shape);
        else console.warn("This shape is not valid.");
    }

}