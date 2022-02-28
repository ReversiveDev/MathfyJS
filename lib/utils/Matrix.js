

export class Matrix {

    /**
     * @private
     */
    _width;
    /**
     * @private
     */
    _height;
    /**
     * @private
     */
    _data;

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    constructor(width = 3, height = 3, defaultValue = 0){
        this._width = width;
        this._height = height;
        this._data = new Array(width*height).fill(defaultValue);
    }

    /**
     * @param {Matrix} matrix 
     */
    add(matrix){
        if(this.width === matrix.width && this.height === matrix.height){
            let resultMatrix = new Matrix(this.width, this.height);
            for(let i = 0; i < this._data.length; i++){
                resultMatrix._data[i] = this._data[i] + matrix._data[i];
            }
            return resultMatrix;
        }else {
            console.warn("Adding matrices requires both matrices to have the same dimensions.");
        }
    }

    /**
     * @param {Matrix} matrix 
     */
    sub(matrix){
        if(this.width === matrix.width && this.height === matrix.height){
            let resultMatrix = new Matrix(this.width, this.height);
            for(let i = 0; i < this._data.length; i++){
                resultMatrix._data[i] = this._data[i] - matrix._data[i];
            }
            return resultMatrix;
        }else {
            console.warn("Matrix subtraction requires both matrices to have the same dimensions.");
        }
    }

    /**
     * @param {Matrix} matrix 
     */
    mul(matrix){
        if(this.width === matrix.height){
            let resultMatrix = new Matrix(this.height, matrix.width);
            for(let i = 0; i < this.height; i++){
                for(let j = 0; j < matrix.width; j++){
                    let sum = 0;
                    for(let k = 0; k < this.width; k++){
                        sum += this.get(i, k) * matrix.get(k, j);
                    }
                    resultMatrix.set(i, j, sum);
                }
            }
            return resultMatrix;
        }else {
            console.warn("Matrix subtraction requires both matrices to have the same dimensions.");
        }
    }

    set(x, y, value){
        this._data[x+y*this.width] = value;
    }

    get(x, y){
        return this._data[x+y*this.width];
    }

    toString(){
        let result = "[";
        for(let i = 0; i < this._data.length; i++){
            result += `${this._data[i]}`;
            if((i+1)%this.width === 0){
                result += ']\n' + (i === this._data.length-1 ? '' : '[');
            }else {
                result += '\t\t';
            }
        }
        return result;
    }

}