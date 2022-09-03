

let pi = Math.PI;
let r = Number(prompt("Ingrese el radio del Circulo", 1));
let area;
    area = (pi * Math.pow(r,2));
function formulaAreaCirculo(area, imagen="imagenes/Circulo.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return area;
}
console.log(`El Area del Circulo es: ${formulaAreaCirculo(area)}`);

