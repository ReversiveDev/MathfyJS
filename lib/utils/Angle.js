import { Vector } from "./Vector.js";

export class Angle {

    static DEGREES2RADIANS  = Math.PI/180;
    static RADIANS2DEGREES  = 1/Math.PI*180;
    static TWO_PI           = Math.PI*2;

    radians;

    get degrees(){
        return this.radians*Angle.RADIANS2DEGREES;
    }

    constructor(radians = 0){
        this.radians = radians % Angle.TWO_PI;
    }

    /**
     * @param {number} degrees 
     * @returns {Angle}
     */
    static fromDegrees(degrees){
        return new Angle(degrees*Angle.DEGREES2RADIANS);
    }

    /**
     * @param {Vector} vector 
     * @returns {Angle}
     */
    static fromVector(vector){
        vector = vector.normalize();
        return new Angle(Math.atan2(vector.y, vector.x));
    }

    /**
     * @param {number} angle 
     * @param {boolean} isDegrees 
     */
    add(angle, isDegrees){
        if(isDegrees)
            angle = angle*Angle.DEGREES2RADIANS;
        this.radians += angle;
    }

}