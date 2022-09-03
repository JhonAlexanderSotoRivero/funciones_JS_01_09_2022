

let pi = Math.PI;
let r = Number(prompt("Ingrese el radio del Esfera", 1));
let area;
    area = ((4 * pi) * Math.pow(r,2));
function formulaAreaEsfera(area, imagen="imagenes/Esfera.png"){
    document.body.insertAdjacentHTML("afterbegin", `<img src="${imagen}">`);
    return area;
}
console.log(`El Area del Esfera es: ${formulaAreaEsfera(area)}`);

