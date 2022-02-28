
export class Vector3 {

    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(x = 0, y = 0, z = 0){
        if(x instanceof Vector3) {
            y = x.y;
            z = x.z;
            x = x.x;
        }
        return new Vector3(this.x+x, this.y+y, this.z+z);
    }

    sub(x = 0, y = 0){
        if(x instanceof Vector) {
            y = x.y;
            z = x.z;
            x = x.x;
        }
        return new Vector3(this.x-x, this.y-y, this.z+z);
    }

    set(x, y){
        if(x instanceof Vector3) {
            y = x.y;
            z = x.z;
            x = x.x;
        }
        this.x = x;
        this.y = y;
        this.z = z;
    }

    mag(){
        return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
    }

    normalize(){
        let length = this.mag();
        return new Vector3(this.x/length, this.y/length, this.z/length);
    }

    mul(scalar){
        return new Vector3(this.x*scalar, this.y*scalar, this.z*scalar);
    }

}