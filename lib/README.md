# MathfyJS
Mathfy, uma biblioteca para calculos matematicos, te ajudará a programar sem dor de cabeça, e dará uma turbinada em sua produção.

Sinta-se à vontade para contribuir para o projeto, pois sua contribuição será muito bem-vinda.

Obs: A documentação abaixo está incompleta, em breve novas melhorias.

## Installation
```
npm install mathfyjs
```

## Usage

Aqui estará algumas dicas de como utilizar a biblioteca MathfyJS.

### Matrix

Crie uma matriz com:
```js
new Matrix(width: number, height: number, defaultValues: number);
```
Exemplo:
```js
import { Matrix } from "mathfyjs";

let m1 = new Matrix(4, 4);
m1.set(0, 0, 4);
m1.set(1, 1, 3);
m1.set(2, 2, 2);
m1.set(3, 3, 1);

let m2 = new Matrix(1, 4);
m2.set(0, 0, 4);
m2.set(0, 1, 3);
m2.set(0, 2, 2);
m2.set(0, 3, 1);
```
<br>

- Defina
```js
m1.set(x: number, y: number, value: number);
```
```js
m1.set(0, 0, 4);
```
<br>

- Multiplique
```js
m1.mul(matrix: Matrix): Matrix;
```
```js
m1 = m1.mul(m2);
```
<br>

- Adicione
```js
m1.add(matrix: Matrix): Matrix;
```
```js
m1 = m1.add(m2);
```
<br>

- Subtraia
```js
m1.sub(matrix: Matrix): Matrix;
```
```js
m1 = m1.sub(m2);
```

### Angle

Crie um ângulo com:
```js
new Angle(radians: number);
Angle.fromVector(vector: Vector);
Angle.fromDegrees(degrees: number);
```
Exemplo:
```js
import { Angle } from "mathfyjs";

let angle = Angle.fromDegrees(60);
```

- Converta graus para radianos e vice versa.
```js
let degreesToRadians = 80*Angle.DEGREES2RADIANS;
let radiansToDegrees = 1.39626*Angle.RADIANS2DEGREES;
```
<br>

- Adicione
```js
angle.add(angle: number, isDegrees: boolean);
```
```js
angle.add(5, true);
```

### Vector

Crie um vetor com:
```js
new Vector(x: number, y: number);
Vector.fromAngle(angle: Angle);
```
Exemplo:
```js
import { Vector } from "mathfyjs";

let vector = new Vector(2, 4);
```
<br>

- Multiplique por uma escalar
```js
vector.mul(scalar: number): Vector;
```
```js
vector = vector.mul(2);
```
<br>

- Adicione
```js
vector.add(vector: Vector): Vector;
vector.add(x: number, y: number): Vector;
```
```js
vector = vector.add(new Vector(2, 2));
```
<br>

- Subtraia
```js
vector.sub(vector: Vector): Vector;
vector.sub(x: number, y: number): Vector;
```
```js
vector = vector.sub(new Vector(2, 2));
```
<br>

- Normalize
```js
vector = vector.normalize(): Vector;
```
<br>

- Magnitude
```js
let length = vector.mag(): number;
```
<br>

- Defina um valor
```js
vector.set(vector: Vector): void;
vector.set(x: number, y: number): void;
```
```js
vector.set(4, 2);
```
<br>

- Obtenha um vetor direção entre dois vetores
```js
vector.lookAt(vector: Vector): Vector;
```
```js
let direction = vector.lookAt(new Vector(9, 7));
```
<br>

- Copie um vetor
```js
vector.copy(): Vector;
```
```js
let vector2 = vector.copy();
console.log(vector2 === vector); // false
```
<br>