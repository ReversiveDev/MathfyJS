import { Rect } from "./Rect.js";
import { Vector } from "./Vector.js";

export class Circle {

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

    constructor(x = 0, y = 0, radius = 0){
        this.position = new Vector(x, y);
        this.radius = radius;
    }

    /**
     * @param {Circle} circle
     * @returns {boolean}
     */
    isInsideCircle(circle){
        return this.position.sub(circle.position).mag() < this.radius+circle.radius;
    }

    /**
     * @param {Rect} rect
     * @returns {boolean}
     */
    isInsideRect(rect){
        return rect.isInsideCircle(this);
    }

    isInside(shape){
        if(shape instanceof Circle) return this.isInsideCircle(shape);
        else if(shape instanceof Rect) return shape.isInsideCircle(shape);
        else console.warn("This shape is not valid.");
    }

}