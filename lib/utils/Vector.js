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

    /**
     * @description
     * Adiciona um vetor ao outro, e retorna um vetor do resultado da soma.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns {Vector}
     */
    add(x = 0, y = 0){
        if(x instanceof Vector) {
            y = x.y;
            x = x.x;
        }
        return new Vector(this.x+x, this.y+y);
    }

    /**
     * @description
     * Subtrai um vetor do outro, e retorna um vetor do resultado da subtração.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @returns {Vector}
     */
    sub(x = 0, y = 0){
        if(x instanceof Vector) {
            y = x.y;
            x = x.x;
        }
        return new Vector(this.x-x, this.y-y);
    }

    /**
     * @description
     * Define novos valores ao vetor.
     * 
     * @param {Number} x 
     * @param {Number} y
     * @returns {void} 
     */
    set(x = 0, y = 0){
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

    mul(scalar = 0){
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

    /**
     * @description
     * Retorna uma cópia do vetor, se esta cópia for alterada não influenciará o vetor copiado.
     * 
     * @returns {Vector}
     */
    copy(){
        return new Vector(this.x, this.y);
    }

}