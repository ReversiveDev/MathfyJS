import { Angle } from "./Angle.js";

export class Vector {

    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    /**
     * @param {Angle} angle
     */
    static fromAngle(angle){
        return new Vector(Math.cos(angle.radians), Math.sin(angle.radians));
    }

    add(x = 0, y = 0){
        if(x instanceof Vector) {
            y = x.y;
            x = x.x;
        }
        return new Vector(this.x+x, this.y+y);
    }

    sub(x = 0, y = 0){
        if(x instanceof Vector) {
            y = x.y;
            x = x.x;
        }
        return new Vector(this.x-x, this.y-y);
    }

    set(x, y){
        if(x instanceof Vector) {
            y = x.y;
            x = x.x;
        }
        this.x = x;
        this.y = y;
    }

    mag(){
        return Math.sqrt(this.x*this.x+this.y*this.y);
    }

    normalize(){
        let length = this.mag();
        return new Vector(this.x/length || 0, this.y/length || 0);
    }

    mul(scalar){
        return new Vector(this.x*scalar, this.y*scalar);
    }

    /**
     * @description
     * Usado para pegar um vetor direção entre o vetor especificado
     * 
     * @param {Vector} vector 
     * @returns {Vector}
     */
    lookAt(vector){
        return this.sub(vector).normalize();
    }

}